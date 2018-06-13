import router from './router'
import {constantRouterMap} from '@/router'
 function getStr(str, cutStr) {

var str_last = str.lastIndexOf(cutStr);

var str_before = str.substring(0, str_last);

//console.log(str_before);

return str_before

}


    
router.beforeEach((to, from, next) => {
	if(localStorage.getItem('new')){
			var c= JSON.parse(localStorage.getItem('new'))
				if(to.path===c.path&&from.path!==c.path){
			 	let newRoutes=constantRouterMap.concat([{path:c.path,
	       component :resolve => require(["@/components/"+c.component+""], resolve )
		        }])
			localStorage.removeItem('new')
	      router.addRoutes(newRoutes)
	       let hr=window.location.href
	       hr =getStr(hr, "/")
	       console.log(hr)
	       // +c.path
	       //  var ab =hr.lastIndexOf('//')
	       // hr= replaceChat(hr,ab,"/")
	       // console.log(hr)
	       //  console.log(ab)
	       // var b = hr.substring(a.lastIndexOf('//'))
	       // hr =hr.replace('//','/')
	       window.location.href=hr+c.path
			next()

			}
	}
		next()

})
