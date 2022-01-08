import Navbar from "./Components/Navbar";
import PrivateRoutes from "./Components/PrivateRoutes";
import Routes from "./Pages/Routes";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
      <PrivateRoutes />
    </div>
  );
}
