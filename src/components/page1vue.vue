<template>
	<div>
		<articlevue :article="article"></articlevue>
		<comment></comment>
		<footervue></footervue>
	</div>
</template>

<script>
	import article from './article.vue'
	import comment from './comment.vue'
	import footervue from './footervue.vue'

	import military3 from '../assets/military3.jpeg'
	import military4 from '../assets/military4.jpeg'
	import military5 from '../assets/military5.jpeg'

	export default {
		data: function () {
			return { 
				article: {
					title: "巴基斯坦求购歼20无果后，宣布一重要消息急坏印度",
					author: "小飞猪观察",
					imgs: [
						{ src: military3, order: 0 },
						{ src: military4, order: 2 },
						{ src: military5, order: 4 }
					],
					texts: [
						{
							text: 'FC-31最近各种消息不断，最引人注目的要数来自巴基斯坦方面的一个重要消息，巴基斯坦空军上将在一个会议上表示，中巴将联合研发新一代战机。这或许意味，FC-31首个国际买家诞生。',
							order: 1
						},
						{
							text: 'FC-31从首飞至今数年时间，经历坎坷，至今没有确切的买家，就是之前传闻中国海军已经为其注入资金，但是也没有得到官方的确认。就是歼-31这个称呼也是社交网络上期待，在中航工业的官网上，依旧是FC-31这个外销编号。',
							order: 1
						},
						{
							text: '这是全球第五款拥有验证机的五代战机，2017年披露的各路消息显示，FC-31已在一号机基础上进行了大改，中航工业高层在巴黎航展上也确认了该战机拥有隐身、超音速巡航等五代机明显特征，近期曝光的照片也显示，FC-31的设计和工艺都比一号机有了非常大的改进。',
							order: 1
						},
						{
							text: '而且，最大的利好消息是，FC-31指配发动机涡扇-19已经研发成功，已进入总装冲刺阶段，这意味着，FC-31不用面临歼-20当前的尴尬局面，歼-20指配的涡扇-15发动机尚未研发完成，目前只能使用涡扇-10及涡扇-10B发动机。',
							order: 3
						},
						{
							text: '虽然此前巴基斯坦方面对歼-20表现出强烈的求购意愿，但是鉴于中国已经确定歼-20位非卖品，巴方不得不重新寻找五代战机，之前巴空军并不满意FC-31，经过大改之后安装新发动机的FC-31的性能或许会给巴方带来惊喜。',
							order: 3
						},
						{
							text: '一道研发TF-X战机，但是苦于航空工业基础薄弱，技术不足，不管是自己研发还是同土耳其共同研发，都难获成功。近期《简氏》报道称巴方同波兰方面洽谈五代机合作，也被视为是一个不可能的事情。',
							order: 5
						},
						{
							text: '据外媒报道，近日，巴基斯坦空军上将在伊斯兰堡空军大学举行的一次会议上表示，巴基斯坦将和中国联合制造新一代战机，这下印度要慌了。分析认为，合作研发FC-31是唯一也是最好的选择。',
							order: 5
						}
					]
				}
			}
		},
		components: {
			'articlevue': article,
			'comment': comment,
			'footervue': footervue
		}
	}
</script>