import { useState, createContext } from "react";

export const ThemeContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
});

const ContextProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItemHandler = (newItem) => {
    const findItemIndex = cart.findIndex((item) => item.id === newItem.id);
    const findItem = cart[findItemIndex];
    let updatedItems;
    console.log(newItem);
    if (findItem) {
      updatedItems = [...cart];
      updatedItems[findItemIndex] = {
        ...updatedItems[findItemIndex],
        amount: findItem.amount + 1,
      };

      setTotalAmount((prevValue) => prevValue + 1);
      setCart(updatedItems);
    } else {
      setTotalAmount((prevValue) => prevValue + 1);
      setCart((prevValue) => [...prevValue, newItem]);
    }
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

      setTotalAmount((prevValue) => prevValue - 1);
      setCart(updatedItems);
    } else {
      cart.splice(findItemIndex, 1);
      setTotalAmount((prevValue) => prevValue - 1);
      setCart(cart);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        items: cart,
        totalAmount: totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ContextProvider;
