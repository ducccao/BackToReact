import logo from "./logo.svg";
import "./App.css";
import Hi from "./components/Hi";
import StateFull from "./components/StateFull";
import HOC from "./components/HOC";
import RaBS from "./components/RaBS";
import VariationsStateLess from "./components/VariationsStateLess";

const ExtendedCpn = HOC(Hi);

function App() {
  return <VariationsStateLess name={"Duccao"} />;
}

export default App;
