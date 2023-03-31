import React, { useState } from 'react';
import { Dropdown } from './Dropdown';

export type Filter = { red: boolean; green: boolean; blue: boolean; saturation: boolean };

export interface FilterColorsFormProps {
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export const FilterColorsForm = ({ filter, setFilter, setSearchTerm }: FilterColorsFormProps) => {
  //
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const CHECKBOX_FILTER_OPTIONS = Object.keys(filter);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, checked } = event.target;
    setFilter((prevFilter) => ({ ...prevFilter, [name]: checked }));
  };

  const inputValueHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
    setInputValue(event.target.value);
  };

  const dropdownToggle = (): void => {
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
        className="searchbar"
        placeholder="Search color by hex, start with #"
        value={inputValue}
        onChange={(event) => inputValueHandler(event)}
      />
      <Dropdown
        isDropdownOpen={isDropdownOpen}
        dropdownToggle={dropdownToggle}
        checkboxFilterOptions={CHECKBOX_FILTER_OPTIONS}
        checkedState={filter}
        handleFilterChange={handleFilterChange}
      />
    </form>
  );
};
