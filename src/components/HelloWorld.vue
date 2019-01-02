<template>
  <div class="wapper">
    <el-button @click="testNull">测试</el-button>
  </div>
</template>
<script>
  export default {
  name: 'HelloWorld',
  data() {
    return {
    obj1:[
       {name:'lili',
       age:10,
       h:{
            m:'ml'
          }
     }],
         obj2:[
          {name:'lili',age:10,h:{
            m:'ml'
          }}
          ]
          }
      },
    
  components: {},
  methods: {
 testNull(){
console.log(this.isObjectValueEqual(this.obj1[0],this.obj2[0]))
 },
  isObjectValueEqual(a, b) {
    //取对象a和b的属性名
    var aProps = Object.keys(a);
    var bProps = Object.keys(b);
    //判断属性名的length是否一致
    if (aProps.length != bProps.length) {
        return false
    }
    //循环取出属性名，再判断属性值是否一致
    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];
        if (typeof a[propName] ==='object'||typeof b[propName] ==='object') {
          console.log( a[propName])
          if (JSON.stringify( a[propName]) !== JSON.stringify( b[propName])) {
            return false
          }
        }else  if (a[propName] !== b[propName]) {
            console.log(a[propName])
            console.log(b[propName])
            console.log(propName)
            
        return false
        }
      

    }

    return true;

}
  }
}

</script>
<style type="text/css">
.imageWrapper {
  padding: 30px;
  border: 2px solid red;
}

</style>
