import React, { useState } from 'react';
import { Dropdown } from './Dropdown';

export type Filter = { red: boolean; green: boolean; blue: boolean; saturation: boolean };

export interface FilterColorsFormProps {
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
  isMobile: boolean;
}

export const FilterColorsForm = ({ filter, setFilter, isMobile }: FilterColorsFormProps) => {
  //
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const CHECKBOX_FILTER_OPTIONS = Object.keys(filter);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, checked } = event.target;
    setFilter((prevFilter) => ({ ...prevFilter, [name]: checked }));
  };

  const inputValueHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
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
      className={`filter-colors-form ${isMobile ? 'filter-colors-form-mobile' : ''}`}
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
        checkboxFilterOptions={CHECKBOX_FILTER_OPTIONS}
        checkedState={filter}
        handleFilterChange={handleFilterChange}
      />
    </form>
  );
};
