import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Login from './pages/Login/index'
import Register from './pages/Register/index'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Navigate to="/login" /> } />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Login />} />
    </Routes>
  </BrowserRouter>
)

export default App