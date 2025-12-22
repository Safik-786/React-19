import React from 'react'
import { productData } from '../../Constants/product.data'
import { addTocart } from '../actions/cartAction'
import { useDispatch } from 'react-redux'

function CartComponent() {

    const dispatch= useDispatch()
    const handleAddToCart = (product) => {
        dispatch(addTocart(product))
        console.log("item Added to card...")
    }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {productData.map((product) => (
                <div
                    key={product.id}
                    className="rounded-lg p-3 shadow"
                >
                    {/* Product Image */}
                    <img
                        src={product.images?.[0]}
                        alt={product.title}
                        className="w-full h-40 object-cover rounded"
                    />

                    {/* Product Info */}
                    <h3 className="mt-2 font-semibold">{product.title}</h3>
                    <p className="text-sm text-gray-600">{product.brand}</p>


                    {/* Price */}
                    <div className="mt-1">
                        <span className="font-bold">₹{product.discountPrice}</span>
                        <span className="line-through text-sm text-gray-400 ml-2">
                            ₹{product.price}
                        </span>
                    </div>

                    {/* Rating */}
                    <p className="text-sm mt-1">⭐ {product.rating}</p>

                    <button
                        onClick={()=> handleAddToCart(product)}
                        className='py-2 cursor-pointer px-4 shadow rounded text-sm my-2'>Add To Cart</button>
                </div>
            ))}
        </div>
    )
}

export default CartComponent
