<template>
	 <div class="shop">
    <h2 class="shop__title">Список товарів :</h2>
	 <div v-for="product in getCategoryList" :key="product.name" class="shop__item" @click="onChangeCategory(product.name)">
			{{ product.title }}
	</div>
  </div>

</template>

<script>
import {mapGetters} from 'vuex';
	export default {
		name:"ShopCategory",
		computed: {
			...mapGetters(["getCategoryList",'getProductList'])
		},
		methods: {

			onChangeCategory(prodNameCategory) {
				this.$router.push({
					name:'products',
					params:{
						prodName:prodNameCategory,
					}
				})
			},
		},
	}
</script>

<style lang="scss" scoped>
.shop {
	display: flex;
	flex-direction: column;
	align-items: start;
	padding: 15px;
		// .shop__title
		&__title {
		}
		// .shop__item
		&__item {
			cursor: pointer;
			font-size: 18px;
			&:not(:last-child) {
				margin-bottom: 10px;
			}
		}
}

</style>
