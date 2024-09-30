import React, { useContext } from 'react'
import Item from '../components/Item'
import { ShopContext } from '../context/ShopContext'

const ProductDisplay = ({category}) => {
    const {all_products} = useContext(ShopContext)
  return (
    <section id='shop' className='mx-auto max-w-[1440px] px-6 lg:px-12 p-16 '>
        <div className='flex items-center justify-between pb-20'>
        <h4 className='text-4xl font-extrabold leading-none font-ace flex flex-col '>
          <span className='text-[16px] font-[500]'>see</span>
          Products
        </h4>
      </div>
      <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 '>
        {all_products.map((product)=> {
          if(category === "All" || category === product.category){

            return (
                <div key={product._id}>
                    <Item product={product}/>
                </div>
            )
          }
        })}
      </div>
    </section>
  )
}

export default ProductDisplay