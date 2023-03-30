import { Colors } from '../../hooks/useColorFilter';
import { Filter, FilterColorsForm } from '../FilterColorsForm';
import NewColorForm from '../NewColorForm';

interface HeaderProps {
  colors: Colors[];
  setColors: React.Dispatch<React.SetStateAction<Colors[]>>;
  newColor: string;
  setNewColor: React.Dispatch<React.SetStateAction<string>>;
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
}

export const Header = ({ colors, setColors, newColor, setNewColor, filter, setFilter }: HeaderProps) => {
  return (
    <div className="header">
      <div className="logo">
        <a href="/">
          <p>color tiles</p>
        </a>
      </div>

      <FilterColorsForm filter={filter} setFilter={setFilter} />
      <NewColorForm colors={colors} setColors={setColors} newColor={newColor} setNewColor={setNewColor} />
    </div>
  );
};
