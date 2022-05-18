import { useState, createContext } from "react";

export const ThemeContext = createContext({
  items: [],
  totalAmount: 0,
  totalPrice: 0,
  addItem: ({ id, name, description, price, amount }) => {},
  removeItem: (id) => {},
});

const ContextProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItemHandler = (newItem) => {
    const findItemIndex = cart.findIndex((item) => item.id === newItem.id);
    const findItem = cart[findItemIndex];

    let updatedItems;

    if (findItem) {
      updatedItems = [...cart];
      updatedItems[findItemIndex] = {
        ...updatedItems[findItemIndex],
        amount: findItem.amount + 1,
      };

      setCart(updatedItems);
    } else {
      setCart((prevValue) => [...prevValue, newItem]);
    }

    setTotalPrice((prevValue) => prevValue + parseFloat(newItem.price));
    setTotalAmount((prevValue) => prevValue + 1);
  };

  const removeItemHandler = (itemId) => {
    const findItemIndex = cart.findIndex((item) => item.id === itemId);
    const findItem = cart[findItemIndex];

    let updatedItems;

    if (findItem.amount > 1) {
      updatedItems = [...cart];
      updatedItems[findItemIndex] = {
        ...updatedItems[findItemIndex],
        amount: findItem.amount - 1,
      };

      setCart(updatedItems);
    } else {
      cart.splice(findItemIndex, 1);
      setCart(cart);
    }

    setTotalAmount((prevValue) => prevValue - 1);
    setTotalPrice((prevValue) => prevValue - findItem.price);
  };

  return (
    <ThemeContext.Provider
      value={{
        items: cart,
        totalAmount: totalAmount,
        totalPrice: totalPrice,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ContextProvider;
