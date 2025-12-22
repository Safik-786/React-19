import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaTrash } from "react-icons/fa";
import { removeFromCart } from '../actions/cartAction';

function CartNavbar() {
    const cartData = useSelector((state) => state.cart)
    const [displayCart, setDisplayCart] = useState(false)
    const dispatch = useDispatch()

    const toggleDisplayCart = () => {
        setDisplayCart((prev) => !prev)
    }


    const removeItem = (id) => {
        dispatch(removeFromCart(id))
    }

console.log(cartData?.cart)

    return (
        <>
            <header className="py-4 px-10 shadow">
                <ul className="text-end">
                    <li className="cursor-pointer relative inline-block">
                        <span onClick={toggleDisplayCart}>Cart</span>

                        {/* Cart Count */}
                        <span className="flex text-black text-[10px] justify-center items-center font-bold h-4 w-4 border absolute -top-2 -right-3 rounded-full">
                            {cartData.cart.length}
                        </span>
                    </li>
                </ul>
            </header>

            {/* Cart Dropdown */}
            {displayCart && (
                <div className="absolute top-16 right-10 w-[420px] bg-white shadow-lg border p-4 z-50">
                    {cartData.cart.length === 0 ? (
                        <p className="text-center text-gray-500">Cart is empty</p>
                    ) : (
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="border-b">
                                    <th className="text-left py-2">Product</th>
                                    <th className="text-right py-2">Price</th>
                                    <th className="text-right py-2">Remove</th>
                                </tr>
                            </thead>

                            <tbody>
                                {cartData.cart.map((item, index) => (
                                    <tr key={index} className="border-b last:border-none">
                                        <td className="py-2">
                                            <div className="flex items-center gap-2">
                                                <img
                                                    src={item.images?.[0]}
                                                    alt={item.title}
                                                    className="h-10 w-10 object-cover rounded"
                                                />
                                                <span>{item.title}</span>
                                            </div>
                                        </td>
                                        <td className="py-2 text-right font-semibold">
                                            ₹{item.discountPrice}
                                        </td>
                                        <td className=''>
                                            <button onClick={() => removeItem(item.id)} className='flex justify-center items-center h-full w-full  '>
                                                <FaTrash className='text-red-600 cursor-pointer' />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            )}
        </>
    )
}

export default CartNavbar
