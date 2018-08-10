<template>
	<section class="military">
		<header class="titleheader">
			<img src="../assets/logo.png" alt="logo of military">
			<span>环球军事</span>
		</header>
		<listmilitary v-for="i in 5" :key="i"></listmilitary>
		<div class="empty"></div>
	</section>
</template>

<script>
	import listmilitary from './listmilitary.vue'
	export default {
		data: function () {
			return {}
		},
		components: {
			'listmilitary': listmilitary
		}
	}
</script>