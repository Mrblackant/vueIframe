<template>
 <div class="">
    <!-- <div v-for="item in lists" :key="item.name"> -->
    <!-- <keep-alive> -->

  <iframe ref="mybox" class="ifa" id="myifa"  v-once scrolling=auto src="https://mubu.com/edit/3xXHBZuQ9l" frameborder="0"></iframe>
     <!-- </keep-alive> -->

  <!-- </div> -->
</div>
</template>

<script> 
export default {
  props:['list'],
  mounted(){
    // this.set()
  },
  data(){
    return{
        activeName: 'first',
        urls:'https://mubu.com/edit/3xXHBZuQ9l',

   lists:[{
    label:'CRM',
    name:'first',
    url:'https://mubu.com/edit/3xXHBZuQ9l'
   }]
    }
},
watch:{
list(){
  console.log(this.list)
  this.lists=this.list
  let d=this.list
  
  this.$refs.mybox.src= d[0].url;
  // window.getElementById("#myifa").src=d[0].url
}
},
methods:{
 handleClick(tab, event) {
        // switch(tab.label)
        //       {
        //       case 'CRM':
        //         // this.$router.push('/')
        //         // this.currentView=crm
        //         break;
        //       case '留学':
        //         // this.$router.push('/lx')
        //         // this.currentView=lx

        //         break;
        //       case '移民':
        //         // this.$router.push('/ym')
        //         // this.currentView=ym

        //         break;
        //       }
        // console.log(tab, event);
        console.log(tab.label);
      }
}
}
</script>

<style>
.ifa{
    width:100%;
height:100%;

  }
  .wapper{
     border: 1px solid red;
    border-top:none;
    position: absolute;
    top: 62px;
    left: 0;
    bottom: 0;
    right: 0;
  }
</style>