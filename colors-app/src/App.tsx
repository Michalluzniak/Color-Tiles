import { ColorsGrid } from './components/ColorsGrid';
import { Header } from './components/Header';
import { useColorFilter } from './hooks/useColorFilter';

function App() {
  const [sortedColors, setColors, removeColor, newColor, setNewColor, filter, setFilter] = useColorFilter();

  return (
    <div className="App">
      <Header
        colors={sortedColors}
        setColors={setColors}
        newColor={newColor}
        setNewColor={setNewColor}
        filter={filter}
        setFilter={setFilter}
      />

      <ColorsGrid colors={sortedColors} removeColor={removeColor} />
    </div>
  );
}

export default App;
