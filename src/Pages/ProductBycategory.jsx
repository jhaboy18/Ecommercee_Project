import React from 'react'
import VideoPlayer from '../Components/VideoPlayer'
import { useParams } from 'react-router-dom'
import { Videos, items } from '../Context/data'
import Products from '../Components/Products'

const ProductBycategory = () => {
  const { cat } = useParams();

  // 🔥 video object
  const videoObj = Videos.find(
    vid => vid.category.toLowerCase() === cat.toLowerCase()
  );
  console.log(videoObj)

  // 🔥 products list
  const ProductsByCategory = items.filter(
    pro => pro.category.toLowerCase() === cat.toLowerCase()
  );

  return (
    <div>
      {/* SAFE CHECK */}
      {videoObj && <VideoPlayer src={videoObj.url} />}

      <Products prdct={ProductsByCategory} />
    </div>
  );
};

export default ProductBycategory;
