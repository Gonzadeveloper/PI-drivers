import React, { useState } from "react";
import Select from "react-select";
import './listCheck.css'

const CustomOption = ({ children, isSelected, isFocused, innerRef, innerProps }) => {
  return (
    <div ref={innerRef} {...innerProps}>
      <input type="checkbox" checked={isSelected} readOnly />
      {children}
    </div>
  );
};

const CustomSelect = ({ teamNames, selectedTeams, onTeamsSelected }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
  
    const handleChange = (selected) => {
      setSelectedOptions(selected);
      onTeamsSelected(selected.map(option => option.value));
    };
  
    const options = teamNames.map((teamName) => ({
      value: teamName,
      label: teamName
    }));

  return (
    <div className="select-container">
    <Select
    className="select1"
      value={selectedOptions}
      placeholder= 'Teams'
      onChange={handleChange}
      options={options}
      isMulti
      closeMenuOnSelect={false}
      components={{
        Option: CustomOption
      }}
    />
    </div>
  );
};

export default CustomSelect;