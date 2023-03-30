import { isColorDefault } from '../../utils/isColorDefault';

export const SingleColorTile = ({ color, removeColor, index }: any) => {
  //
  const tileBackgroundColor = { backgroundColor: color.value };

  return (
    <div className={`single-color-tile-container`}>
      <div
        className="single-color-tile"
        style={tileBackgroundColor}
        onClick={(event) => {
          navigator.clipboard.writeText(color.value);
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
            x
          </span>
        )}
      </div>
      <p>{color.value}</p>
    </div>
  );
};
