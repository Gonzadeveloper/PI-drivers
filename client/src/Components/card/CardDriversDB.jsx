import './Card.css'

function CardDriversDB({ id,name, last_name, image, description, birthdate, nationality, teams }) {
    return (
      <div>
        <div className='card'>
          <div className='sub_card'>
            <strong className='id_card'>{id}</strong>
            <h4 className='name'>Name: {name}</h4>
            <h4 className='campos'>Last name: {last_name}</h4>
            <h4 className='campos'>Description: {description}</h4>
            <h4 className='campos'>Birthdate: {birthdate}</h4>
            <h4 className='campos'>Nationality: {nationality}</h4>
            <div className='campos'>
            <h4 className='campos'>Teams: {teams.join(' ')}</h4>
            <img  src={image} alt="" />
          </div>
            
          </div>
        </div>
      </div>
    );
  }

  export default CardDriversDB;