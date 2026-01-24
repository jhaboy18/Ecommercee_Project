import React, { useContext } from 'react'

import Products from './Products'
import VideoPlayer from './VideoPlayer'
import Datacontext from '../Context/DataContext'

const Allproducts = () => {
  const { Products: productsData } = useContext(Datacontext) // rename here
 
  console.log('my products', productsData)
  return (
    <div>
      <VideoPlayer src={"https://www.apple.com/105/media/ww/iphone/family/2025/e7ff365a-cb59-4ce9-9cdf-4cb965455b69/anim/welcome3/large.mp4"}/>

      <Products prdct={productsData}/>  {/* pass renamed data */}
    </div>
  )
}

export default Allproducts
