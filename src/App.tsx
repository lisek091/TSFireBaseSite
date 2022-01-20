import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Navbar from './components/layout/Navbar';
import { ThemeProvider } from '@mui/material'
import theme from './components/layout/theme'
import Register from './components/pages/Register'
import Cv from './components/pages/Cv'
import Profile from './components/pages/Profile';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/auth/PrivateRoute';
import ForgotPassword from './components/pages/ForgotPassword';
import Games from './components/pages/Games';
import { Provider } from 'react-redux';
import { store } from './components/context/redux/store'
import Github from './components/pages/Github';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/github' element={<Github />} />
            <Route path='/about' element={<About />} />
            <Route path='/cv' element={<Cv />} />
            <Route path='/games' element={<Games />} />
            <Route path='/register' element={<Register />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/profile" element={<PrivateRoute />}>
              <Route path='/profile' element={<Profile />} />
            </Route>
          </Routes>
          <Navbar />
        </Router>
        <ToastContainer autoClose={3000} />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
