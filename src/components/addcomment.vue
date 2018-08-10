<template>
	<div>
		<form action="#">
			<textarea name="comment" id="commentnew" cols="30" rows="10" placeholder="你可以输入你想说的话……" style="width: 600px;"></textarea>
			<button @click.prevent="add">提交</button>
		</form>
	</div>
</template>

<script>
	import $ from 'jquery'
	export default {
		methods: {
			add: function () {
				let obj = {}
				obj.text = $('#commentnew').val()
				if ( obj.text === '' ) {
					alert('若要评论，请输入评论内容。')
					return
				}
				obj.time = new Date().toString()
				obj.author = 'test user'
				obj.zan = 0
				obj.cai = 0
				$('#commentnew').val('')

				this.$store.dispatch( 
					'addcomment', obj
				)
			}
		}
	}
</script>