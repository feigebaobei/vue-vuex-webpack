<template>
	<div>
		<!-- home -->
		<bannervue></bannervue>
		<military></military>
		<economics></economics>
		<yule></yule>
		<footervue></footervue>
	</div>
</template>

<script>
import bannervue from './bannervue.vue'
import military from './military.vue'
import economics from './economics.vue'
import yulevue from './yulevue.vue'
import footervue from './footervue.vue'
	export default {
		data: function ( ) {
			return {

			}
		},
		components: {
			'bannervue': bannervue,
			'military': military,
			'economics': economics,
			'yule': yulevue,
			'footervue': footervue
		}
	}
</script>