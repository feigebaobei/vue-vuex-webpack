<template>
	<div class="imgvue">
		<!-- <img v-bind:src="imgurl" alt="img1"> -->
		<img src="../assets/jiqiren.jpg" alt="jiqiren" v-show='img[0].show'>
		<img src="../assets/chuan.jpg" alt="jiqiren" v-show='img[1].show'>
		<img src="../assets/80hou.jpg" alt="jiqiren" v-show='img[2].show'>
		<img src="../assets/nongmin.jpg" alt="jiqiren" v-show='img[3].show'>
		<img src="../assets/nanjing.jpg" alt="jiqiren" v-show='img[4].show'>
	</div>
</template>

<script>
	// import jiqiren from '../assets/jiqiren.jpg'

	export default {
		computed: {
			imgurl: function () {
				// console.log( this.$store.state.imgurl );
				// return this.$store.state.imgurl[this.$store.state.num].url
				// return ( function ( this.$store.state.num ) {
				// 	var num = this.$store.state.num
				// 	switch ( num ) {
				// 		case 0: 
				// 			return jiqiren.src
				// 		break;
				// 		default: 
				// 		console.log('nonononon');
				// 	}
				// }) 

			},
			num: function () {
				return this.$store.state.num
			},
			img: function () {
				return this.$store.state.img
			}
		}
	}
</script>