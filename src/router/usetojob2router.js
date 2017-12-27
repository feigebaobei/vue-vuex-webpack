import Vue from 'vue'
import Router from 'vue-router'

import home from '../components/homevue.vue'
import page1 from '../components/page1vue.vue'
import page2 from '../components/page2vue.vue'
import page3 from '../components/page3vue.vue'
import page4 from '../components/page4vue.vue'

Vue.use( Router )

export default new Router({
	routes: [
		{
			path: '/home',
			component: home,
			child: {
				path: '/*',
				component: page1
			}
		},
		{
			path: '/page1',
			component: page1
		},
		{
			path: '/page2',
			component: page2
		},
		{
			path: '/page3',
			component: page3
		},
		{
			path: '/page4',
			component: page4
		},
		{
			path: '/*',
			component: home
		}
	]
})