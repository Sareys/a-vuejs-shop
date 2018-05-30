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
    categorySelect: [],   // check category type
    subcategory: [],    // sub category enter
    categoryForCateCheck: [
      {
        cate: 'menApparel',
        check: false
      },
      {
        cate: 'womenApparel',
        check: false
      },
      {
        cate: 'supplements',
        check: false
      },
      {
        cate: 'equipment',
        check: false
      }
    ],
    categoryForSubCheck: {         // category items for subcategory check
      'all': [
        {sub:'upper', check:false},
        {sub:'lower', check:false},
        {sub:'shoe', check:false},
        {sub:'whey', check:false},
        {sub:'protein bar', check:false},
        {sub: 'creatine', check: false}
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
        {sub:'protein bar', check:false},
        {sub: 'creatine', check: false}
      ],
      'equipment': [
      ]
    }
  },
  getters,
  actions,
  mutations
})
