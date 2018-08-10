<template>
	<div class='banner'>
		<imgvue></imgvue>
		<handlevue></handlevue>
		<div class="empty"></div>
	</div>
</template>

<script>
	import store from '../vuex/store.js'

	import imgvue from './imgvue.vue'
	import handlevue from './handlevue.vue'
	
	export default {
		store: store,
		data: function () {
			return {}
		},
		components: {
			'imgvue': imgvue,
			'handlevue': handlevue
		}
	}
</script>
