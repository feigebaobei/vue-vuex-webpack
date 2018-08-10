<template>
	<div class="economics">
		<titleheader :title="title"></titleheader>
		<listeconomic></listeconomic>
		<div class="empty"></div>
	</div>
</template>

<script>
	import header from './titleheader.vue'
	import list from './listeconomic.vue'
	export default {
		data: function () {
			return {
				title: '经济前沿'
			}
		},
		components: {
			'titleheader': header,
			'listeconomic': list
		}
	}
</script>