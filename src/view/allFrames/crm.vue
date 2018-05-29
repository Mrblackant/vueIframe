<template>
 <div class="wapper">
  <iframe class="ifa" scrolling=auto src="http://an888.net/dist/#/seedlist/index" frameborder="0"></iframe>
</div>
</template>

<script> 
export default {
  mounted(){
    this.set()
  },
  data(){
    return{
   
    }
},
methods:{

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