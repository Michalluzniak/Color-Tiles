import { CheckboxList } from './CheckboxList';

export const Dropdown = ({
  isDropdownOpen,
  dropdownToggle,
  checkboxFilterOptions,
  checkedState,
  checkboxesHandler,
}: any) => {
  return (
    <div className="dropdown">
      <button onClick={dropdownToggle}>Filter</button>
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <CheckboxList
            checkboxFilterOptions={checkboxFilterOptions}
            checkedState={checkedState}
            checkboxesHandler={checkboxesHandler}
          />
        </div>
      )}
    </div>
  );
};
