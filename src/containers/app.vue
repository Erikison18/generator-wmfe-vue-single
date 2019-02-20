/*
* @Author: zhanghongqia
* @email: 991034150@qq.com
* @Date: 2018-06-10 18:27:03
* @Description: 应用程序模板入口
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2018-11-05 11:00:26
*/

<style lang="scss" scoped>
  .aitectcare {
    position: relative;
    top: 40px;
    width: 100%;
  }
  #app{
    &::-webkit-scrollbar{
      width:0px;
      height: 0px;
    } 
  }
</style>

<template>
  <div id="app">    
    <!-- 头部 -->
    <v-header v-show="isShowHeader"/> 
    <!-- 路由跳转部分 -->
   <router-view class="router_container"></router-view>
    <!-- 底部 -->
    <v-footer v-show="isShowFooter"/> 
  </div>
</template>

<script>
import { Header, Footer, BackPanel } from '@/components/common/'
export default {
  data() {
    return {
      isShowFooter: false,
      isShowHeader: false,
    }
  },
  components: {
    'v-header': Header,
    'v-footer': Footer,
    BackPanel
  },
  mounted() {
    this.isShowFooterHeader()
  },
  methods: {
    isShowFooterHeader() {
      let pathname = window.location.pathname
      let iswelcome = pathname.indexOf('welcome')
      if(iswelcome == -1) {
        this.isShowFooter = true
        this.isShowHeader = true
      }
      // 首页不显示底部，
      let ishome = pathname.indexOf('home')
      if(ishome != -1) {
        this.isShowFooter = false
        this.isShowHeader = false
      }    
      // 关于我们，联系我们，加入我们，不显示底部
      let isUs = pathname.indexOf('Us')
      if(isUs != -1) {
        this.isShowFooter = false
      }
    }
  },
  watch: {
    // 监听路由变化
    $route(to, from) {
      this.isShowFooterHeader()
      window.scrollTo(0,0)
    },
   }
}
</script>
