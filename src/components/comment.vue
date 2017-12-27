<template>
	<div>
		<h3>最新评论</h3>
		<addcomment></addcomment>
		<showcomment></showcomment>
	</div>
</template>

<script>
	import add from './addcomment.vue'
	import show from './showcomment.vue'
	import store from '../vuex/comment.js'
	export default {
		props: [''],
		store: store,
		components: {
			'addcomment': add,
			'showcomment':  show
		}
	}
</script>