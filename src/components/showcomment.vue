<template>
	<div>
		<div v-for="comment in comments" class="comment">
			<h5>{{comment.author}}</h5>
			<p>{{comment.text}}</p>
			<p style="float: left; color: #777;"><small>{{comment.time}}</small></p>
			<p style="float: right;">
				<button style="margin: 0 10px;" v-on:click="zan">赞：{{comment.zan}}</button>
				<button style="margin: 0 10px;" v-on:click="cai">踩：{{comment.cai}}</button>
			</p>
			<div class="empty"></div>
			<hr>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery'
	export default {
		computed: {
			// comments: (store) => (store.state.comment)
			// comments: function () {
			// 	console.log( this.$store );
			// 	return this.$store.state.comment
			// }
			comments: function () {
				return this.$store.getters.getcomments
			}
			// zan: function () {
			// 	return this.$store.getters.getcomments
			// }
			// comments: ( store ) => store.getters.getcomments
		},
		methods: {
			zan: function ( event ) {
				let comment = $(event.target).parents('.comment').eq(0)
				// let siblings = comment.parent().children()
				let index = comment.index()
				// let reindex = siblings.length - 1 - index
				// console.log( reindex );
				// let index = siblingslen - comment
				this.$store.dispatch( 'zan', { num: index } )
			},
			cai: function ( event ) {
				let index = $(event.target).parents('.comment').eq(0).index()
				this.$store.dispatch( 'cai', {num: index})
			}
		}
	}
</script>
