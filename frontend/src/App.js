import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';

export default function App() {

  return (
    <>
      <Header title='WeatherTracker' />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Events" element={<Events />} />
      </Routes>
      <Footer />
    </>
  );
}