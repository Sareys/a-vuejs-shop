<template>
	<transition name="fade" tag="div">
		<div class="checkout">
			<h1>Checkout Page</h1>
			<div class="cart-list">
				<li class="cart-item" v-for="item in products">
					<img :src="`./static/images/${item.img}`" alt="img of product">
					<span>{{item.title}}</span>
					<span>{{item.price}}</span>
					<span>{{item.quantity}}</span>
				</li>
				<div class="total">
					<span>TOTAL:</span>
					<span>{{total}}</span>
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
				<button>Submit</button>
				<button>Cancel</button>
			</div>
		</div>
	</transition>
	
</template>

<script>
import {mapGetters} from 'vuex'
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
		width: 600px;

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
		}

		.total {
			display: flex;
			justify-content: space-between;
			font-size: 18px;
			color: #5400cc;
		}
	}

	.buyer-info {
		display: flex;
		flex-direction: column;
		margin-top: 50px;

		.buyer-input {
			width: 300px;
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