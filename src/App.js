import "./App.css";
import NavBar from "./components/navigation/NavBar";
import Portfolio from "./components/portfolioBody/Portfolio";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Portfolio />
      <Footer></Footer>
    </div>
  );
}

export default App;
