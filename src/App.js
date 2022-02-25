import './App.css';
import Homepage from './components/home';
import Login from "./components/login";
import Register from "./components/register";
import { useState } from "react";
import { BrowserRouter as Router , Routes, Route} from "react-router-dom";


function App() {
  const [user, setLoginUser] = useState({
    name: "",
    email: "",
    password: ""
  });
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<Homepage/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
