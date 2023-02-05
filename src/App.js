import Booklist from "./components/BookList";
import Navbar from "./components/Navbar";
import ThemeContextProvider, {ThemeContext} from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar/>
        <Booklist/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
