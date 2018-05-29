<template>
	<div class="wrap">
		<div class="dialog">
			<div class="add-product">
				<h1>Add Product</h1>
				<form class="add-form">
					<div class="form-item">
						<span>Title</span>
						<input class="form-right" type="text" name="">
					</div>
					<div class="form-item">
						<span>Price</span>
						<input class="form-right" type="" name="">
					</div>
					<div class="form-item">
						<span>Category</span>
						<input class="form-right"type="" name="">
					</div>
					<div class="form-item">
						<span>Subcategory</span>
						<input class="form-right"type="" name="">
					</div>
					<div class="form-item">
						<span>Sale</span>
						<input class="form-right"type="checkbox" name="">
					</div>
					<div class="form-item">
						<span>Inventory</span>
						<input class="form-right"type="number" name="">
					</div>
					<div class="form-item">
						<span>Description</span>
						<textarea class="form-right"></textarea>
					</div>
					<div class="form-item">
						<span>Img</span>
						<input type="file" name="">
					</div>
					<button>Add</button>
				</form>
			<span class="exit-icon" @click="closeDialog">x</span>
			</div>
		</div>
		<div @click="closeDialog" class="mask"></div>
	</div>
	
</template>

<script>
export default {
	data () {
		return {

		}
	},
	methods: {
		closeDialog: function () {
			this.$emit('close')
		}
	},
	created () {

	},
	components: {

	}
}
	
</script>

<style lang="scss" scoped>
.wrap {

	.dialog {

		.add-product {
			border-radius: 2px;
			z-index: 9999;
			width: 600px;
			height: 500px;
			background-color: white;
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			margin: auto;

			h1 {
				color: #5044ff;
			}

			.add-form {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;
				margin: 10px;

				.form-item {
					display: flex;
					width: 100%;
					margin: 8px;
					height: 30px;

					span {
						flex: .4 0 0;
						text-align: left;
						justify-content: center;
						padding-left: 60px;
						font-size: 16px;
					}

					.form-right {
						flex: .5 0 0;
						outline: none;
					}



				}
			}
		}

		.exit-icon {
			position: absolute;
			right: 0;
			top: -5px;
			font-size: 25px;
			cursor: pointer;

		}
	}

	.mask {
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: #0d0a31;
		opacity: .75;
		left: 0;
		top: 0;
		z-index: 1000;
		overflow-y: hidden;
	}


}
	
</style>