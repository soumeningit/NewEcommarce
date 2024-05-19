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
import { loggedIn, signUp } from './Redux/Slice/AuthSlice';
import ForgetPassword from './Pages/ForgetPassword';
import SignOutPage from './Pages/SignOutPage';

function App() {

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const setIsLoggedIn = () => {
    dispatch(loggedIn());
  }

  const isSignUp = useSelector((state) => state.auth.isSignUp);
  const setIsSignUp = () => {
    dispatch(signUp());
  }

  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} isSignUp={isSignUp} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/groceries" element={<Groceries isLoggedIn={isLoggedIn} />} />
        <Route path="/everything" element={<Everything isLoggedIn={isLoggedIn} />} />
        <Route path="/juice" element={<Juice isLoggedIn={isLoggedIn} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/from" element={<FormPage />} />
        <Route path="/signup" element={<SignUpPage setIsSignUp={setIsSignUp} />} />
        <Route path="/login" element={<LogInPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/logout" element={<LogOutPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/signout" element={<SignOutPage setIsSignUp={setIsSignUp} />} />
      </Routes>
    </div>
  );
}

export default App;
