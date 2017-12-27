<template>
	<div>
		<!-- <childeconomic v-bind:img="img" v-for="i in 5" v-bind:key="i" v-bind:i="i" v-bind:texts="texts"></childeconomic> -->
		<childeconomic v-for="i in 5" :key="i" :i='i' :texts="texts" :imgs="imgs"></childeconomic>
	</div>
</template>

<script>
	import child from './childeconomic.vue'
	// 图片
	import econ2 from '../assets/econ2.jpg'
	import econ3 from '../assets/econ3.jpg'
	import econ4 from '../assets/econ4.jpg'

	export default {
		data: function () {
			return {
				imgs: [
					{ src: econ4, num: 0 },
					{ src: econ3, num: 1 },
					{ src: econ2, num: 2 },
					{ src: econ3, num: 3 },
					{ src: econ4, num: 4 }
				],
				texts: [
					'1111111111111111',
					'22222222222',
					'333333333333',
					'44444444444',
					'5555555555555'
				]
			}
		},
		components: {
			'childeconomic': child
		}
	}
</script>