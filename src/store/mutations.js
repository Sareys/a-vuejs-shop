import shop from '@/api/shop'

export default { // setting and updating the state
  setProducts(state,products) {
    state.products = products
  },

  pushProductToCart(state, prodData) {
    console.log(prodData)
    state.cart.push({
      id: prodData.id,
      quantity: prodData.prodNum
    })
    state.cartItems++
  },
  incrementItemQty(state, cartData) {
    console.log('cartItem', cartData)
    cartData.cartItem.quantity+= cartData.prodNum
  },
  decrementProductInventory(state,product) {
    product.inventory-= product.prodNum
  },
  setCheckoutStatus(state,status) {
    state.checkoutStatus = status
  },
  emptyCart(state) {
    state.cart = []
    state.cartItems = 0
  },
  setHighPrice(state, event) {
    state.highprice = event
  },
  toggleSale(state) {
    state.sale = !state.sale
  },
  toggleStack(state) {
    state.stack = !state.stack
  },
  toggleSubCategory(state, sub) {
    if (state.subcategory.includes(sub)){
      console.log(sub)
      state.subcategory.splice(state.subcategory.indexOf(sub),1)
    } else {
      state.subcategory.push(sub)
    }
  },

  addProductToState(state, product) {
    let newId = Date.now() + Math.round(Math.random(0, 1) * 1000)
    product.id = product.id ? product.id : newId
    state.products.push(product)
  },

  removeProductFromState(state, id) {
    const index = state.products.findIndex(p => p.id === id)
    state.products.splice(index, 1)
  },
  modifyProductInState(state, product) {
    const index = state.products.findIndex(p => p.id === product.id)
    state.products.splice(index, 1, product)
  }


}
