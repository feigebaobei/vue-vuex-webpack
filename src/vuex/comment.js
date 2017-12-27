import Vue from 'vue'
import Vuex from 'vuex'

Vue.use( Vuex )

const store = new Vuex.Store({
	state: {
		comment: [
			{
				text: '你找美国买F-22看看？动不动就J-20？',
				time: '2017-12-15 22:00',
				author: "Jeffrey_44ec45b",
				zan: 14,
				cai: 8
			},
			{
				text: '歼20大量列装不适合小巴！和小巴的国土环境有关！不过要是有那么10来架当然最好拉！',
				time: '2017-12-14 08:28',
				author: "清风到来",
				zan: 2,
				cai: 9
			}
		]
	},
	getters: {
		getcomments: state => ( state.comment )
	},
	mutations: {
		add: function ( state, payload ) {
			state.comment.unshift( payload )
		},
		zan: function ( state, payload ) {
			// console.log( payload.num )
			state.comment[ payload.num ].zan++
		},
		cai: function ( state, payload ) {
			state.comment[ payload.num ].cai++
		}
	},
	actions: {
		addcomment: function ({commit}, payload ) {
			commit('add', payload)
		},
		zan: function ( {commit}, payload ) {
			commit('zan', payload)
		},
		cai: function ( {commit}, payload ) {
			commit('cai', payload)
		}
	},
	strict: true
})

export default store
