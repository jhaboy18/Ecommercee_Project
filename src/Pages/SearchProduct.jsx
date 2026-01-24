import React from 'react'
import { useParams } from 'react-router-dom'
import { items } from '../Context/data'
import Products from '../Components/Products'
const SearchProduct = () => {
  const {term}=useParams()
  const serchproducts=items.filter(pro=>pro.title.toLowerCase().includes(term.toLowerCase()))
  return (
    <div>
      <Products prdct={serchproducts}/>
      
    </div>
  )
}

export default SearchProduct
