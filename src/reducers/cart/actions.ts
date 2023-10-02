import { Address } from '../../interfaces/Cart'
import { PaymentType } from '../../interfaces/Payment'

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  UPDATE_ITEM = 'UPDATE_ITEM',
  DELETE_ITEM = 'DELETE_ITEM',
  CLOSE_CART = 'CLOSE_CART',
}

export function addItemAction(coffeeId: number, quantity: number) {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: { coffeeId, quantity },
  }
}

export function updateItemAction(coffeeId: number, quantity: number) {
  return {
    type: ActionTypes.UPDATE_ITEM,
    payload: { coffeeId, quantity },
  }
}

export function deleteItemAction(coffeeId: number) {
  return {
    type: ActionTypes.DELETE_ITEM,
    payload: { coffeeId },
  }
}

export function closeCartAction(payment: PaymentType, address: Address) {
  return {
    type: ActionTypes.CLOSE_CART,
    payload: { payment, address },
  }
}
