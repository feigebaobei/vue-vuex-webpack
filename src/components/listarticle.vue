<template>
	<article>
		<img :src="imgs[i-1].src" alt="" style="width:190px">
		<!-- <p>{{imgs[i-1]}}</p> -->
		<p>{{imgs[i-1].text}}</p>
	</article>
</template>

<script>
	export default {
		props: ['imgs', 'i']
	}
</script>