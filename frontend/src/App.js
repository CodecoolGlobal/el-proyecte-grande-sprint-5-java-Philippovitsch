import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'


export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
    </Routes>
  );
}