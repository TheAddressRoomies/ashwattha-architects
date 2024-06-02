import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AllRoutes from "./routes/AllRoutes.js";

const App = () => (
  <BrowserRouter>
    <AllRoutes />
  </BrowserRouter>
);

export default App;
