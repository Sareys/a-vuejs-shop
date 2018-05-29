<template>
	<div class="admin">
		<div class="search-bar">
			<div class="search-input">
				<input type="text" name="" placeholder="title" @click="search" v-model:value="searchTitle">
				<button class="search" @click="search">Search</button>
			</div>
			<img src="../assets/add.png" alt="add" @click="openAddDialog">
		</div>
		<div class="products">
			<transition-group name="card" tag="ul">
        <li v-for="product in products" :key="product.id" class="product-card"  tabindex="0" @mouseover="showButton">
          <img class="product-img" :src="`./static/images/${product.img}`" :alt="`image of ${product.title}`">
          <span class="product-title">{{product.title}}</span>
          <span class="product-price"> {{product.price | currency}}</span>
          <div class="button-master">
          	<button>Modify</button>
          	<button>Delete</button>
          </div>
        </li>
      </transition-group>
		</div>
		<AddProduct v-show="showAddProduct" @close="closeAddDialog"></AddProduct>
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
			showModifyProduct: false,
			searchTitle: 'a'
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
		search: function () {

		},
		showButton: function (el) {
			console.log(el)
		},
		...mapActions({
      fetchProducts: 'fetchProducts',
      addProductToCart: 'addProductToCart'
    }),

	},
	created () {
		this.fetchProducts().then()
	},
	computed: {
		products() {
      return this.$store.state.products.filter(el => {
      	let reg = new RegExp(this.searchTitle, 'i')
      	console.log(reg)
      	console.log(reg.test(el.title))
      	return reg.test(el.title)
      })
    },
    ...mapGetters({
      productInStock: 'productInStock'
    })
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

	.products {
		width: 100%;
		margin-top: 10px;

		ul {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			padding: 0;

			li {
				width: 250px;

				.button-master {
					position: absolute;
					background-color: black;
					opacity: .75;
					height: 100%;
					width: 100%;

					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					display: none;
				}
			}

			.product-card:hover {

			}
		}
	}
}
</style>