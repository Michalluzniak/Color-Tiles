import React, { useState } from 'react';
import { Dropdown } from './Dropdown';

export const FilterColorsForm = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const checkboxFilterOptions = ['Red > 50%', 'Green > 50%', 'Blue > 50%'];
  const [checkedState, setCheckedState] = useState(new Array(checkboxFilterOptions.length).fill(false));

  const checkboxesHandler = (checkboxPosition: number) => {
    const updateCheckboxState = checkedState.map((item, index) => {
      return index === checkboxPosition ? !item : item;
    });
    setCheckedState(updateCheckboxState);
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
        checkedState={checkedState}
        checkboxesHandler={checkboxesHandler}
      />
    </form>
  );
};
