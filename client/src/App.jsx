import { useState, useEffect } from 'react' 
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import AccessButton from './Components/Acces/AccesButton.jsx';
import Nav from './Components/Nav/Nav';
import LayoutHome from './Components/layout/Layout.jsx'
import Detail from './Components/detail/Detail.jsx';
import { Form }  from'./Components/AtivitiForm/AtivitiForm.jsx'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from './redux/slices/drivers/index.js'; // Asegúrate de que la ruta sea correcta

function App() {

  const { pathname } = useLocation()
  const [access, setAccess] = useState(false)
  const [nameFilter, setNameFilter] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [teamNames, setTeamNames] = useState([]);// estado para traer todos los nombres de los team para el filtro 

  const dispatch = useDispatch();
    const drivers = useSelector((state) => state.drivers.list);

    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [dispatch]);

  const handleNameFilter = (e) => {
    setNameFilter(e.target.value);
  };

    // useEffect para setear el etado de teamNames con todos los equipos 
    useEffect(() => {
      // Llamar a la API para obtener los nombres de los equipos
      axios.get(`${import.meta.env.VITE_ENDPOINT}/teamNames`)
        .then(response => {
          setTeamNames(response.data);
        })
        .catch(error => {
          console.error('Error fetching team names:', error);
        });
    }, []);
  
  const navigate = useNavigate()

  return ( 
    <div>
      { pathname !== '/' && <Nav nameFilter={nameFilter} handleNameFilter={handleNameFilter}/> }
        <Routes>
          <Route>
            <Route path="/" element={<AccessButton setAccess={setAccess} navigate={navigate} />} />
            <Route path='/home' element={<LayoutHome teamNames={teamNames} setNameFilter={setNameFilter} nameFilter={nameFilter} handleNameFilter={handleNameFilter} currentPage={currentPage} setCurrentPage={setCurrentPage}/>}/>
            <Route path="/detail/:id" element={<Detail />} />   
            <Route path='/AtivitiForm' element= {<Form teamNames={teamNames}/>}/>     
          </Route>
        </Routes>
    </div>
  );
};

export default App
