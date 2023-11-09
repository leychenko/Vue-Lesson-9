<template>
	<div class="container">
		<a v-for="item in currentProduct" :key="item.name" class="block-item item" :href="item.link">
			<div class="item__img">
				<img :src="item.image" alt="">
			</div>
			<div class="item__body">
				<div class="item__title">{{item.title}}</div>
				<div class="item__price">{{item.price}} грн</div>
				<s v-if="item.oldPrice" class="item__oldPrice">{{item.oldPrice}} грн</s>
			</div>
		</a>
		<button type="button" class="button" @click="toHomePage">На головну</button>
	</div>
	
	
</template>

<script>
import {mapGetters} from 'vuex';

	export default {
		name:'ProductPage',
		data() {
			return {
				currentProduct: []
			}
		},
		computed: {
			...mapGetters(['getProductByCategory','getCategoryList']),
			prodName() {
				return this.$route.params.prodName
			}
		},
		created () {
			this.currentProduct = this.getProductByCategory(this.prodName)
		},
		methods: {
			toHomePage() {
				this.$router.push({
					name:'home'
				})
			}
		},

	}
</script>

<style lang="scss" scoped>
a{
		text-decoration: none;
	}
.block-item {
	
}
.container{
	display: grid;
	grid-template-columns: repeat(2,1fr);
	grid-template-rows: repeat(2,1fr);
	gap: 20px;
	max-width: 1000px;
	margin: 0 auto;
}
.item {
	display: flex;
	align-items: center;
	cursor: pointer;
	padding: 20px;
	max-width: 500px;
	border: 1px solid black;
	border-radius: 10px;
	gap: 20px;
	box-shadow: 0 0 2px 2px rgb(116, 116, 116);
	transition: all 0.3s ease 0s;
	@media (any-hover: hover){
		&:hover{
			transform: scale(1.02);
		}
	}
		// .item__img
		&__img {
			max-width: 40%;
			img{
				max-width: 100%;
			}
		}
		// .item__body
		&__body {
			display: flex;
			flex-direction: column;
		}
		// .item__title
		&__title {
		}
		// .item__price
		&__price {
			margin-top: 20px;
			font-size: 25px;
			color: red;
		}
		// .item__oldPrice
		&__oldPrice {
			color: rgba(128, 128, 128, 0.76);
			margin-top: 5px;
			opacity: 0.8;
		}
}
.button{
	padding: 15px 20px;
	font-size: 16px;
	font-weight: 700;
	border-radius: 10px;
	border:2px solid transparent;
	justify-self: start;
	cursor: pointer;
	transition: border 0.3s ease 0s;
	@media (any-hover: hover){
		&:hover{
			border: 2px solid green;
		}
	}
}

</style>