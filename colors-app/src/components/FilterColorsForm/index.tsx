import React, { useState } from 'react';
import { Dropdown } from './Dropdown';

export const FilterColorsForm = ({ filter, setFilter }: any) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const checkboxFilterOptions = Object.keys(filter);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFilter((prevFilter: any) => ({ ...prevFilter, [name]: checked }));
  };

  const inputValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const dropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="filter-colors-form"
    >
      <input
        type="text"
        placeholder="Search color in HEX"
        value={inputValue}
        onChange={(event) => inputValueHandler(event)}
      />
      <Dropdown
        isDropdownOpen={isDropdownOpen}
        dropdownToggle={dropdownToggle}
        checkboxFilterOptions={checkboxFilterOptions}
        checkedState={filter}
        handleFilterChange={handleFilterChange}
      />
    </form>
  );
};
