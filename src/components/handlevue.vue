<template>
	<div class="handles">
		<div class="handle" v-for="t in imgurl" transition="show" v-on:mouseenter="toggleimg">
			<p>{{t.text}}</p>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery'
	export default {
		data: function () {
			return {

			}
		},
		computed: {
			imgurl: function () {
				return this.$store.state.imgurl
			}
		},
		methods: {
			toggleimg: function ( event ) {
				let i
				if( event.target.tagName === "P" ) {
					i = $(event.target).parent().index()
				}
				if ( event.target.tagName === 'DIV' ) {
					i = $(event.target).index()
				}
				// this.$store.commit('toggleimg', {amount: i})
				this.$store.dispatch( 'toggleimg', { amount: i } )
			}
		}
	}
</script>