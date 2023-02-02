import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Privacypolicy from "./components/Privacy/Privacypolicy";
import Termandconditions from "./components/Terms/Termandconditions";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import { Register } from "./pages/register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/termsandconditions" element={<Termandconditions/>}/>
        <Route path="privacypolicy" element={<Privacypolicy/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
