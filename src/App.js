import { Route, Routes } from "react-router-dom";
import "./App.css";
import { RahiHome } from "./Components/RahiHome";
import RahiRoutes from "./Components/RahiRoutes";
import Wfh from "./Components/Wfh";
import WfhDetails from "./Components/WfhDetails";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Pages/AllRoutes";

function App() {
  return (
    <div>
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
