import React, { useState } from "react";
import './AtivitiForm.css'
import CustomSelect from "./listCheck";
  
  export const Form = ({teamNames}) => {
  

    const [reloadData, setReloadData] = useState(false); // Nuevo estado para forzar recarga de datos
    const [data, setData] = useState({
      name: "",
      last_name: "",
      description: "",
      image: "",
      birthdate: "",
      nationality:"",
      teams: [],
    });
    
    
  
    const validate = (input) => { //funcion para validar que todos los campos sean requeridos 
      let errors = {};
      
      if (!input.name) {
        errors.name = "name is required"
      } else if (input.name.length > 256) {
        errors.name = "The name cannot be more than 256 characters";
      }
    
      if (!input.last_name) {
        errors.last_name = "Last name is required";
      } else if (input.last_name.length > 256) {
        errors.last_name = "The last name cannot be more than 256 characters";
      }
  
      if (!input.image) {
        errors.image = "Image is required";
      } else if (input.image.length > 256) {
        errors.image = "Image cannot be more than 256 characters";
      }
      
      if (!input.birthdate) {
        errors.birthdate = "Birthdate is required";
      } else if (input.birthdate.length > 256) {
        errors.birthdate = "Birthdate cannot be more than 256 characters";
      }
  
      if (!input.nationality) {
        errors.nationality = "Nacionality is required";
      } else if (input.nationality.length > 256) {
        errors.nationality = "Nacionality cannot be more than 256 characters"
      }
  
      if (!input.teams[0]) {
        errors.teams = "Teams is required";
      } else if (input.teams.length > 256) {
       errors.teams = "Teams cannot be more than 256 characters"
      }
  
      if (!input.description) {
        errors.description = "Desription is required";
      } else if (input.description.length > 256) {
       errors.description = "Desription cannot be more than 256 characters"
      }
      
      return errors;
    };
    
    
    
    const handleInputChange = (e) => {
      //funcion para actualizar el state de input con los valores
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    };
    
      const submit = async (e) => {
        e.preventDefault();
  
        const errors = validate(data)
  
        if (Object.keys(errors).length > 0) {
          const errorMessage = Object.values(errors)[0]; // Obtener el primer mensaje de error
          return alert(errorMessage);
        }
  
        try {
          const crear = await fetch(`${import.meta.env.VITE_ENDPOINT}/postDrivers`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
          const respuesta = await crear.json();
  
          alert("El driver ah sido creada exitosamente, lo podras ver aqui ");
          
          setReloadData(!reloadData);
  
          //vacia el input  y limpia el formulario, poniendo el estado  en su valor por defecto
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
  
      const handleTeamsSelected = (selectedTeams) => {
        setData({
          ...data,
          teams: selectedTeams
        });
      }; 
    
      return (
        <div >
          <div className="contenedorActivity">
            <form className="estilo_form" action="POST"  onSubmit={submit}>
              <div  >
                <h1>Create your Driver</h1>
                <h1>You can relate it to one or more teams!</h1>
                <div className="div_inputs">
                  <label>Name of driver</label>
                  <input
                    type="text"
                    placeholder="  Name.."
                    name="name"
                    value={data.name}
                    onChange={handleInputChange}
                    
                  
                  />
                </div>
                <div className="div_inputs">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    placeholder="  Last Name"
                    value={data.last_name}
                    onChange={handleInputChange}
                    
                  />
                </div>
                <div className="div_inputs">
                  <label>Image</label>
                  <input
                    type="text"
                    name="image"
                    placeholder="  Image"
                    value={data.image}
                    onChange={handleInputChange}
                  
                  />
                </div>
                <div className="div_inputs">
                  <label>Birthdate</label>
                        <input
                          type="date"
                          name="birthdate"
                          value={data.birthdate}
                          onChange={handleInputChange}
                        
                        />
                </div>
                <div className="div_inputs">
                  <label>Nationality</label>
                  <input
                    type="text"
                    name="nationality"
                    placeholder="  Nationality"
                    value={data.nationality}
                    onChange={handleInputChange}
                    
                  />
                </div>
                <div className="div_inputs">

                  <label className="teamslabel">Teams</label>
                  <CustomSelect  
                    teamNames={teamNames} 
                    selectedTeams={data.teams}
                    onTeamsSelected={handleTeamsSelected}/>
                </div>
                
                <div className="div_inputs">
                  <label >Description</label>
                  <textarea
                    className="description"
                    name="description"
                    placeholder="Description"
                    value={data.description}
                    onChange={handleInputChange}
                    
                  />
                </div>
              </div>
              
              <div className="container_button">
                  <input type="submit" value="Create" />
              </div>
            </form>
          </div>
        </div>
      );
    };