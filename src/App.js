import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Layouts/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
