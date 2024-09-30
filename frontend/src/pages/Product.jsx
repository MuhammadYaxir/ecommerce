
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import ProductHd from '../components/ProductHd';
import ProductMd from '../components/ProductMd';
import ProductDescription from '../components/ProductDescription';

const Product = () => {
  const {all_products} = useContext(ShopContext);
  const {productId} = useParams();
  // console.log("Product Id:",productId);

  const product = all_products.find((e) => e._id === productId);
  if(!product){ 
    return <div className='h1 pt-28'>Product Not Found</div>
  }
  console.log(product)
  return (
    <section className='mx-auto max-w-[1440px] px-6 lg:px-12 py-20'>
      <div >
        <ProductHd product={product}/>
        <ProductMd product={product}/>
        <ProductDescription/>
      </div>
    </section>
  )
}

export default Product