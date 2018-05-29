<template>
	<div class="wrap">
		<chooseCategory v-show="!hasCategory" @getCategory="getCategory"></chooseCategory>
		<div class="dialog" v-show="hasCategory">
			<div class="add-product">
				<h1>Add {{category}}</h1>
				<form class="add-form">
					<div class="form-item">
						<span>Title</span>
						<input class="form-right" type="text" name="">
					</div>
					<div class="form-item">
						<span>Price</span>
						<input class="form-right" type="number" name="">
					</div>
					<div class="form-item">
						<span>Category</span>
						<input class="form-right"type="" name="" :value="category" disabled="">
					</div>
					<div class="form-item">
						<span>Subcategory</span>
						<select class="form-right" name="">
							<option v-for="sub in subCategory[category]" :value="sub">{{sub}}</option>
						</select>
					</div>
					<div class="form-item">
						<span>Sale</span>
						<div class="form-right sale-input">
							<input class=""type="radio" name="sale" value="true" checked>True
							<input class=""type="radio" name="sale" value="false">False
						</div>
					</div>
					<div class="form-item">
						<span>Inventory</span>
						<input class="form-right"type="number" name="">
					</div>
					<div class="form-item">
						<span>Description</span>
						<textarea class="form-right" style="resize:none;"></textarea>
					</div>
					<div class="form-item">
						<span>Img</span>
						<input class="form-right file-input" type="file" name="">
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
import ChooseCategory from '@/sections/ChooseCategory'


export default {
	data () {
		return {
			hasCategory: false,
			category: '',
			subCategory: {
				menApparel: ['shoes', 'upper', 'lower'],
				womenApparel: ['shoes', 'upper', 'lower'],
				supplements: ['whey', 'protein bar'],
				equirement: []
			}
		}
	},
	methods: {
		closeDialog: function () {
			this.$emit('close')
			this.hasCategory = false
		},
		getCategory: function (c) {
			this.category = c
			this.hasCategory = true
			console.log('category', this.category)
		}
	},
	created () {
	},
	mounted () {
	},
	components: {
		chooseCategory: ChooseCategory
	}
}
	
</script>

<style lang="scss" scoped>
.wrap {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	z-index: 1000;

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
				text-align: center;
				margin-top: 10px;
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
						padding: 5px;
						border-radius: 2px;
						border: 1px solid rgba(203,203,203,.85);
					}

					.sale-input {
						border: none !important;
						input {
							margin-left: 35px;
						}
					}
					.file-input {
						border: none !important;
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
	}


}
	
</style>