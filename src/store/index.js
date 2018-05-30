import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state : { // = data
    products:[],
    cart:[],
    cartItems:0,
    checkoutStatus: null,
    highprice: 1500,
    sale: false,        // check sale or not
    stack: false,       // check out of stack or not
    subcategory: [],    // sub category enter
    category: {         // category items
      'all': [
        {sub:'upper', check:false},
        {sub:'lower', check:false},
        {sub:'shoe', check:false},
        {sub:'whey', check:false},
        {sub:'protein bar', check:false}
      ],
      'menApparel': [
        {sub:'upper', check:false},
        {sub:'lower', check:false},
        {sub:'shoe', check:false}
      ],
      'womenApparel': [
        {sub:'upper', check:false},
        {sub:'lower', check:false},
        {sub:'shoe', check:false}
      ],
      'supplements': [
        {sub:'whey', check:false},
        {sub:'protein bar', check:false}
      ],
      'equipment': [
      ]
    }
  },
  getters,
  actions,
  mutations
})
