import { Colors } from '../../hooks/useColorFilter';
import { SingleColorTile } from './SingleColorTile';

interface ColorsGridProps {
  colors: any;
  removeColor: (color: string) => void;
}

export const ColorsGrid = ({ colors, removeColor }: ColorsGridProps) => {
  return (
    <main className="colors-grid">
      {colors.map((color: any, index: number) => {
        return <SingleColorTile key={color.name} color={color} removeColor={removeColor} index={index} />;
      })}
    </main>
  );
};
