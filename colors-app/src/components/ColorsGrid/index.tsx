import { SingleColorTile } from './SingleColorTile';

export const ColorsGrid = ({ colors, removeColor }: any) => {
  return (
    <main className="colors-grid">
      {colors.map((color: any, index: number) => {
        return <SingleColorTile key={color.name} color={color} removeColor={removeColor} index={index} />;
      })}
    </main>
  );
};
