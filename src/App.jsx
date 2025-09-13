import About from './About/About'
import './App.css'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import Navbar from './Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Products from './Products/Products'
import ProductDetails from './Products/ProductDetails'
import Register from './Register/Register'
import NotFound from './Notfound/Notfound'

function App() {



  return (
   
    <BrowserRouter >
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/products/productdetails/:id' element={<ProductDetails/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
  )
}

export default App
