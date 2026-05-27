import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart
} from "../slice/cartSlice";

const CartApp = () => {
  const dispatch = useDispatch();
  const { products, cart, status } = useSelector((state) => state.cart);

  const [activeTab, setActiveTab] = useState("products");

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">

        {/* Tabs */}
        <div className="bg-white shadow-md rounded-xl mb-8 flex">
          <button
            onClick={() => setActiveTab("products")}
            className={`flex-1 py-4 text-center font-medium border-b-2 transition
              ${
                activeTab === "products"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
          >
            Products
          </button>

          <button
            onClick={() => setActiveTab("cart")}
            className={`relative flex-1 py-4 text-center font-medium border-b-2 transition
              ${
                activeTab === "cart"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
          >
            Cart
            {cartCount > 0 && (
              <span className="absolute top-2 right-6 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Products Tab */}
        {activeTab === "products" && (
          <section>
            {status === "loading" && (
              <p className="text-gray-500">Loading products...</p>
            )}

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
          </section>
        )}

        {/* Cart Tab */}
        {activeTab === "cart" && (
          <section>
            {cart.length === 0 && (
              <div className="bg-white shadow-md rounded-xl p-6 text-gray-500">
                Your cart is empty
              </div>
            )}

            {cart.length > 0 && (
              <div className="bg-white shadow-md rounded-xl divide-y">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-4"
                  >
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
            )}
          </section>
        )}
      </div>
    </div>
  );
};

export default CartApp;
