<template>
	<article v-bind:style="articlestyle">
		<h3>{{title}}</h3>
		<p><small>作者：{{author}}</small></p>
		<hr style="margin:0">
		<p v-for="text in texts" :style="{ order: text.order }">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{text.text}}</p>
		<p v-for="img in imgs" :style="{ order: img.order }" >
			<!-- {{img}} -->
			<img :src="img.src" alt="">
		</p>
	</article>
</template>

<script>
	export default {
		props: ['article'],
		computed: {
			title: function () { return this.article.title },
			author: function () { return this.article.author },
			texts: function () { return this.article.texts },
			imgs: function () { return this.article.imgs },
			articlestyle: function () {
				return {
					display: 'flex',
					flexDirection: 'column'
				}
			}
			// title: ( article ) => ( article.title )
			// author: ( article ) => ( article.author),
			// texts: ( article ) => ( article.texts)
		}
	}
</script>