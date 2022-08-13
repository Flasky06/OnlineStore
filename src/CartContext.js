import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [Products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchProducts = () => {
      axios.get("https://fakestoreapi.com/products?limit=10").then((res) => {
        console.log(res.data);
        setProducts(res.data);
      });
    };
    fetchProducts();
  }, []);

  const HandleAddProduct = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    console.log(exist);
    if (exist) {
      console.log(exist);

      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...exist, quantity: exist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleReduceProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);

    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
  };
  const subtotal = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  const handleClearCart = () => {
    setCartItems([]);
  };
  const handleRemoveItem = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };
  return (
    <CartContext.Provider
      value={{
        Products,
        cartItems,
        HandleAddProduct,
        handleReduceProduct,
        subtotal,
        handleClearCart,
        handleRemoveItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
