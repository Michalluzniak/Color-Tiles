import { useState } from 'react';
import { Colors } from '../../hooks/useColorFilter';
import { useIsMobile } from '../../hooks/useIsMobile';
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
  //
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const isMobile = useIsMobile(762);

  return (
    <div
      className={`header ${isMobile && isOpenMobile ? 'header-open' : ''}`}
      onClick={() => setIsOpenMobile((prev) => !prev)}
    >
      <div className="logo">
        <a href="/">
          <p>color tiles</p>
        </a>
      </div>

      <FilterColorsForm filter={filter} setFilter={setFilter} isMobile={isMobile} />
      <NewColorForm
        colors={colors}
        setColors={setColors}
        newColor={newColor}
        setNewColor={setNewColor}
        isMobile={isMobile}
      />
    </div>
  );
};
