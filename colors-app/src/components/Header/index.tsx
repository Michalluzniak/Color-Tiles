import { FilterColorsForm } from '../FilterColorsForm';
import NewColorForm from '../NewColorForm';

export const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <p className="Logo">color tiles</p>
      </div>

      <FilterColorsForm />
      <NewColorForm />
    </div>
  );
};
