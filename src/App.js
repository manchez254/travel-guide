import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Destinations from './pages/Destinations'
import DestinationDetail from './pages/DestinationDetail';
import About from './pages/About';
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path='/' element={<Navigate to="/home" replace />} />
          <Routes path='/' element={<Home />} />
          <Route path='/destinations' element={<Destinations />} />
          <Route path='/home' element={<Home />} />
          <Route path='/destinations/:id' element={<DestinationDetail />} />
          <Route path='/about' element={<About />} />
          <Route path='/old-home' element={<Navigate to="/" replace />} />
          <Route path='*' element={<NotFound />} />

        </Routes>
      </main>




    </>
  );
}

export default App;
