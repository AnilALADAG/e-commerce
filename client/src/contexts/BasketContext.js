import { useEffect, useContext, createContext, useState } from 'react';

const BasketContext = createContext();

const defaultBasket = JSON.parse(localStorage.getItem('basket')) || [];

const BasketProvider = ({ children }) => {
  const [items, setItems] = useState(defaultBasket);

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(items));
  }, [items]);

  const addToBasket = (data, findBasketItem) => {
    if (!findBasketItem) {
      return setItems((items) => [data, ...items]);
    }
    const filtered = items.filter((item) => item._id !== findBasketItem._id);
    setItems(filtered);
  };

  const removeFromBasket = (data) => {
    const filtered = items.filter((item) => item._id !== data._id);
    setItems(filtered);
  };

  const emptyBasket = () => setItems([]);

  const values = { items, setItems, addToBasket };

  return (
    <BasketContext.Provider values={values}>{children}</BasketContext.Provider>
  );
};

const useBasket = () => useContext(BasketContext);

export { BasketProvider, useBasket };