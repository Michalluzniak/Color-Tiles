import { ColorsGrid } from './components/ColorsGrid';
import { Header } from './components/Header';
import { useColorFilter } from './hooks/useColorFilter';

function App() {
  const [colors, setColors, removeColor, newColor, setNewColor, filter, setFilter] = useColorFilter();
  return (
    <div className="App">
      <Header
        colors={colors}
        setColors={setColors}
        newColor={newColor}
        setNewColor={setNewColor}
        filter={filter}
        setFilter={setFilter}
      />

      <ColorsGrid colors={colors} removeColor={removeColor} />
    </div>
  );
}

export default App;
