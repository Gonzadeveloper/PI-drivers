import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'; // Asegúrate de importar useSelector
import Card from '../card/Card';
import imagen from '../../assets/03f1986b72f04f8e6b78d4f937abfd50.jpg'
import './Layout.css';

export default function Layout({
  currentPage,
  setCurrentPage,
  teamNames
}) {
  const itemsPerPage = 10;
  const [totalPages, setTotalPages] = useState(1);

  // Usamos useSelector para acceder al estado global de drivers
  const driversData = useSelector((state) => state.drivers.list); // Accediendo a los conductores desde el estado global

  
  // Actualizamos totalPages cuando driversData cambie
  useEffect(() => {
    setTotalPages(Math.ceil(driversData.length / itemsPerPage));
  }, [driversData]);

  const handlePaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
            >
              <option value="orderCharBirthdate" disabled="disabled">order..</option>
              <option value="disabled">disabled</option>
              <option value="ascendente">Descendente</option>
              <option value="descendente">Ascendente</option>
            </select>
          </div>
        </div>
        <div>
          <img src={imagen} alt="" />
        </div>
      </div>

      <div className="card_content">
        {driversData.length > 0 ? (
          driversData
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((driver) => (
              <Card
                key={driver.id}
                id={driver.id}
                name={driver.name}
                team={driver.teams}
                birthdate={driver.birthdate}
                image={driver.image}
              />
            ))
        ) : (
          <p>No hay datos de conductores disponibles.</p>
        )}
      </div>

      <div className="pagination">
        <button className='flechas' onClick={() => handlePaginate(1)}> {"<<"} </button>
        <button className='flechas' onClick={() => handlePaginate(Math.max(currentPage - 1, 1))}>{"<"}</button>
        {renderPageNumbers()}
        <button className='flechas' onClick={() => handlePaginate(Math.min(currentPage + 1, totalPages))}>{">"}</button>
        <button className='flechas' onClick={() => handlePaginate(totalPages)}>{">>"}</button>
      </div>
    </div>
  );
}
