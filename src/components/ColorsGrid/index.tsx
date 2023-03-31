import { useEffect, useState } from 'react';
import { Colors } from '../../hooks/useColorFilter';
import { Alert } from './Alert';
import { SingleColorTile } from './SingleColorTile';

interface ColorsGridProps {
  colors: Colors[];
  removeColor: (color: string) => void;
}

export const ColorsGrid = ({ colors, removeColor }: ColorsGridProps) => {
  const [isCoppied, setIsCoppied] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsCoppied(false), 1500);

    return () => clearTimeout(timeout);
  }, [isCoppied]);

  return (
    <main className="colors-grid">
      {colors.map((color) => {
        return <SingleColorTile key={color.name} color={color} removeColor={removeColor} setIsCoppied={setIsCoppied} />;
      })}
      {isCoppied && <Alert />}
    </main>
  );
};
