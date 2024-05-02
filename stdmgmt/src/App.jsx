import { BrowserRouter, Route,Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import DashBoard from './components/DashBoard'
import Home from './components/Home'
function App() {
  

  return (
    <BrowserRouter> 
        <Routes>
          <Route path={"/login"} element={<Login/>}/> 
          <Route path={"/dashboard"} element={<DashBoard/>}/> 
          <Route path={"/home"} element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
