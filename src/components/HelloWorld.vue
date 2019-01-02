<template>
  <div class="wapper">
    <div class="imageWrapper" ref="imageWrapper">
      ddddd
      <slot></slot>
    </div>
    <el-button @click="shotCb">生成</el-button>
    <img class="real_pic" :src="dataURL" />
    <a :href="dataURL" class="down" download="下载">下载</a>
  </div>
</template>
<script>
  import html2canvas from 'html2canvas'
  export default {
  name: 'HelloWorld',
  data() {
    return {
        dataURL: '',

      }
    
  },
  components: {},
  methods: {
    toImage() {
  html2canvas(this.$refs.imageWrapper,{
    backgroundColor: null
  }).then((canvas) => {
    let dataURL = canvas.toDataURL("image/png");
    this.dataURL = dataURL;
    console.log(dataURL)
    window.location.href=dataURL
  });
},
 shotCb() {
    var option = {};
    event.preventDefault();
    // var width = document.body.clientWidth;
    // var height = document.body.clientHeight;
    var width =350
    var height =568
    //要将 canvas 的宽高设置成容器宽高的 2 倍
    var canvas = document.createElement("canvas");
    canvas.width = width * 2;
    canvas.height = height * 2;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    var context = canvas.getContext("2d");
    //然后将画布缩放，将图像放大两倍画到画布上
    context.scale(2, 2);
     html2canvas(this.$refs.imageWrapper,{
    backgroundColor: null,
     width: option.width || width,
        height: option.height || height,
        canvas: canvas,
  }).then((canvas) => {
    let dataURL = canvas.toDataURL("image/png");
    this.dataURL = dataURL;
    console.log(dataURL)
    // window.location.href=dataURL
  });
    // html2canvas(document.getElementById('phone-wrap'), {
    //     width: option.width || width,
    //     height: option.height || height,
    //     canvas: canvas,
    //     onrendered: function(canvas) {
    //       console.log(this.width)
    //       console.log(this.height)
    //       // return
    //         //生成base64图片数据
    //         // var dataUrl = canvas.toDataURL()
    //         var dataUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    //         window.location.href = dataUrl; // 下载图片

    //           // console.log(dataUrl)
    //         var newImg = document.createElement("img");
    //         console.log(newImg)
    //         newImg.src = dataUrl;
    //         // newImg.attr('class') = "mamammm";
    //         newImg.width = this.width;
    //         newImg.height = this.height;
    //         document.body.appendChild(newImg);
    //     }
    // });
},
    selectRow() {

    },
    handleClick(data,e){
      let detailClass="."+data.id
      // let badDom='<div class="lineBad"></div>'
    $(detailClass).parents('tr').find('td').not(".makelll").addClass('lineThoung')
      data.canWrite=false
      // console.log(e)
      // console.log($(e))
    },
    edit(data,e){
      let detailClass="."+data.id
        $(detailClass).parents('tr').find('td').removeClass('lineThoung')
      data.canWrite=true
    },
    saveBtn() {
      this.btnSaveClick=true
      // this.tableData.forEach((item, index) => {
      //   if (item.date === '') {
      //     this.tableData[index].id='bad'
      //   }else{
      //     this.tableData[index].id='bad'
      //   }
      // })
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
