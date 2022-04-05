import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemToCartHeader = (item) => {};

  const removeItemFromCartHeader = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHeader,
    removeItem: removeItemFromCartHeader,
  };

  return <CartContext.Provider>{props.children}</CartContext.Provider>;
};

export default CartProvider;
