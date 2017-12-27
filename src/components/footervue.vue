<template>
	<footer class="footer">
		<img src="../assets/logo.png" alt="">
		<article>
			<p>电话：15482467542</p>
			<p>地址：北京市密云区</p>
			<p>版权所有 违法必究</p>
		</article>
		<aside>
			<!-- {{position}} -->
			<!-- <div v-bind:src="bgimg.src" v-bind:class='{"footerasideimg": footerasideimg}' ></div> -->
			<!-- <div v-bind:src="bgimg.src" v-bind:class='{"footerasideimg": footerasideimg}' ></div> -->
			<!-- <footerasidebgimg v-bind:src="bgimg" v-bind:post="position[0]" v-bind:scale="scale"></footerasidebgimg>
			<footerasidebgimg v-bind:src="bgimg" v-bind:post="position[1]" v-bind:scale="scale"></footerasidebgimg>
			<footerasidebgimg v-bind:src="bgimg" v-bind:post="position[2]" v-bind:scale="scale"></footerasidebgimg>
			<footerasidebgimg v-bind:src="bgimg" v-bind:post="position[3]" v-bind:scale="scale"></footerasidebgimg>
			<footerasidebgimg v-bind:src="bgimg" v-bind:post="position[4]" v-bind:scale="scale"></footerasidebgimg> -->
			<footerasidebgimg v-for="i in 12" v-bind:key='i' v-bind:src="bgimg" v-bind:post="position[i]" v-bind:scale="scale"></footerasidebgimg>
		</aside>
	</footer>
</template>

<script>
	import img from './footerasidebgimg.vue'
	export default {
		data: function () {
			return {
				bgimg: { srcd: 'url("../src/assets/socialFooter.png") no-repeat' },
				position: [
					{ top: '0', left: '30px' },
					{ top: '0', left: '0px' },
					{ top: '0', left: '-30px' },
					{ top: '0', left: '-60px' },
					{ top: '0', left: '-90px' },
					{ top: '0', left: '-120px' },
					{ top: '0', left: '-150px' },
					{ top: '0', left: '-180px' },
					{ top: '0', left: '-210px' },
					{ top: '0', left: '-240px' },
					{ top: '0', left: '-270px' },
					{ top: '0', left: '-300px' },
					{ top: '0', left: '-330px' }
				],
				scale: { width: '30px', height: '30px' },
				'footerasideimg': true
			}
		},
		components: {
			'footerasidebgimg': img
		}
	}
</script>