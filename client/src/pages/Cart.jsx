import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { cartItems, subTotal, tax, shipping, total } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  const increment = (id) => {
    dispatch({
      type: "addToCart",
      payload: { id },
    });
    dispatch({ type: "calculatePrice" });
  };
  const decrement = (id) => {
    dispatch({
      type: "decrement",
      payload: id,
    });
    dispatch({ type: "calculatePrice" });
  };
  const deleteHandler = (id) => {
    dispatch({
      type: "deleteFromCart",
      payload: id,
    });
    dispatch({ type: "calculatePrice" });
  };

  const handleCheckout = () => {
    window.location.reload();
  };

  return (
    <div className="h-screen grid grid-cols-4">
      <main className="col-span-3 p-8 overflow-y-auto">
        {cartItems.length > 0 ? (
          cartItems.map((i) => (
            <CartItem
              imgSrc={i.imgSrc}
              name={i.name}
              price={i.price}
              qty={i.quantity}
              id={i.id}
              key={i.id}
              decrement={decrement}
              increment={increment}
              deleteHandler={deleteHandler}
            />
          ))
        ) : (
          <h1 className="text-dark text-2xl font-light">No Items Yet</h1>
        )}
      </main>

      <aside className="bg-primary text-light rounded-l-3xl shadow-lg flex flex-col justify-center p-8">
        <h2 className="my-4 text-xl font-light tracking-wide">Subtotal: Rs {subTotal}</h2>
        <h2 className="my-4 text-xl font-light tracking-wide">Shipping: Rs {shipping || 200}</h2>
        <h2 className="my-4 text-xl font-light tracking-wide">Tax: Rs {tax}</h2>
        <h2 className="my-4 text-xl font-semibold tracking-wide">Total: Rs {total}</h2>
        <button
          onClick={handleCheckout}
          className="mt-4 py-2 bg-light text-primary font-medium rounded-lg transition-all duration-500 hover:bg-light/90"
        >
          Checkout
        </button>
      </aside>
    </div>
  );
};

const CartItem = ({
  imgSrc,
  name,
  price,
  qty,
  decrement,
  increment,
  deleteHandler,
  id,
}) => (
  <div className="bg-light rounded-lg my-8 p-4 grid grid-cols-4 items-center">
    <img src={imgSrc} alt="Item" className="w-full h-48 object-contain" />
    <article>
      <h3 className="text-lg font-medium">{name}</h3>
      <p className="text-lg font-light">Rs {price}</p>
    </article>

    <div className="flex items-center space-x-2">
      <button
        onClick={() => decrement(id)}
        className="w-8 h-8 bg-primary text-light rounded hover:bg-primary/90"
      >
        -
      </button>
      <p className="w-8 h-8 flex items-center justify-center">{qty}</p>
      <button
        onClick={() => increment(id)}
        className="w-8 h-8 bg-primary text-light rounded hover:bg-primary/90"
      >
        +
      </button>
    </div>

    <AiFillDelete
      onClick={() => deleteHandler(id)}
      className="text-xl cursor-pointer hover:text-primary"
    />
  </div>
);

export default Cart;
