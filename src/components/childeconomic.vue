<template>
	<article class="listeconomic">
		<img :src="imgs[i-1].src" alt="213132" style="width:190px">
		<!-- <p>{{texts[i-1]}}</p> -->
		<!-- <p>test</p> -->
		
		<p>{{texts[i-1]}}</p>
	</article>
</template>

<script>
	export default {
		props: ['imgs','i','texts'],
		computed: {
		}
	}
</script>