import './App.css';
import Home from './Components/HomeComponenet';
import { Routes, Route } from 'react-router-dom';
import Groceries from './Pages/Groceries';
import Navbar from './Components/Navbar';
import Everything from './Pages/Everything';
import Juice from './Pages/Juice';
import About from './Pages/About';
import Contact from './Pages/Contact';
import FormPage from './Pages/FromPage';
import SignUpPage from './Pages/SignUpPage';
import LogInPage from './Pages/LogInPage';
import { useState } from 'react';
import LogOutPage from './Pages/LogOutPage';
import CartPage from './Pages/CartPage';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/groceries" element={<Groceries isLoggedIn={isLoggedIn} />} />
        <Route path="/everything" element={<Everything />} />
        <Route path="/juice" element={<Juice />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/from" element={<FormPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/logout" element={<LogOutPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
