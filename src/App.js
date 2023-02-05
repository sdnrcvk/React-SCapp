import Booklist from "./components/BookList";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import ThemeContextProvider from "./contexts/ThemeContext";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ThemeContextProvider>
          <Navbar/>
          <Booklist/>
          <ThemeToggle/>
        </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
