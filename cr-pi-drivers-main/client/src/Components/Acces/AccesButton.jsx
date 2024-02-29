import React from 'react';
import './AccesButton.css'

const AccessButton = ({ setAccess, navigate }) => {
  const handleAccess = () => {
    setAccess(true);
    navigate('/home');
  };

  return (
    <div className='container'>
      <h1>Welcome to PI Drivers!</h1>
      
      <p>In this app you will be able to see all the F1 riders, you can also create your own riders and assign teams to them. Enjoy your stay</p>
      
      <p>Press the button to access home:</p>
     
      <button className='buttonAcces' onClick={handleAccess}>Acces to Home</button>
    </div>
  );
};

export default AccessButton;