type CheckedState = { [key: string]: boolean };

interface CheckboxListProps {
  checkboxFilterOptions: string[];
  checkedState: CheckedState;
  handleFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckboxList = ({ checkboxFilterOptions, checkedState, handleFilterChange }: CheckboxListProps) => {
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
                checked={checkedState[name]}
                onChange={handleFilterChange}
              />
              <label htmlFor={`filter-checkbox-${index}`}>{`${
                name.charAt(0).toUpperCase() + name.slice(1)
              } > 50%`}</label>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
