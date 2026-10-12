import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa";
import { MdOutlineReviews } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
 


import { products } from './../../../../../data/productData';

function ProductRenderingCard({products}) {
  return (
   <div className='flex flex-col md:flex-row justify-center items-center gap-8 flex-wrap'>
   {products.map((product, index)=>(
    <div key={index} className='relative rounded-2xl bg-blue-300 min-w-80 md:flex md:flex-row md:justify-between'>
        {!product.inStock && (
        <div className='absolute inset-10 bg-black/40 z-40 flex justify-center items-center rounded-4xl'>
            <h1 className='text-white text-2xl font-bold bg-red-600 px-4 py-2 rounded-xl'>Out of Stock</h1>
        </div>
        )}
        <div className='h-50 w-50 bg-[white] relative rounded-full md:h-auto md:rounded-tl-[150px] md:rounded-bl-[150px] md:w-50'>
            <div className='absolute w-50 h-50 top-0 right-9'>
                <img src={product.image} onMouseEnter={(e)=>(e.target.className="scale-110")} onMouseLeave={(e)=>(e.target.className="scale-100")}/>
            </div>
        </div>
        <div className='absolute top-10 right-2 md:hidden w-25'>
            <div>
                <p className='bg-[blue] font-bold text-amber-50 rounded-4xl text-center mb-2'>{product.brand}</p>
            </div>
            <div className='w-full'>
                <h1 className='font-bold text-orange-700 underline'>{product.title}</h1>                    
            </div>
            <div className='flex justify-end gap-4 items-center text-2xl rounded-2xl mt-5'>
                <button className='cursor-pointer'><FaRegHeart className='text-[red]'/></button>
                <button className='cursor-pointer'><TiShoppingCart/></button>
            </div>
        </div>
        <div className='md:w-50 rounded-bl-4xl rounded-br-4xl md:rounded-bl-none md:rounded-tr-4xl p-2'>
            <div className='flex justify-between gap-5 items-center '>
                <div>
                    <p>{product.brand}</p>
                </div>
                <div className='hidden md:flex justify-end gap-4 items-center text-2xl rounded-2xl'>
                    <button className='cursor-pointer'><FaRegHeart className='text-[red]'/></button>
                    <button className='cursor-pointer'><TiShoppingCart/></button>
                </div>
            </div>
            <div className='flex flex-col gap-2 mt-2'>
                <div>
                    <h1 className='font-bold text-orange-700'>{product.title}</h1>                    
                </div>
                <div className='flex justify-start items-center'>
                    <h1 className='font-bold bg-[yellow] rounded-full text-center  p-1'>{product.discount}% Off</h1>
                    <h1 className='font-bold'><span className='line-through m-2'>Rs{product.price}</span>Rs{product.price-(product.price/100*product.discount)|0}</h1>
                    <h1 className='font-bold text-orange-700'></h1>
                </div>
                <div className='flex justify-between'>
                    <div className='flex justify-start items-center'>
                        <IoIosStar />
                        <h1 className='font-bold text-orange-700'>{product.rating}</h1>
                    </div>
                    <div className='flex justify-start items-center'>
                        <MdOutlineReviews />
                        <h1 className='font-bold text-orange-700'>{product.reviews}</h1>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <button onClick={()=>{product.inStock && buyNow(product)}} className={`cursor-pointer bg-[blue] rounded-2xl text-amber-50 w-full p-2 ${product.inStock? "bg-blue-500 cursor-pointer" : "bg-gray-400 cursor-not-allowed disabled:" }`}>Buy Now</button>
            </div>
        </div>
    </div>
    ))}
   </div>
  )
}

export default ProductRenderingCard