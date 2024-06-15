
import { useCart } from "../Context/CartContext";
import Navbar from "../components/navbar/navbar";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { state } = useCart();

  return (
    <div>
       <Navbar/>
      <h1 className=" text-xl font-bold pl-5 pt-4">Your Cart</h1>
      {state.items.length > 0 ? (
        state.items.map((item, index) => (
          <div key={index}>
            <p>Name: {item.name}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Size: {item.size}</p>
            <p>Price: ₹{item.price}</p>
          </div>
        ))
      ) : (
          <div>
            <h1 className=" text-center text-3xl pt-24">Your cart is empty!</h1>
            <div className=" flex justify-center mt-9">
            <button className=" bg-slate-300 w-[12%] h-7 rounded-lg hover:bg-black hover:text-white transition duration-500"><Link to="/">Countinue shopping</Link></button>
          </div>
          </div>
      )}
    </div>
  );
};

export default CartPage;
