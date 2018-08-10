<template>
	<nav class="nav">
		<ul>
			<li v-for="nav in navs">
				{{nav.text}}
				<router-link to='/home'>home</router-link>
				<router-link to='/page1'>page1</router-link>
				<router-link to='/page2'>page2</router-link>
				<router-link to='/page3'>page3</router-link>
				<router-link to='/page4'>page4</router-link>
			</li>
			<div class="empty"></div>
		</ul>
	</nav>
</template>

<script>
	export default {
		data: function () {
			return {
				navs: [
					{ text: '导航0' },
					{ text: '导航1' },
					{ text: '导航2' },
					{ text: '导航3' },
					{ text: '导航4' },
					{ text: '导航5' },
					{ text: '导航6' },
				]
			}
		}
	}
</script>