<template>
	<div class="admin">
		<div class="search-bar">
			<div class="search-input">
				<input type="text" name="" placeholder="title/category">
				<button class="search">Search</button>
			</div>
			<img src="../assets/add.png" alt="add" @click="openAddDialog">
		</div>
		<div class="products">

		</div>
		<AddProduct v-if="showAddProduct" @close="closeAddDialog"></AddProduct>
		<ModifyProduct v-if="showModifyProduct"></ModifyProduct>
	</div>
	
</template>

<script>
import AddProduct from '@/sections/AddProduct'
import ModifyProduct from '@/sections/ModifyProduct'
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
	data () {
		return {
			showAddProduct: false,
			showModifyProduct: false
		}
	},
	methods: {
		openAddDialog: function () {
			this.showAddProduct = true
			document.body.style.overflow = 'hidden'
			document.body.style.height = '100%'
		},
		closeAddDialog: function () {
			this.showAddProduct = false
			document.body.style.overflow = 'initial'
		},
		...mapActions({
      fetchProducts: 'fetchProducts',
      addProductToCart: 'addProductToCart'

    }),

	},
	created () {

	},
	components: {
		AddProduct,
		ModifyProduct
	}
}
	
</script>


<style lang="scss" scoped>


.admin {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	.search-bar {
		display: flex;
		justify-content: center;
		align-items: center;

		.search-input {
			display: flex;

			input {
				width: 350px;
				height: 36px;
				outline: none;
				font-size: 18px;
				border-color: #5044ff;
				padding: 5px;
			}

			.search {
				margin: 0; 
				border-radius: 0;
				border-left: 0;
				border-width: 2px;
				height: 36px;
				background-color: white;
				color: #5044ff;

			}

			.search:hover {
				background-color: #5044ff;
				color: white;
			}
		}

		img {
			width: 36px;
			margin-left: 20px;
			cursor: pointer;
		}
	}
}

</style>