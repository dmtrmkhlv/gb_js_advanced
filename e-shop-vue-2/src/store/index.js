import { createStore } from 'vuex'

// const API_URL = process.env.BACKEND_URL;
const API_URL = 'http://localhost:8080';

export default createStore({
  state: {
    showCase: [],
    cart: [],
    filterString: ""
  },
  getters:{
    getShowCase(state){
      if(state.filterString.length == 0){
        return [...state.showCase]
      }
      const reg = new RegExp(state.filterString, 'gi');
      return state.showCase.filter((good)=> reg.test(good.product_name));
    },
    getCart(state){
      return [...state.cart];
    },
    getSearchString(state){
      return state.filterString;
    }
  },
  mutations: {
    setFilter(state, payload){
      state.filterString = payload;
    },
    addShowCase(state, payload){
      state.showCase = [...payload];
    },
    addCart(state, payload){
      state.cart = [...payload];
    },
    addToCart(state, payload){
      let index = state.cart.findIndex((item) => item.id_product == payload.id_product);
      if (index != -1) {
        state.cart[index].quantity = state.cart[index].quantity + 1;
      }else{
          payload.quantity = 1;
          state.cart.push(payload);
      }
    },
    removeFromCart(state, id){
      let index = state.cart.findIndex((good) => id == good.id_product);
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--;
      }else{
        state.cart.splice(index, 1);
      }
    }
  },
  actions: {
    fetchShowCase({commit}){
      return fetch(`${API_URL}/catalog`)
      .then((response)=>response.json())
      .then((data)=>{
        commit('addShowCase', data);
      })
    },
    fetchCart({commit}){
      return fetch(`${API_URL}/cart`)
      .then((response)=>response.json())
      .then((data)=>{
        commit('addCart', data);
      })
    },
    addToCart({commit}, good){
      return fetch(`${API_URL}/cart`,{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(good)
      })
      .then((response)=>{
        if(response.status == 200){
          commit('addToCart', good);
        }
      })

    },
    deleteFromeCart({commit}, id){
      return fetch(`${API_URL}/cart/${id}`,{
        method: 'DELETE'
      })
      .then((response)=>{
        if(response.status == 200){
          commit('removeFromCart', id);
        }
      })
    }
  },
  modules: {
  }
})
