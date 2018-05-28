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
  }
}
