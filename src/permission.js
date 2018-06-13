import router from './router'
import {constantRouterMap} from '@/router'

router.beforeEach((to, from, next) => {
	if(localStorage.getItem('new')){
			var c= JSON.parse(localStorage.getItem('new'))
				if(to.path===c.path&&from.path!==c.path){
			 	let newRoutes=constantRouterMap.concat([{path:c.path,
	       component :resolve => require(["@/components/"+c.component+""], resolve )
		        }])
			localStorage.removeItem('new')
	      router.addRoutes(newRoutes)
	       console.log()
	       window.location.href='http://'+window.location.host+'/#'+c.path
			next()

			}
	}
		next()

})
