<template>
	<div class="yule">
			<titleheader :title="title"></titleheader>
		<!-- <router-link to="/home/*"> -->
			<listarticle :imgs="imgs" v-for="i in 5" :key="i" :i="i"></listarticle>
			<div class="empty"></div>
		<!-- </router-link> -->
	</div>
</template>

<script>
	import header from './titleheader.vue'
	import list from './listarticle.vue'
	// 图片
	import yule0 from '../assets/yule0.jpg'
	import yule1 from '../assets/yule1.jpg'
	import yule2 from '../assets/yule2.jpg'
	import yule3 from '../assets/yule3.jpg'
	import yule4 from '../assets/yule4.jpg'
	export default {
		data: function () {
			return {
				title: '娱乐新闻',
				// imgs: [
				// 	{ src: '../src/assets/yule0.jpg', text: '刘徳华获颁博士学位 低头受礼谦逊儒雅' },
				// 	{ src: '../src/assets/yule1.jpg', text: '第二届澳门国际影展：霍思燕一家合体亮相 嗯哼打哈欠超抢镜' },
				// 	{ src: '../src/assets/yule2.jpg', text: '刘强东章泽天十指紧扣拍写真 恩爱的小眼神亮了！' },
				// 	{ src: '../src/assets/yule3.jpg', text: '小贝夫妇牵手秀恩爱 维多利亚罕见躲老公身后小鸟依人' },
				// 	{ src: '../src/assets/yule4.jpg', text: '46岁闫妮束腰单肩裙性感露香肩 却遭遇尴尬一幕' }
				// ]
				imgs: [
					{ src: yule0, text: '刘徳华获颁博士学位 低头受礼谦逊儒雅' },
					{ src: yule1, text: '第二届澳门国际影展：霍思燕一家合体亮相 嗯哼打哈欠超抢镜' },
					{ src: yule2, text: '刘强东章泽天十指紧扣拍写真 恩爱的小眼神亮了！' },
					{ src: yule3, text: '小贝夫妇牵手秀恩爱 维多利亚罕见躲老公身后小鸟依人' },
					{ src: yule4, text: '46岁闫妮束腰单肩裙性感露香肩 却遭遇尴尬一幕' }
				]
			}
		},
		components: {
			'titleheader': header,
			'listarticle': list
		}
	}
</script>