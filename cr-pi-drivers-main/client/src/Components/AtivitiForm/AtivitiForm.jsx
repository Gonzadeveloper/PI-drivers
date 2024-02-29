import React, { useState, useEffect } from "react";
import axios from 'axios'
import CardDriversDB from "../card/CardDriversDB";
import './AtivitiForm.css'
import { useDispatch, useSelector } from "react-redux";

export const Form = () => {
  
  const [reloadData, setReloadData] = useState(false); // Nuevo estado para forzar recarga de datos
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    name: "",
    last_name: "",
    description: "",
    image: "",
    birthdate: "",
    nationality:"",
    teams: [],
  });
  const [driversDbData, setdriversDbData] = useState([]);
  const dispatch = (useDispatch)
  
    const validate = (input) => {
      let errors = {};
      if (!input.name) {
        errors.name = "the field is required";
      } else if (input.name.length > 256) {
        errors.name = "El nombre no puede tener más de 256 caracteres";
      }
    
      if (!input.last_name) {
        errors.last_name = "El apellido es obligatorio";
      } else if (input.last_name.length > 256) {
        errors.last_name = "El apellido no puede tener más de 256 caracteres";
      }
      
      return errors;
    };
  
  
  
    const handleInputChange = (e) => {
      if (e.target.name !== "name" && e.target.name !== "types") {
        setData({
          ...data,
          [e.target.name]: Number(e.target.value) <= 0 ? 0 : e.target.value,
        });
      } else {
        setErrors(
          validate({
            ...data,
            [e.target.name]: e.target.value,
          })
        );
        if (e.target.name === "types") {
          const typesArray = e.target.value.split(',').map((type) => type.trim());
          setData({
            ...data,
            [e.target.name]: typesArray,
          });
        } else {
          setData({
            ...data,
            [e.target.name]: e.target.value,
          });
        }
      }
    };
  
    const submit = async (e) => {
      e.preventDefault();
      try {
        console.log("Datos a enviar:", data);
        const crear = await fetch("http://localhost:3001/postDrivers", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const respuesta = await crear.json();

        alert("La actividad ah sido creada exitosamente, lo podras ver aqui ");
  
        setReloadData(!reloadData);

        setData({
          name: "",
          last_name: "",
          description: "",
          image: "",
          birthdate: "",
          nationality:"",
          teams: [],
        });

      } catch (error) {
        console.error("There was a problem creating the driver:", error);
  
        alert("There was a problem creating the driver");
      }
    }

    

    
    useEffect(() => {
    
      const URL = 'http://localhost:3001/driverFromApi';
  
      const fetchData = async () => {
        try {
          const response = await axios.get(URL);
          setdriversDbData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData(); // Llama a la función sin invocarla para evitar el bucle infinito
  
    }, [reloadData]);
    
    ;
  
    return (
      <div >
        <form className="estilo_form" action="POST"  onSubmit={submit}>
          <div  >
            <h1>Create your Driver</h1>
            <h1>You can relate it to one or more teams!</h1>
            <p>
              <label>Name of driver</label>
              <input
                type="text"
                placeholder="  Name.."
                name="name"
                value={data.name}
                onChange={handleInputChange}
                maxLength={256}
                required
              />
            </p>
            <p>
              <label>Last Name</label>
              <input
                type="text"
                name="last_name"
                placeholder="  Last Name"
                value={data.last_name}
                onChange={handleInputChange}
                maxLength={256}
                required
              />
            </p>
            <p >
              <label>Image</label>
              <input
                type="text"
                name="image"
                placeholder="  Image"
                value={data.image}
                onChange={handleInputChange}
                maxLength={256}
                required
              />
            </p>
            <p >
              <label>Birthdate</label>
                    <input
                      type="date"
                      name="birthdate"
                      value={data.birthdate}
                      onChange={handleInputChange}
                      required
                    />
            </p>
            <p >
              <label>Nationality</label>
              <input
                type="text"
                name="nationality"
                placeholder="  Nationality"
                value={data.nationality}
                onChange={handleInputChange}
                maxLength={256}
                required
              />
            </p>
            <p >
              <label>Teams</label>
              <input
                type="text"
                name="teams"
                placeholder="  Name of Teams"
                value={data.teams}
                onChange={handleInputChange}
                maxLength={256}
                required
              />
            </p>
            <p >
              <label >Description</label>
              <textarea
                className="description"
                name="description"
                placeholder="Description"
                value={data.description}
                onChange={handleInputChange}
                maxLength={256}
                required
              />
            </p>
          </div>
          
          <div className="container_button">
              <input type="submit" value="Create" />
          </div>
        </form>

        <div className="container_h1">
          <h1>This is yours drivers</h1>
        </div>

        <div className="card_content">
          {driversDbData.map((driver) => (
              <CardDriversDB
                id={driver.id}
                name={driver.name}
                last_name={driver.last_name}
                description={driver.description}
                image={driver.image}
                birthdate={driver.birthdate}
                nationality={driver.nationality}
                teams={driver.teams}
              />
          )
          )}
        </div>
      </div>
    );
  };

