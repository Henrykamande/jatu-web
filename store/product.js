//  import  from 'axios'
import axios from 'axios'

import { http } from '@/common/index';

export const state = () => ({
  list: [],
  appName: '',
  cart: [],
  ordered: [],
  wishList: []
})

// mutations
export const mutations = {
  resetCart (state) {
    state.ordered = [ ...state.cart ]
    state.cart = []
  },
  addToCart (state, item) {
    const exits = state.cart.find((record) => { return record._id === item._id })
    if (exits) {
      return
    }
    state.cart.push(item)
  },
  removeFromCart (state, id) {
    const item = state.cart.find((record) => { return record._id === id })
    return state.cart.splice(state.cart.indexOf(item), 1)
  },
  cartQuantity (state, {id, quantity}) {
    const cart = [...state.cart];
    const item = state.cart.find((record) => { return record._id === id })
    const index = state.cart.indexOf(item)
    if (index === -1) { return false }
    item.quantity = quantity
    cart[index] = item;
    state.cart = cart;
  },
  addToWhislist (state, product) {
    state.wishList.push(item)
  }
}

//  getters
export const getters = {
  app (state) {
    return state.appName || ''
  },
  cart (state) {
    return state.cart || []
  },
  wishlist (state) {
    return state.wishList || []
  },
  ordered (state) {
    return state.ordered || []
  }
}

// actions
export const actions = {

  getData ({commit}, url) {
    return new Promise((resolve, reject) => {
      return http.get(url)
        .then((res) => {
          resolve(data)
        })
        .catch((err) => { reject(err) })
    })
  },
  search ({commit}, keyword) {
    return new Promise((resolve, reject) => {
      return http.get('/api/search/' + keyword)
        .then(({data}) => {
          resolve(data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  checkout ({commit}, order) {
    return new Promise((resolve, reject) => {
      return http.post(`/api/order`, order)
        .then(({data}) => {
          //  console.log(data, 'data')
          resolve(data)
          if (data.state) {
            //  resolve(data)
          }
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}
