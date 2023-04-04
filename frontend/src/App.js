import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import LogOut from './pages/LogOut';
import { useState } from 'react';
import UserDetails from './components/UserDetails';

export default function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  return (
    <>
      <Header title='WeatherTracker' userData={user} />
      <Routes>
        <Route path="/" element={<Home userData = {user} />} />
        <Route path="/About" element={<About />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/LogIn" element={<LogIn setUser={setUser} />} />
        <Route path="/LogOut" element={<LogOut setUser={setUser} />} />
        <Route path="/UserDetails" element={<UserDetails userData={user} />} />
      </Routes>
      <Footer />
    </>
  );
}
