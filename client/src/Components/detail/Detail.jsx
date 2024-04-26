import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import './Detail.css'

function Detail(){
    const { id } = useParams()
    const [driversData, setDriversData] = useState([]);

    useEffect(() => {

        const driverId = id.slice(1);

        axios(`http://localhost:3001/drivers/${driverId}`)
        .then(({ data }) => setDriversData(data)
        )
          return setDriversData({});
     },[id]);                                     
    
    
    return <div className="card_content">
        {
    driversData ? (
                <div className="container_detail"> 
                    <h1>Details of Driver</h1>
                    <h2>Id:{driversData.id}</h2>
                    <h2>Name: {driversData.name}</h2>
                    <h4>last_name: {driversData.last_name}</h4>
                    <h4>description: {driversData.description}</h4>
                    <h4>nationality: {driversData.nationality}</h4>
                    <h4>birthdate: {driversData.birthdate}</h4>
                    {driversData.team && driversData.team.name ? (
  <h4>Teams: {driversData.team.name}</h4>
) : (
  <h4>No team assigned</h4>
)}
                    <img className="img_detail" src={driversData.image} alt={driversData.name} />
                </div>
            ) : ''

        
        }
    </div>
}

export default Detail;