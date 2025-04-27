import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Components/PokemonHome/HomePage';
import PokemonDetails from './Components/Details/PokemonDetails';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/pokemon/:id' element={<PokemonDetails />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
