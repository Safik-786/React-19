import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    setProducts,
    addToCart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart
} from "../slice/cartSlice";

const CartAppRtk = () => {
    const dispatch = useDispatch();
    const { cart, products } = useSelector((state) => state.cart);
    console.log(cart)
    const [showCart, setshowCart] = useState(false)


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            dispatch(setProducts(data));
        };
        fetchData();
    }, [dispatch]);

    return (
        <>
            <nav className="bg-white shadow-md flex justify-around p-4 mb-6">
                <h1 className="relative text-2xl font-bold">My Store</h1>
                <p className="cursor-pointer" onClick={() => setshowCart(!showCart)}>Cart
                    <span className="ml-1 absolute top-0 bg-blue-600 text-white text-xs rounded-full px-2 py-0.5">{cart.length}</span>
                </p>
            </nav>
            <div className="min-h-screen bg-gray-100 p-6">


                <div className="flex gap-10 mx-auto">
                    {
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {products.map((p) => (
                                <div
                                    key={p.id}
                                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col"
                                >
                                    <img
                                        src={p.image}
                                        alt={p.title}
                                        className="h-32 object-contain mx-auto mb-4"
                                    />

                                    <h4 className="font-medium text-sm line-clamp-2 mb-2">
                                        {p.title}
                                    </h4>

                                    <p className="font-semibold mb-4">₹{p.price}</p>

                                    <button
                                        onClick={() => dispatch(addToCart(p))}
                                        className="mt-auto bg-blue-600 text-white text-sm py-2 rounded-lg hover:bg-blue-700 transition"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            ))}
                        </div>
                    }

                    {/* Cart Tab */}
                    {
                        cart.length > 0 && showCart && (
                            <div className="bg-white shadow-md rounded-xl divide-y">
                                {cart.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex items-center justify-between p-4"
                                    >
                                        <div className="h-6 w-6">
                                            <img src={item.image} alt="" />

                                        </div>
                                        <div>
                                            <h4 className="font-medium text-sm">{item.title}</h4>
                                            <p className="text-gray-500 text-sm">
                                                Quantity: {item.quantity}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => dispatch(decreaseQty(item.id))}
                                                className="w-8 h-8 rounded-md bg-gray-200 hover:bg-gray-300"
                                            >
                                                −
                                            </button>

                                            <button
                                                onClick={() => dispatch(increaseQty(item.id))}
                                                className="w-8 h-8 rounded-md bg-gray-200 hover:bg-gray-300"
                                            >
                                                +
                                            </button>

                                            <button
                                                onClick={() => dispatch(removeFromCart(item.id))}
                                                className="ml-2 text-sm text-red-600 hover:underline"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                ))}

                                <div className="p-4 flex justify-end">
                                    <button
                                        onClick={() => dispatch(clearCart())}
                                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                                    >
                                        Clear Cart
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>

    );
};

export default CartAppRtk;