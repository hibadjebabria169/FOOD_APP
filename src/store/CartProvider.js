import { useReducer } from 'react';

import contextCart from './contextCart';

// when i have nothing to show ( the default state) 
const defaultState = {
  items: [],
  total: 0
};

const Reducer = (state, action) => {
  if (action.type === 'ADD') {
    const NewItems = state.items.concat(action.item); //we add a new item ! 
    const NewTotal = state.total + action.item.price * action.item.amount;
    return {
      items:NewItems,
      total: NewTotal,
    };
  }
  return defaultState;
}; 

const CartProvider = (props) => {
  const [cartState, dispatchAction] = useReducer(Reducer, defaultState);

  const addItemToCartHandler = (item) => {
    dispatchAction({type: 'ADD', item: item});
  };

  const removeItemFromCartHandler = (id) => {
    dispatchAction({type: 'REMOVE', id: id});
  };

  const cartContext = {
    items: cartState.items,
    total: cartState.total,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <contextCart.Provider value={cartContext}>
      {props.children}
    </contextCart.Provider>
  );
};

export default CartProvider;