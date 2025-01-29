import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Card from '../card/Card';
import Pagination from '../Pagination/Pagination'; // Importamos el nuevo componente
import imagen from '../../assets/03f1986b72f04f8e6b78d4f937abfd50.jpg';
import './Layout.css';

export default function Layout({ currentPage, setCurrentPage, teamNames, nameFilter }) {
  const itemsPerPage = 10;
  const [totalPages, setTotalPages] = useState(1);
  const [selectedTeam, setSelectedTeam] = useState("All");

  const driversData = useSelector((state) => state.drivers.list);

  const normalizedFilter = typeof nameFilter === "string" ? nameFilter.trim().toLowerCase() : "";

  const filteredDrivers = driversData.filter(driver => {
    const teamName = Array.isArray(driver.teams)
      ? driver.teams.join(", ").toLowerCase()
      : typeof driver.teams === "string"
      ? driver.teams.toLowerCase()
      : "";

    return (
      (normalizedFilter === "" || driver.name.toLowerCase().includes(normalizedFilter)) &&
      (selectedTeam === "All" || teamName.includes(selectedTeam.toLowerCase()))
    );
  });

  useEffect(() => {
    setTotalPages(Math.ceil(filteredDrivers.length / itemsPerPage));
  }, [filteredDrivers]);

  const handlePaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleTeamChange = (e) => {
    setSelectedTeam(e.target.value);
  };

  return (
    <div className='container_p'>
      <div className='filters'>
        <div className='filtros'>
          <div>
            <h3>Filter Teams:</h3>
            <select className='selects' onChange={handleTeamChange} value={selectedTeam}>
              <option value="All">Mostrar todos</option>
              {teamNames.map((teamName) => (
                <option key={teamName} value={teamName}>{teamName}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <img src={imagen} alt="" />
        </div>
      </div>

      <div className="card_content">
        {filteredDrivers.length > 0 ? (
          filteredDrivers
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

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePaginate={handlePaginate}
      />
    </div>
  );
}
