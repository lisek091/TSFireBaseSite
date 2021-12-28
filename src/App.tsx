import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Navbar from './components/layout/Navbar';
import { ThemeProvider } from '@mui/material'
import theme from './components/layout/theme'
import Register from './components/pages/Register'
import Cv from './components/pages/Cv'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/cv' element={<Cv />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <Navbar />
      </Router>
    </ThemeProvider>
  );
}

export default App;
