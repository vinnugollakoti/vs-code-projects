import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Signup from './Component/Signup'
// import Login from './Component/Login'
import Random from './Components1/Random'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Random />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
