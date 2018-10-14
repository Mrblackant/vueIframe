<template>
  <div class="wapper">
    <template v-if="makeBox.length>0">
      <!--  <vue-draggable-resizable class="box"  v-for="item in makeBox" >
  <p>You can drag me around and resize me as you wish.</p>
</vue-draggable-resizable> -->
      <div v-for="item in makeBox" :style="{top:item.top+'px'}" class="box"></div>
    </template>
    <el-button @click="handleUser($event)" @mousemove='updateXY' size="small" type="primary" plain>回访</el-button>
    <br/>
    <br/>
    <br/>
    <el-button @click="handleUser($event)" @mousemove='updateXY' size="small" type="primary" plain>回访</el-button>
    <el-button @click="handleUser($event)" @mousemove='updateXY' size="small" type="primary" plain>回访</el-button>
    <br/>
    <br/>
    <br/>
    <el-button @click="handleUser($event)" @mousemove='updateXY' size="small" type="primary" plain>回访</el-button>
    <br/>
    <br/>
    <br/>
    <el-button @click="handleUser($event)" @mousemove='updateXY' size="small" type="primary" plain>回访</el-button>
    <br/>
    <br/>
    <br/>
    <el-button @click="handleUser($event)" @mousemove='updateXY' size="small" type="primary" plain>回访</el-button>
    <br/>
    <br/>
    <br/>
    <el-button @click="handleUser($event)" @mousemove='updateXY' size="small" type="primary" plain>回访</el-button>
    <br/>
    <br/>
    <br/>
    <el-button @click="handleUser($event)" @mousemove='updateXY' size="small" type="primary" plain>回访</el-button>
    <br/>
    <br/>
    <br/>
    <el-button @click="handleUser($event)" @mousemove='updateXY' size="small" type="primary" plain>回访</el-button>
    <br/>
    <br/>
    <br/>
    <el-button @click="handleUser($event)" @mousemove='updateXY' size="small" type="primary" plain>回访</el-button>
    <br/>
    <br/>
    <br/>
    <el-button @click="handleUser($event)" @mousemove='updateXY' size="small" type="primary" plain>回访</el-button>
    <br/>
    <br/>
    <br/>
    <el-button @click="handleUser($event)" @mousemove='updateXY' size="small" type="primary" plain>回访</el-button>
    <br/>
    <br/>
    <br/>
    <el-button @click="handleUser($event)" @mousemove='updateXY' size="small" type="primary" plain>回访</el-button>
    <br/>
    <br/>
    <br/>
    <el-button @click="handleUser($event)" @mousemove='updateXY' size="small" type="primary" plain>回访</el-button>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <el-button @click="handleUser($event)" @mousemove='updateXY' size="small" type="primary" plain>回访</el-button>
    <br/>
    <br/>
    <br/>
    <el-button @click="handleUser($event)" @mousemove='updateXY' size="small" type="primary" plain>回访</el-button>
    <br/>
    <br/>
    <br/>
    <el-button @click="handleUser($event)" @mousemove='updateXY' size="small" type="primary" plain>回访</el-button>
    <br/>
    <br/>
    <br/>
    <el-button @click="handleUser($event)" @mousemove='updateXY' size="small" type="primary" plain>回访</el-button>
    <br/>
    <br/>
    <br/>
    <el-button @click="handleUser($event)" @mousemove='updateXY' size="small" type="primary" plain>回访</el-button>
    <br/>
    <br/>
    <br/>
    <el-button @click="handleUser($event)" @mousemove='updateXY' size="small" type="primary" plain>回访</el-button>
    <br/>
    <br/>
    <br/>
    <el-button @click="handleUser($event)" @mousemove='updateXY' size="small" type="primary" plain>回访</el-button>
    <br/>
    <br/>
    <br/>
    <el-button @click="handleUser($event)" @mousemove='updateXY' size="small" type="primary" plain>回访</el-button>
    <br/>
    <br/>
    <br/>
    <el-button @click="handleUser($event)" @mousemove='updateXY' size="small" type="primary" plain>回访</el-button>
    <br/>
    <br/>
    <br/>
    <el-button @click="handleUser($event)" @mousemove='updateXY' size="small" type="primary" plain>回访</el-button>
    <br/>
    <br/>
    <br/>
    <el-button @click="handleUser($event)" @mousemove='updateXY' size="small" type="primary" plain>回访</el-button>
    <br/>
    <br/>
    <br/>
    <el-button @click="handleUser($event)" @mousemove='updateXY' size="small" type="primary" plain>回访</el-button>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <el-button @click="handleUser($event)" @mousemove='updateXY' size="small" type="primary" plain>回访</el-button>
    <br/>
    <br/>
    <br/>
    <el-button @click="handleUser($event)" @mousemove='updateXY' size="small" type="primary" plain>回访</el-button>
    <br/>
    <br/>
    <br/>
    <el-button @click="handleUser($event)" @mousemove='updateXY' size="small" type="primary" plain>回访</el-button>
    <br/>
    <br/>
    <br/>
    <el-button @click="handleUser($event)" @mousemove='updateXY' size="small" type="primary" plain>回访</el-button>
    <br/>
    <br/>
    <br/>
    <el-button @click="handleUser($event)" @mousemove='updateXY' size="small" type="primary" plain>回访</el-button>
    <br/>
    <br/>
    <br/>
    <el-button @click="handleUser($event)" @mousemove='updateXY' size="small" type="primary" plain>回访</el-button>
    <br/>
    <br/>
    <br/>
    <el-button @click="handleUser($event)" @mousemove='updateXY' size="small" type="primary" plain>回访</el-button>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <el-button @click="handleUser($event)" @mousemove='updateXY' size="small" type="primary" plain>回访</el-button>
    <br/>
    <br/>
    <br/>
    <el-button @click="handleUser($event)" @mousemove='updateXY' size="small" type="primary" plain>回访</el-button>
    <br/>
    <br/>
    <br/>
    <el-button @click="handleUser($event)" @mousemove='updateXY' size="small" type="primary" plain>回访</el-button>
    <br/>
    <br/>
    <br/>
    <el-button @click="handleUser($event)" @mousemove='updateXY' size="small" type="primary" plain>回访</el-button>
    <br/>
    <br/>
    <br/>
    <el-button @click="handleUser($event)" @mousemove='updateXY' size="small" type="primary" plain>回访</el-button>
    <br/>
    <br/>
    <br/>
    <el-button @click="handleUser($event)" @mousemove='updateXY' size="small" type="primary" plain>回访</el-button>
    <br/>
    <br/>
    <br/>
    <el-button @click="handleUser($event)" @mousemove='updateXY' size="small" type="primary" plain>回访</el-button>
    <br/>
    <br/>
    <br/>
  </div>
</template>
<script>
import VueDraggableResizable from 'vue-draggable-resizable'

export default {
  data: function() {
    return {
      width: 0,
      makeBox: [],
      // calclass: 'cancel',
      height: 0,
      x: 0,
      y: 0
    }
  },
  methods: {
    handleUser(event) {
      console.log(event)
      let c = document.body.offsetHeight
      let b = document.body.scrollHeight
      console.log(c);
      console.log(b);
      let d = event.screenY
      let cd = c/10
      this.makeBox.push({ top:cd})

    },
    updateXY: function(event) {
      console.log(event.offsetX)
      console.log(event.offsetY)
    },
    onResize: function(x, y, width, height) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
    },
    onDrag: function(x, y) {
      this.x = x
      this.y = y
    }
  }
}

</script>
<style type="text/css">
.noooo {
  padding: 20px;
  border: 1px solid red;
}

.wapper {
  overflow: auto;
  height: 2000px;
}

#app>div>div.vdr.box,
.box {
  width: 200px;
  height: 400px;
  position: fixed;
  top: 200px;
  border: 1px solid red;
  position: absolute;
}

</style>
