import Booklist from "./components/BookList";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import ThemeContextProvider, {ThemeContext} from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar/>
        <Booklist/>
        <ThemeToggle/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
