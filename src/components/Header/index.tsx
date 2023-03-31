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
  const isMobile = useIsMobile(900);

  return isMobile ? (
    <div className="mobile-header-wrapper">
      <div className="header-mobile" onClick={() => setIsOpenMobile((prev) => !prev)}>
        <div className="logo">
          <p>color tiles</p>
        </div>
        <div className="mobile-header-expand-arrow">
          <p>⌄</p>
        </div>
      </div>
      <div className={isOpenMobile ? 'header-mobile-content-active' : 'header-mobile-content'}>
        <NewColorForm colors={colors} setColors={setColors} newColor={newColor} setNewColor={setNewColor} />
        <FilterColorsForm filter={filter} setFilter={setFilter} />
      </div>
    </div>
  ) : (
    <div className="header">
      <div className="logo">
        <p>color tiles</p>
      </div>
      <FilterColorsForm filter={filter} setFilter={setFilter} />
      <NewColorForm colors={colors} setColors={setColors} newColor={newColor} setNewColor={setNewColor} />
    </div>
  );
};
