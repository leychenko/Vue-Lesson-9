<template>
    <div>
        <ul class="list">
            <li class="list__item">При отримані</li>
            <li class="list__item">Переказ на карту</li>
            <li class="list__item">Записати в зошит!!! &#128512;</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'PaymentRules',
}
</script>

<style lang="scss" scoped>
.list {
	display: flex;
	flex-direction: column;
	gap: 10px;
		// .list__item
		&__item {
			font-size: 20px;
		}
}

</style>
