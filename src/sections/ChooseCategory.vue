<template>
	<div class="choose">
		<div class="box">
			<li v-for="c in categories" :key="c" @click="getCategory">
				<div>{{c}}</div>
			</li>
		</div>
	</div>
	
</template>

<script>
export default {
	data () {
		return {
			categories: ['menApparel', 'womenApparel', 'supplements', 'equipment']
		}
	},
	methods: {
		getCategory: function (node) {
			this.$emit('getCategory', node.target.innerText)
		}
	}
}
	
</script>

<style scoped lang="scss">
.choose {
	position: absolute;
	z-index: 9999;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	width:300px;
	height: 400px;

	.box {
		background-color: white;
		width: 300px;
		height: 400px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border-radius: 5px;
		margin-top: -33px;


		li {
			width: 300px;
			font-size: 30px;
			border-bottom: 1px solid;
			list-style-type: none;
			flex: .25 0 0;
			display: flex;
			flex-direction: column;
			justify-content:center;
			cursor: pointer;
		}

		li:hover {
			background-color: #5044ff;
			color: white;
		}

	}
}
	
</style>