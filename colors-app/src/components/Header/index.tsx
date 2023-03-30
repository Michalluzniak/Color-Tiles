import { FilterColorsForm } from '../FilterColorsForm';
import NewColorForm from '../NewColorForm';

export const Header = ({ colors, setColors, newColor, setNewColor, filter, setFilter }: any) => {
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
