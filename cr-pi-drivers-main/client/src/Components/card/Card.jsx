import { Link } from "react-router-dom";
import './Card.css'

function Card({id,name, last_name, image, description, birthdate, nationality, team}) {
   

    return (
      <div >
         <div className='card'>
            <div className='sub_card'>
               <strong className='id_card'>{id}</strong>
               <h4 className='hp_card'>Birthdate: {birthdate} </h4>
               <h4 className='hp_card'>Teams: {team}</h4>
               <Link to={`/detail/:${id}`}>
                  <button className='name_card'>{name}</button>
               </Link>
               <img className='img_poke' src={image} alt='' />
            </div>
         </div>
      </div>
   );
}



export default (Card);