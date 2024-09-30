import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { all_products = [], cartItems = {}, removeFromCart, getTotalCartAmount, url } = useContext(ShopContext);

  const cartTotal = getTotalCartAmount();

  // Filter products that are in the cart
  const productsInCart = all_products.filter(
    (product) => cartItems[product._id] > 0
  );

  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-12 pt-20">
      <div className="py-10">
        {productsInCart.length > 0 ? (
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-900/20 text-gray-30 regular-14 xs:regular-16 text-start py-12">
                <th className="p-1 text-left">Products</th>
                <th className="p-1 text-left">Title</th>
                <th className="p-1 text-left">Price</th>
                <th className="p-1 text-left">Quantity</th>
                <th className="p-1 text-left">Total</th>
                <th className="p-1 text-left">Remove</th>
              </tr>
            </thead>
            <tbody>
              {productsInCart.map((product) => (
                <tr
                  key={product._id}
                  className="border-b border-slate-900/20 text-gray-30 regular-14 xs:regular-16 text-start py-12"
                >
                  <td className="p-1">
                    <img
                      src={url+"/images/"+product.image}
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                  </td>
                  <td className="p-1">{product.name}</td>
                  <td className="p-1">${product.price}</td>
                  <td className="p-1">{cartItems[product._id]}</td>
                  <td className="p-1">
                    ${cartItems[product._id] * product.price}
                  </td>
                  <td className="p-1">
                    <button
                      onClick={() => removeFromCart(product._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-md"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-500">Your cart is empty</p>
        )}

        {productsInCart.length > 0 && (
          <div className="flex flex-col xl:flex-row gap-20 mt-20">
            <div className="flex flex-1 flex-col gap-2">
              <h4 className="bold-22">Summary</h4>
              <div>
                <div className="flexBetween py-3">
                  <h4 className="medium-16">Subtotal:</h4>
                  <h4 className="text-gray-30 font-semibold">${cartTotal}</h4>
                </div>
                <hr className="h-[2px] bg-slate-900/15" />
                <div className="flexBetween py-3">
                  <h4 className="medium-16">Shipping Fee:</h4>
                  <h4 className="text-gray-30 font-semibold">
                    ${cartTotal === 0 ? 0 : 2}
                  </h4>
                </div>
                <hr className="h-[2px] bg-slate-900/15" />
                <div className="flexBetween py-3">
                  <h4 className="medium-18">Total:</h4>
                  <h4 className="bold-18">
                    ${cartTotal === 0 ? 0 : cartTotal + 2}
                  </h4>
                </div>
              </div>
              <button
                onClick={() => navigate("/order")}
                className="bg-secondary text-white px-8 py-3 rounded-md"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
