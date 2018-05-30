<template>
	<transition name="fade" tag="div">
		<div class="checkout">
			<h1>Checkout Page</h1>
			
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

<style lang="scss" scoped></style>