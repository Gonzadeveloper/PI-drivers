import { Link } from "react-router-dom";
import './Card.css'

function Card({id,name, last_name, image, description, birthdate, nationality, team}) {
   

    return (
         <div className='card'>
            <div className='sub_card'>
               <strong className='id_card'>{id}</strong>
               <h4 className='h4titulos'>Birthdate: {birthdate} </h4>
               <h4 className='h4titulos'>Teams: {team}</h4>
               <Link to={`/detail/:${id}`}>
                  <button className='name_card'>{name}</button>
               </Link>
               <br />
               <img className='img_driver' src={image} alt='' />
            </div>
         </div>
   );
}



export default (Card);