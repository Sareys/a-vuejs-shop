<template>
	<transition name="fade" tag="div">
		<div class="checkout">
			<h1>Checkout Page</h1>
			<div class="cart-list">
				<li class="cart-item cart-head">
					<span class="cart-head--title">Title</span>
					<span>Price</span>
					<span>Quantity</span>
					<span>Operate</span>
				</li>
				<li class="cart-item" v-for="item in products" :date-key="item.id">
					<img :src="`./static/images/${item.img}`" alt="img of product">
					<span>{{item.title}}</span>
					<span>{{item.price | currency}}</span>
					<span class="quantity">
						<a class="input_pre" href="javascript:(void 0);" @click="decNum(item)"> - </a>
						<input type="text" name="" v-model="item.quantity" @input="" disabled>
						<a class="input_after" href="javascript:(void 0);" @click="addNum(item)"> + </a>
					</span>
					<span><a href="javascript:(void 0);" style="text-decoration: none; color:red;" @click="removeItem(item)">remove</a></span>
				</li>
				<div class="total">
					<span>TOTAL:</span>
					<span>{{total | currency}}</span>
				</div>
			</div>
			<div class="buyer-info">
					<input class="buyer-input" type="text" placeholder="first name">
					<input class="buyer-input" type="text" placeholder="last name">
					<input class="buyer-input" type="text" placeholder="street name">
					<input class="buyer-input" type="number" placeholder="number">
					<input class="buyer-input" type="text" placeholder="zip code">
					<input class="buyer-input" type="text" placeholder="city">
			</div>
			<div class=button-wrap>
				<button @click="checkout">Submit</button>
				<button>Cancel</button>
			</div>
		</div>
	</transition>
	
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
	data () {
		return {

		}
	},
	computed: {
		...mapGetters({
			products: 'cartProducts',
			total: 'cartTotal'
		})
	},
	methods: {
		decNum: function (cartPro){
			const product = this.$store.getters.getProductById(cartPro.id)
			this.decProductFromCart(product)
		},
		addNum: function (cartPro){
			const product = this.$store.getters.getProductById(cartPro.id)
			this.addProductNum(product)
		},
		removeItem: function (cartPro) {
			const product = this.$store.getters.getProductById(cartPro.id)
			this.removeProduct(product)
		},
		...mapActions({
			addProductNum: 'addProductToCart',
			decProductFromCart: 'decProductFromCart',
			removeProduct: 'removeProduct',
			checkout: 'checkout'
		})
	}
}
	
</script>

<style lang="scss" scoped>
.checkout {
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		align-self: flex-start;
	}

	.cart-list {
		display: flex;
		flex-direction: column;
		width: 800px;

		.cart-item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-bottom: 10px;
			margin-top: 10px;
			border-bottom: 1px solid rgba(235,235,235, .75);
			height: 70px;
			font-size: 15px;

			img {
				height: 50px;
				widht: 50px
			}

			span {
				flex: .2 0 0;
			}

			span:first-child {
				flex: .3 0 0;
			}

			.quantity {
				display: flex;
				width: 50%;
				justify-content: center;

				a {
					outline: 0;
					text-decoration: none;
					text-align: center;
					font-size: 20px;
					color: black;
					background-color: #ededed;
					flex: .2 0 0;
					width: 26px;
					height: 30px;
					border: 1px solid #ccc;
				}

				input {
					flex: .3 0 0;
					width: 30px;
					height: 30px;
					border: 1px solid #ccc;
					text-align: center;
					cursor: text;
					outline: none;
				}
				.input_pre {
					border-right: 0 !important;
				}

				.input_after {
					border-left: 0 !important;
				}
			}
		}

		.cart-head {
			color: #969696;

			.cart-head--title {
				flex: .25 0 0;
			}
		}


		.total {
			display: flex;
			justify-content: space-between;
			font-size: 18px;
			color: #5400cc;
			margin-top: 5px;
		}
	}

	.buyer-info {
		display: flex;
		flex-direction: row;
		margin-top: 50px;
		width: 800px;
		flex-wrap: wrap;
		justify-content: center;

		.buyer-input {
			width: 250px;
			height: 40px;
			margin: 5px;
			padding: 4px;
			outline: none;
			border-radius: 3px;
			border: 1px solid rgba(235,235,235, 1);
			font-size: 17px;
		}

		.buyer-input:focus {
			border-color: #5400cc;
		}
	}

	.button-wrap {

	}
}
</style>