import { BrowserRouter, Route,Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import DashBoard from './components/DashBoard'
function App() {
  

  return (
    <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Login/>}/> 
          <Route path={"/dashboard"} element={<DashBoard/>}/> 
          {/* <Route path={"/"} element={</>}/> */}
        </Routes>
    </BrowserRouter>
  )
}

export default App
