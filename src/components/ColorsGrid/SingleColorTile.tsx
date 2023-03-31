import { Colors } from '../../hooks/useColorFilter';
import { isColorDefault } from '../../utils/isColorDefault';

interface SingleColorTileProps {
  color: Colors;
  removeColor: (color: string) => void;
  setIsCoppied: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SingleColorTile = ({ color, removeColor, setIsCoppied }: SingleColorTileProps) => {
  //
  const tileBackgroundColor = { backgroundColor: color.value };

  return (
    <div className={`single-color-tile-container`}>
      <div
        className="single-color-tile"
        style={tileBackgroundColor}
        onClick={(event) => {
          navigator.clipboard.writeText(color.value);
          setIsCoppied((prev) => !prev);
        }}
      >
        {!isColorDefault(color.name) && (
          <span
            className="remove-tile"
            onClick={(e) => {
              e.stopPropagation();
              removeColor(color.value);
            }}
          >
            ✕
          </span>
        )}
      </div>
      <p>{color.value}</p>
    </div>
  );
};
