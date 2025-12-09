import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter ,Routes ,Route} from 'react-router'
import Home from './pages/All'
import Lunch from './pages/Lunch'
import Breakfast from './pages/Breakfast'
import Login from './pages/Login'
import Dinner from './pages/Dinner'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
    
    <Routes>
    <Route path='/'  element={<Home/>}/>
    <Route path='/breakfast'  element={<Breakfast/>}/>
    <Route path='/lunch'  element={<Lunch/>}/>
    <Route path='/login'  element={<Login/>}/>
    <Route path='/dinner'  element={<Dinner/>}/>


    </Routes>
      </BrowserRouter>
  )
}

export default App
