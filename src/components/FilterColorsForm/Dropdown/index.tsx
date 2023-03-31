import { LegacyRef } from 'react';
import { Filter } from '../index';
import { CheckboxList } from './CheckboxList';

interface DropdownProps {
  isDropdownOpen: boolean;
  dropdownToggle: () => void;
  checkboxFilterOptions: string[];
  checkedState: Filter;
  handleFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  dropdownRef: LegacyRef<HTMLButtonElement>;
}

export const Dropdown = ({
  isDropdownOpen,
  dropdownToggle,
  checkboxFilterOptions,
  checkedState,
  handleFilterChange,
  dropdownRef,
}: DropdownProps) => {
  return (
    <div className="dropdown">
      <button onClick={dropdownToggle} ref={dropdownRef}>
        Filter
      </button>
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <CheckboxList
            checkboxFilterOptions={checkboxFilterOptions}
            checkedState={checkedState}
            handleFilterChange={handleFilterChange}
          />
        </div>
      )}
    </div>
  );
};
