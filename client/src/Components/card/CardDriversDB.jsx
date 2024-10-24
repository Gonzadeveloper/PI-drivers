import './Card.css'

function CardDriversDB({ id,name, last_name, image, description, birthdate, nationality, teams }) {
    return (
        <div className='card'>
          <div className='sub_card'>
            <strong className='id_card'>{id}</strong>
            <h4 className='name_card'>Name: {name}</h4>
            <h4 className='h4titulos'>Birthdate: {birthdate}</h4>
            <h4 className='h4titulos'>Nationality: {nationality}</h4>
            <img className='img_driver' src={image} />
          </div>
        </div>
    );
  }

  export default CardDriversDB;