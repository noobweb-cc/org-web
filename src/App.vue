<template>
  <div id="app">
    <span class="scoped">我是什么颜色</span>
    <hr>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <br>
    <br>
    <br>
    <br>
    <br>
      <div ref="editorElem"></div>
    <br>
    <br>
    <br>
    <br>
    <!-- <wangeditor :catchData="catchData"></wangeditor> -->

    <editor ref="editorRef" :catchData="catchData"></editor>
    <br>
    <el-button @click="getText" type="primary" plain>点击获取内容</el-button>

  </div>
</template>
<script>
import wangeditor from './views/try/wangeditor.vue'
import editor from './views/try/editor.vue'
export default {
  data () {
    return {
      content: ""
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    catchData(value) {
      //在这里接受子组件传过来的参数，赋值给data里的参数
      this.content = value //'<p>用 JS 设置的内容</p>'
    },
    getText () {
      console.log(this.$refs.editorRef.editorContent)
    }
  },
  components: {
    wangeditor, editor
  },
}
</script>

<style lang="less" scoped>
@import "./assets/scoped.less";
</style>
