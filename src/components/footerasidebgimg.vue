<template>
	<div v-bind:style="bg"></div>
</template>

<script>
	export default {
		props: ['src','post', 'scale'],
		computed: {
			bgi: function () {
				return this.src
			},
			bg: function () {
				return {
					background: this.src.srcd,
					backgroundPosition: this.post.left + ' ' + this.post.top,
					width: this.scale.width,
					height: this.scale.height,
					margin: "10px 7px"
				}
			},
			bg2: function () {
				return {
					background: 'red url("../src/assets/socialFooter.png") no-repeat',
					width: '30px',
					height: '30px',
					backgroundPosition: '0px 5px'
				}
			}
		}
	}
</script>