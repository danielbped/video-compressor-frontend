import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Login from './pages/Login/index'
import Register from './pages/Register/index'
import Compressor from './pages/Compressor'
import Home from './pages/Home'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Navigate to="/home" /> } />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/compressor" element={<Compressor />} />
      <Route path="*" element={<Login />} />
    </Routes>
  </BrowserRouter>
)

export default App