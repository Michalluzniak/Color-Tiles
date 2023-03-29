import React from 'react';

export const CheckboxList = ({ checkboxFilterOptions, checkedState, checkboxesHandler }: any) => {
  return (
    <ul className="checkboxes-filter-list">
      {checkboxFilterOptions.map((name: string, index: number) => {
        return (
          <li key={index}>
            <div>
              <input
                type="checkbox"
                id={`filter-checkbox-${index}`}
                name={name}
                checked={checkedState[index]}
                onChange={() => checkboxesHandler(index)}
              />
              <label htmlFor={`filter-checkbox-${index}`}>{name}</label>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
