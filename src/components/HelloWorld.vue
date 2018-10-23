<template>
  <div class="wapper">
    <el-button @click="dia">弹窗</el-button>
    <div  ref="btn">kfnwe </div>
  </div>
</template>
<script>
import "jquery"
import '../../static/layer/layer.js'
import '../../static/layer/theme/default/layer.css'
export default {
  name: 'HelloWorld',
  data() {
    return {}
  },
  components: {},
  methods: {
    dia() {
        console.log(this.$refs.btn[0])
        this.$refs.btn.style.color="red"
      layer.open({
        type: 2 //此处以iframe举例
          ,
        title: '当你选择该窗体时，即会在最顶端',
        area: ['390px', '330px'],
        shade: 0,
        offset: [ //为了演示，随机坐标
          Math.random() * ($(window).height() - 300), Math.random() * ($(window).width() - 390)
        ],
        maxmin: true,
        content: 'settop.html',
        btn: ['继续弹出', '全部关闭'] //只是为了演示
          ,
        yes: function() {
          $(that).click(); //此处只是为了演示，实际使用可以剔除
        },
        btn2: function() {
            layer.closeAll();
          }

          ,
        zIndex: layer.zIndex //重点1
          ,
        success: function(layero) {
          layer.setTop(layero); //重点2
        }
      });
      // layer.open({
      //   type: 1 //Page层类型
      //     ,
      //   area: ['500px', '300px'],
      //   title: '你好，layer。',
      //   shade: 0 //遮罩透明度
      //     ,
      //   maxmin: true //允许全屏最小化
      //     ,
      //   anim: 1 //0-6的动画形式，-1不开启
      //     ,
      //   content: '<div style="padding:50px;">这是一个非常普通的页面层，传入了自定义的html</div>'
      // });
    }
  }
}

</script>
<style>
</style>
