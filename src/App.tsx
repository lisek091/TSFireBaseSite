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
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/cv' element={<Cv />} />
          <Route path='/register' element={<Register />} />
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />} />
          </Route>
        </Routes>
        <Navbar />
      </Router>
      <ToastContainer autoClose={2000}/>
    </ThemeProvider>
  );
}

export default App;
