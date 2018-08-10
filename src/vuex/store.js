import Vue from 'vue'
import Vuex from 'vuex'

// import jiqiren from '../assets/jiqiren.jpg'

Vue.use( Vuex )

const store = new Vuex.Store({
	state: {
		num: 0,
		imgurl: [
			{
				num:0,
				url: '../src/assets/jiqiren.jpg',
				// url: 'jiqiren',
				// url: function ( jiqiren ) { var img = new Image(); return img.src = jiqiren },
				text: '舍得智慧讲堂丨未来要和机器抢工作？她开启一计划只为孩子不被AI取代'
			},
			{
				num:1,
				url: '../src/assets/chuan.jpg',
				text: '军情天天看丨中国新造岛神器有多牛？三年就能在南海填出一个澳门'
			},
			{
				num:2,
				url: '../src/assets/80hou.jpg',
				text: '又来了丨第一批90后已经出家算什么 第一批10后已考虑买房'
			},
			{
				num:3,
				url: '../src/assets/nongmin.jpg',
				text: '一路书香丨预告：窦文涛蒋方舟陕北赶驴放羊齐上阵'
			},
			{
				num:4,
				url: '../src/assets/nanjing.jpg',
				text: '纪录大放送丨80年前他为南京大屠杀留下这些铁证 并当庭指证日本的罪行'
			}
		],
		img: [
			{ num: 0, show: true, text: '舍得智慧讲堂丨未来要和机器抢工作？她开启一计划只为孩子不被AI取代' },
			{ num: 1, show: false, text: '军情天天看丨中国新造岛神器有多牛？三年就能在南海填出一个澳门' },
			{ num: 2, show: false, text: '又来了丨第一批90后已经出家算什么 第一批10后已考虑买房' },
			{ num: 3, show: false, text: '一路书香丨预告：窦文涛蒋方舟陕北赶驴放羊齐上阵' },
			{ num: 4, show: false, text: '纪录大放送丨80年前他为南京大屠杀留下这些铁证 并当庭指证日本的罪行' }
		]
	},
	getters: {
		geturl: state => state.imgurl.map( img => img.url ),
		gettext: state => state.imgurl.map( img => img.text )
		// getsrc: state => state.imgurl.map( img => img.url )
	},
	mutations: {
		toggleimg: function ( state, payload ) { 
			state.img.map( im => (im.show = false) )
			state.img[payload.amount].show = true
		}
	},
	actions: {
		toggleimg: function ({commit}, payload ) {
			commit('toggleimg', payload)
		}
	}
})

export default store