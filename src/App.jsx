import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./ThemeContext";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#0f0f0f" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <section className="Scroll">
      <Intro />
      <About />
      <ProductList />
      <Contact />
      </section>
    </div>
  );
};

export default App;