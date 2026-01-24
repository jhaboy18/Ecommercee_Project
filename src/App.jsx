import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Allproducts from './Components/Allproducts'
import Cart from './Pages/Cart'
import ProductDetail from './Pages/ProductDetail'
import ProductBycategory from './Pages/ProductBycategory'
import SearchProduct from './Pages/SearchProduct'
import TrendingSlider from './Components/TrendingSlider'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Allproducts/>}/>
        <Route path='/cart' element={<Cart/>}/>
         <Route path='/product/:id' element={<ProductDetail/>}/>
          <Route path='/product/category/:cat' element={<ProductBycategory/>}/>
           <Route path='/product/search/:term' element={<SearchProduct/>}/>
      </Routes>
      {/* <TrendingSlider/> */}
    </div>
  )
}

export default App
