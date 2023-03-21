import { useContext } from "react";
import { YananoContext } from "../../../context/context";

const useCart = () => {
  const { cartItems, setCartItems } = useContext(YananoContext);

  const addToCart = ({
    id,
    title,
    units,
  }: {
    id: number;
    title: string;
    units: number;
  }) => {
    setCartItems([
      ...cartItems,
      {
        id,
        title,
        units,
      },
    ]);
  };
  return { cartItems, addToCart };
};

export default useCart;
