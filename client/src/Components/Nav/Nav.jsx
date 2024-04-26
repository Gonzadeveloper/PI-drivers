import React from "react"
import { Link } from 'react-router-dom'
import logo from '../../assets/logoBueno.jpeg'
import './Nav.css'

export default function Nav({nameFilter,
    handleNameFilter}){
    
    return <div className="header">
        <div className="div_header">

            <Link to='/Home'>

                <div className="div_logo">
                    <button> 
                    <img src={logo} alt="logo" />
                    </button>
                </div>

            </Link>
        </div>

        <div className="div_Buttons">

            <Link to='/Home'>
            <button className="colors">Home</button>
            </Link>

            <Link to='/AtivitiForm'>
            <button className="colors">Create</button>
            </Link>

            <div>

            </div>
                <input
                    className="colors"
                    type="text"
                    placeholder="  Search by name"
                    value={nameFilter}
                    onChange={handleNameFilter}
            />

        </div>        
    </div>
}


