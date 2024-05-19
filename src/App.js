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
import LogOutPage from './Pages/LogOutPage';
import CartPage from './Pages/CartPage';
import { useDispatch, useSelector } from 'react-redux';
import { loggedIn } from './Redux/Slice/AuthSlice';
import ForgetPassword from './Pages/ForgetPassword';


function App() {

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const setIsLoggedIn = () => {
    dispatch(loggedIn());
  }

  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/groceries" element={<Groceries isLoggedIn={isLoggedIn} />} />
        <Route path="/everything" element={<Everything isLoggedIn={isLoggedIn} />} />
        <Route path="/juice" element={<Juice isLoggedIn={isLoggedIn} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/from" element={<FormPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/logout" element={<LogOutPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
















// import './App.css';
// import Home from './Components/HomeComponenet';
// import { Routes, Route } from 'react-router-dom';
// import Groceries from './Pages/Groceries';
// import Navbar from './Components/Navbar';
// import Everything from './Pages/Everything';
// import Juice from './Pages/Juice';
// import About from './Pages/About';
// import Contact from './Pages/Contact';
// import FormPage from './Pages/FromPage';
// import SignUpPage from './Pages/SignUpPage';
// import LogInPage from './Pages/LogInPage';
// import LogOutPage from './Pages/LogOutPage';
// import CartPage from './Pages/CartPage';
// import { useDispatch, useSelector } from 'react-redux';
// import { logIn, logOut } from './Redux/Slice/AuthSlice';

// function App() {
//   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
//   const dispatch = useDispatch();

//   const handleLogin = () => {
//     dispatch(logIn());
//   };

//   const handleLogout = () => {
//     dispatch(logOut());
//   };

//   return (
//     <div className="App">
//       <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/groceries" element={<Groceries isLoggedIn={isLoggedIn} />} />
//         <Route path="/everything" element={<Everything />} />
//         <Route path="/juice" element={<Juice />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/from" element={<FormPage />} />
//         <Route path="/signup" element={<SignUpPage />} />
//         <Route path="/login" element={<LogInPage handleLogin={handleLogin} />} />
//         <Route path="/logout" element={<LogOutPage handleLogout={handleLogout} />} />
//         <Route path="/cart" element={<CartPage />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
