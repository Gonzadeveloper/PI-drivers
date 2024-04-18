// import React, { useState, useEffect } from 'react';
// import Card from '../card/Card';
// import axios from 'axios'
// import './Layout.css';
// import imagen from '../../assets/03f1986b72f04f8e6b78d4f937abfd50.jpg'
// import { useDispatch, useSelector } from "react-redux";

// export default function Layout({
//   nameFilter,
//   driversData,
//   currentPage,
//   setCurrentPage,
//   setNameFilter
// }) {

//   const itemsPerPage = 9;
//   const [filteredDrivers, setFilteredDrivers] = useState([]); //estado para la busqueda por nombre
//   const [totalPages, setTotalPages] = useState(1);// estado para actualizar las paginas al fitlrar 
//   const [teamNames, setTeamNames] = useState([]);// estado para traer todos los nombres de los team para el filtro 
//   const [teamFilter, setTeamFilter] = useState("All");//estado para el filtro 
//   const [orderFilter, setOrderFilter] = useState("disabled");//estado para el filtro 
//   const [birthdateOrderFilter, setBirthdateOrderFilter] = useState("disabled");
//   const [dbOrApi, setDbOrApi] = useState("all")
//   const [isInitialLoad, setIsInitialLoad] = useState(true);
//   const dispatch = (useDispatch)

//   // useEffect para setear el etado de teamNames con todos los equipos 
//   useEffect(() => {
//     // Llamar a la API para obtener los nombres de los equipos
//     axios.get('http://localhost:3001/teamNames')
//       .then(response => {
//         setTeamNames(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching team names:', error);
//       });
//   }, []);
  
//   // para renderizar toda la info 
//   useEffect(() => {
//     let filtered = driversData;

//     if (isInitialLoad) {
//       setIsInitialLoad(false);
//       return; // No se ejecuta el resto del efecto en la carga inicial
//     }

//     if (dbOrApi === "api"){
      
//       //reiniciar el paginado
//       setCurrentPage(1);
      
//       let driversApi = filtered.filter(driver => driver.id < 509);
      
//       filtered = driversApi
//     } if (dbOrApi === "db"){ 
      
//       //reiniciar el paginado
//       setCurrentPage(1);
      
//       let driversDb = filtered.filter(driver => typeof driver.id === 'string');
      
//       filtered = driversDb
      
//     } if(dbOrApi === "all"){
      
//       //reiniciar el paginado
//       setCurrentPage(1);
      
//       filtered = driversData
//     }

//     // Aplicar filtro por equipo
//     if (teamFilter !== "All") {

//       //reiniciar el paginado
//       setCurrentPage(1);

//       //quitamos todos los drivers que no tengan equipo
//       let driversWithTeams = filtered.filter(driver => driver.team.name !== undefined);
      
//       // hacemos un split sobre los teams para poder leerlos con incluides mas adelante, ademas llevamos toda la info del driver
//       // con trim borramos los espacios en blanco para tener mejores coincidencias 
//       let equiposSeparados = driversWithTeams.map(driver => ({
//         id:  driver.id,
//         name: driver.name,
//         last_name: driver.last_name,
//         description: driver.description,
//         image: driver.image,
//         birthdate: driver.birthdate,
//         nationality: driver.nationality,
//         team: { name: driver.team.name.split(',').map(team => team.trim()) }
//       }));

//       // coincidencias guarda los drivers cuyo team sea igual al del valor filtrado 
//       let coincidencias = []

//       // aca analizamos la coincidencias para guardarlas en el array de arriba
//       equiposSeparados.forEach(driver => {
//         if (driver.team.name.includes(teamFilter)) {
//           coincidencias.push(driver);
//         }
//       });

//       //volvemos la data al formato original porque si no mi componete card no la puede leer 
//       let originales = coincidencias.map(driver => ({
//         id:  driver.id,
//         name: driver.name,
//         last_name: driver.last_name,
//         description: driver.description,
//         image: driver.image,
//         birthdate: driver.birthdate,
//         nationality: driver.nationality,
//         team: { name: driver.team.name.join() }
//       }))
      
//       // asigamos el valor filtered  con las coincidencias para verlas mapeadas  en el render
//       filtered = originales
//     }

    
    
//     // Aplicar filtro por nombre
//     if (nameFilter.length > 0) {
//       filtered = filtered.filter(driver =>
//         driver.name.toLowerCase().includes(nameFilter.toLowerCase())
//       );
//     }
    
//     // Verificar si no hay resultados después de aplicar todos los filtros
//     if (filtered.length === 0) {
//       alert("no runners with the name were found");
//       filtered = driversData
//       setNameFilter('')
//     }

//     // Aplicar orden ascendente/descendente
//     filtered.sort((a, b) => {
//       if (orderFilter === "ascendente") {
//         return a.name.localeCompare(b.name);
//       } if (orderFilter === "descendente") {
//         return b.name.localeCompare(a.name);
//       } if (birthdateOrderFilter === "ascendente") {
//         return a.birthdate.localeCompare(b.birthdate);
//       } if (birthdateOrderFilter === "descendente") {
//         return b.birthdate.localeCompare(a.birthdate);
//       }
//     });

//     setFilteredDrivers(filtered);
//     setTotalPages(Math.ceil(filtered.length / itemsPerPage));
//   }, [driversData, nameFilter, teamFilter, orderFilter, birthdateOrderFilter, dbOrApi, isInitialLoad ]);

//   const handlePaginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const handleTeamFilterChange = (event) => {
//     setTeamFilter(event.target.value);
//   };

//   const handleOrderFilterChange = (event) => {
//     setOrderFilter(event.target.value);
//   };

//   const handleBirthdateOrderFilterChange = (event) => {
//     setBirthdateOrderFilter(event.target.value);
//   };

//   const handleDBorApiFilter = (event) => {
//     setDbOrApi(event.target.value)
//   }

//   //funcion para el pagiando 
//   const renderPageNumbers = () => {
//     const visiblePages = [];
//     const maxVisiblePages = 3; // Máximo de páginas visibles
//     const totalPagesToShow = Math.min(totalPages, maxVisiblePages);
  
//     let startPage = Math.max(1, currentPage - 2);
//     let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
  
//     if (endPage - startPage < maxVisiblePages - 1) {
//       startPage = Math.max(1, endPage - maxVisiblePages + 1);
//     }
  
//     for (let i = startPage; i <= endPage; i++) {
//       visiblePages.push(i);
//     }
  
//     return visiblePages.map((page) => (
//       <button
//         key={page}
//         onClick={() => handlePaginate(page)}
//         className={page === currentPage ? 'active page-button' : 'page-button'}
//       >
//         {page}
//       </button>
//     ));
//   };


//   return (
//     <div className='container_p'>

//             <div className='filters'>
//               <div className='filtros'>
//               <div> 
//                 <h3>Filter Teams:</h3>
//                 <select
//                   className='selects'
//                   name="filter"
//                   value={teamFilter}
//                   onChange={handleTeamFilterChange}
//                 >
//                   <option value="All">Mostrar todos</option>
//                   {teamNames.map((teamName) => (
//                     <option key={teamName} value={teamName}>{teamName}</option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <h3>Filter Name:</h3>
//                 <select
//                   className='selects'
//                   name="order"
//                   value={orderFilter}
//                   onChange={handleOrderFilterChange}
//                 >
//                   <option value="orderChar" disabled="disabled">order..</option>
//                   <option value="disabled">disabled</option>
//                   <option value="ascendente">Descendente</option>
//                   <option value="descendente">Ascendente</option>
//                 </select>
//               </div>

//               <div>
//                 <h3>Filter Birthdate:</h3>
//                 <select 
//                 className='selects'
//                 name="orderBirthdate"
//                 value={birthdateOrderFilter}
//                 onChange={handleBirthdateOrderFilterChange}
//                 >
//                   <option value="orderCharBirthdate" disabled="disabled">order..</option>
//                   <option value="disabled">disabled</option>
//                   <option value="ascendente">Descendente</option>
//                   <option value="descendente">Ascendente</option>
//                 </select>
//               </div>

//               <div>
//                 <h3>Filter Api or Db:</h3>
//                 <select 
//                 className='selects'
//                 name="filterDbOrApi"
//                 value={dbOrApi}
//                 onChange={handleDBorApiFilter}
//                 >
//                   <option value="orderCharBirthdate" disabled="disabled">order..</option>
//                   <option value="all">All</option>
//                   <option value="db">DB</option>
//                   <option value="api">Api</option>
//                 </select>
//               </div>
//               </div>
//               <div>
//                 <img src={imagen} alt="" />
//               </div>
//             </div>

            

//       <div className="card_content">
//         {filteredDrivers.length > 0 ? (
//           filteredDrivers
//             .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
//             .map((driver) => (
//               <Card
//                 key={driver.id}
//                 id={driver.id}
//                 name={driver.name}
//                 team={driver.team.name}
//                 birthdate={driver.birthdate}
//                 image={driver.image}
//               />
//             ))
//         ) : (
//           <p>No hay datos de conductores disponibles.</p>
//         )}
//       </div>
//       <div className="pagination">
//         <button className='flechas' onClick={() => handlePaginate(1)}>{"<<"}</button>
//         <button className='flechas' onClick={() => handlePaginate(Math.max(currentPage - 1, 1))}>{"<"}</button>
//         {renderPageNumbers()}
//         <button className='flechas' onClick={() => handlePaginate(Math.min(currentPage + 1, totalPages))}>{">"}</button>
//         <button className='flechas' onClick={() => handlePaginate(totalPages)}>{">>"}</button>
//       </div>
//     </div>
//   );
        
// }

import React, { useState, useEffect } from 'react';
import Card from '../card/Card';
import axios from 'axios'
import './Layout.css';
import imagen from '../../assets/03f1986b72f04f8e6b78d4f937abfd50.jpg'
import { useDispatch, useSelector } from "react-redux";

export default function Layout({
  nameFilter,
  driversData,
  currentPage,
  setCurrentPage,
  setNameFilter,
  teamNames
}) {

  const itemsPerPage = 9;
  const [filteredDrivers, setFilteredDrivers] = useState([]); //estado para la busqueda por nombre
  const [totalPages, setTotalPages] = useState(1);// estado para actualizar las paginas al fitlrar 
  const [teamFilter, setTeamFilter] = useState("All");//estado para el filtro 
  const [orderFilter, setOrderFilter] = useState("disabled");//estado para el filtro 
  const [birthdateOrderFilter, setBirthdateOrderFilter] = useState("disabled");
  const [dbOrApi, setDbOrApi] = useState("all")
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const dispatch = (useDispatch)

  
  // para renderizar toda la info 
  useEffect(() => {
    let filtered = driversData;

    if (isInitialLoad) {
      setIsInitialLoad(false);
      return; // No se ejecuta el resto del efecto en la carga inicial
    }

    if (dbOrApi === "api"){
      
      //reiniciar el paginado
      setCurrentPage(1);
      
      let driversApi = filtered.filter(driver => driver.id < 509);
      
      filtered = driversApi
    } if (dbOrApi === "db"){ 
      
      //reiniciar el paginado
      setCurrentPage(1);
      
      let driversDb = filtered.filter(driver => typeof driver.id === 'string');
      
      filtered = driversDb
      
    } if(dbOrApi === "all"){
      
      //reiniciar el paginado
      setCurrentPage(1);
      
      filtered = driversData
    }

    // Aplicar filtro por equipo
    if (teamFilter !== "All") {

      //reiniciar el paginado
      setCurrentPage(1);

      //quitamos todos los drivers que no tengan equipo
      let driversWithTeams = filtered.filter(driver => driver.team.name !== undefined);
      
      // hacemos un split sobre los teams para poder leerlos con incluides mas adelante, ademas llevamos toda la info del driver
      // con trim borramos los espacios en blanco para tener mejores coincidencias 
      let equiposSeparados = driversWithTeams.map(driver => ({
        id:  driver.id,
        name: driver.name,
        last_name: driver.last_name,
        description: driver.description,
        image: driver.image,
        birthdate: driver.birthdate,
        nationality: driver.nationality,
        team: { name: driver.team.name.split(',').map(team => team.trim()) }
      }));

      // coincidencias guarda los drivers cuyo team sea igual al del valor filtrado 
      let coincidencias = []

      // aca analizamos la coincidencias para guardarlas en el array de arriba
      equiposSeparados.forEach(driver => {
        if (driver.team.name.includes(teamFilter)) {
          coincidencias.push(driver);
        }
      });

      //volvemos la data al formato original porque si no mi componete card no la puede leer 
      let originales = coincidencias.map(driver => ({
        id:  driver.id,
        name: driver.name,
        last_name: driver.last_name,
        description: driver.description,
        image: driver.image,
        birthdate: driver.birthdate,
        nationality: driver.nationality,
        team: { name: driver.team.name.join() }
      }))
      
      // asigamos el valor filtered  con las coincidencias para verlas mapeadas  en el render
      filtered = originales
    }

    
    
    // Aplicar filtro por nombre
    if (nameFilter.length > 0) {
      filtered = filtered.filter(driver =>
        driver.name.toLowerCase().includes(nameFilter.toLowerCase())
      );
    }
    
    // Verificar si no hay resultados después de aplicar todos los filtros
    if (filtered.length === 0) {
      alert("no runners with the name were found");
      filtered = driversData
      setNameFilter('')
    }

    // Aplicar orden ascendente/descendente
    filtered.sort((a, b) => {
      if (orderFilter === "ascendente") {
        return a.name.localeCompare(b.name);
      } if (orderFilter === "descendente") {
        return b.name.localeCompare(a.name);
      } if (birthdateOrderFilter === "ascendente") {
        return a.birthdate.localeCompare(b.birthdate);
      } if (birthdateOrderFilter === "descendente") {
        return b.birthdate.localeCompare(a.birthdate);
      }
    });

    setFilteredDrivers(filtered);
    setTotalPages(Math.ceil(filtered.length / itemsPerPage));
  }, [driversData, nameFilter, teamFilter, orderFilter, birthdateOrderFilter, dbOrApi, isInitialLoad ]);

  const handlePaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleTeamFilterChange = (event) => {
    setTeamFilter(event.target.value);
  };

  const handleOrderFilterChange = (event) => {
    setOrderFilter(event.target.value);
  };

  const handleBirthdateOrderFilterChange = (event) => {
    setBirthdateOrderFilter(event.target.value);
  };

  const handleDBorApiFilter = (event) => {
    setDbOrApi(event.target.value)
  }

  //funcion para el pagiando 
  const renderPageNumbers = () => {
    const visiblePages = [];
    const maxVisiblePages = 3; // Máximo de páginas visibles
    const totalPagesToShow = Math.min(totalPages, maxVisiblePages);
  
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
  
    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
  
    for (let i = startPage; i <= endPage; i++) {
      visiblePages.push(i);
    }
  
    return visiblePages.map((page) => (
      <button
        key={page}
        onClick={() => handlePaginate(page)}
        className={page === currentPage ? 'active page-button' : 'page-button'}
      >
        {page}
      </button>
    ));
  };


  return (
    <div className='container_p'>

            <div className='filters'>
              <div className='filtros'>
              <div> 
                <h3>Filter Teams:</h3>
                <select
                  className='selects'
                  name="filter"
                  value={teamFilter}
                  onChange={handleTeamFilterChange}
                >
                  <option value="All">Mostrar todos</option>
                  {teamNames.map((teamName) => (
                    <option key={teamName} value={teamName}>{teamName}</option>
                  ))}
                </select>
              </div>

              <div>
                <h3>Filter Name:</h3>
                <select
                  className='selects'
                  name="order"
                  value={orderFilter}
                  onChange={handleOrderFilterChange}
                >
                  <option value="orderChar" disabled="disabled">order..</option>
                  <option value="disabled">disabled</option>
                  <option value="ascendente">Descendente</option>
                  <option value="descendente">Ascendente</option>
                </select>
              </div>

              <div>
                <h3>Filter Birthdate:</h3>
                <select 
                className='selects'
                name="orderBirthdate"
                value={birthdateOrderFilter}
                onChange={handleBirthdateOrderFilterChange}
                >
                  <option value="orderCharBirthdate" disabled="disabled">order..</option>
                  <option value="disabled">disabled</option>
                  <option value="ascendente">Descendente</option>
                  <option value="descendente">Ascendente</option>
                </select>
              </div>

              <div>
                <h3>Filter Api or Db:</h3>
                <select 
                className='selects'
                name="filterDbOrApi"
                value={dbOrApi}
                onChange={handleDBorApiFilter}
                >
                  <option value="orderCharBirthdate" disabled="disabled">order..</option>
                  <option value="all">All</option>
                  <option value="db">DB</option>
                  <option value="api">Api</option>
                </select>
              </div>
              </div>
              <div>
                <img src={imagen} alt="" />
              </div>
            </div>

            

      <div className="card_content">
        {filteredDrivers.length > 0 ? (
          filteredDrivers
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((driver) => (
              <Card
                key={driver.id}
                id={driver.id}
                name={driver.name}
                team={driver.team.name}
                birthdate={driver.birthdate}
                image={driver.image}
              />
            ))
        ) : (
          <p>No hay datos de conductores disponibles.</p>
        )}
      </div>
      <div className="pagination">
        <button className='flechas' onClick={() => handlePaginate(1)}>{"<<"}</button>
        <button className='flechas' onClick={() => handlePaginate(Math.max(currentPage - 1, 1))}>{"<"}</button>
        {renderPageNumbers()}
        <button className='flechas' onClick={() => handlePaginate(Math.min(currentPage + 1, totalPages))}>{">"}</button>
        <button className='flechas' onClick={() => handlePaginate(totalPages)}>{">>"}</button>
      </div>
    </div>
  );
        
}
