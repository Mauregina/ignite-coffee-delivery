import { Cart } from '../interfaces/Cart'

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  UPDATE_ITEM = 'UPDATE_ITEM',
  DELETE_ITEM = 'DELETE_ITEM',
  CLOSE_CART = 'CLOSE_CART',
}

export function cartReducer(state: Cart, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          {
            coffeeId: action.payload.coffeeId,
            quantity: action.payload.quantity,
          },
        ],
      }
    case ActionTypes.UPDATE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.map((i) =>
          i.coffeeId === action.payload.coffeeId
            ? { ...i, quantity: action.payload.quantity }
            : i,
        ),
      }
    case ActionTypes.DELETE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (i) => i.coffeeId !== action.payload.coffeeId,
        ),
      }
    case ActionTypes.CLOSE_CART:
      return {
        ...state,
        cartItems: [],
        payment: action.payload.payment,
        address: action.payload.address,
      }
    default:
      return state
  }
}
