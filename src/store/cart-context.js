import React from "react";
//kullanilmicak ama autocompletion icin sonrasinda kullanilacak.
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
