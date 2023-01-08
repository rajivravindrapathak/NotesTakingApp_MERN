import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./Components/Home"
import Login from './Components/Login';
import Notes from './Components/Notes';
import Register from './Components/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/notes' element={<Notes />} />
      </Routes>
    </div>
  );
}

export default App;
