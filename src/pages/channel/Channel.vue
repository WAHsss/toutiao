<template>
  <div class="home-container">
    <van-nav-bar 
      class="nav-bar"
    >
      <div slot="left"><i class="msg"></i></div>
      <div slot="title"><h1 class="logo-wrap"><i class="logo"></i><i class="refesh"></i></h1></div>
      <div slot="right"><i class="search"></i></div>
    </van-nav-bar>
    <nav class="dynamic-router">
      <ul>
        <router-link 
          tag="li"
          v-for="(item,key) in showList" 
          :key= "key"
          v-text="item.text"
          active-class="active"
          :to="{ name: 'channel', params: { pageRouter: item.router }}"
          >
        </router-link>
      </ul>
    </nav>
    <transition>
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar} from "vant";
Vue.use(NavBar);

export default {
  data(){
    return{
      showList : this.$store.state.initList
    }
  }
}
</script>

<style lang="stylus" scoped>
.home-container 
  height 100%
  .nav-bar 
    background-color #d43d3d
    height .44rem
    .msg
      display inline-block
      vertical-align middle
      height .25rem
      width  .32rem
      background url("~assets/images/msg.png") no-repeat center
      background-size contain
    .search
      display inline-block
      vertical-align middle
      height .24rem
      width  .24rem
      background url("~assets/images/search.png") no-repeat center
      background-size contain
    .logo-wrap
      height .44rem
      overflow hidden
      .logo
        display inline-block
        width .83rem
        padding-left .15rem
        height .44rem
        background url("~assets/images/logo.png") no-repeat right  center
        background-size .83rem
      .refesh
        display inline-block
        width .25rem
        height .44rem
        background url("~assets/images/refresh.png") no-repeat center
        background-size .15rem
  .dynamic-router
    width 100%
    ul:first-child
      width max-content
      overflow-x scroll
      height .36rem
      font-size 0
      li
        display inline-block
        padding 0 .1rem
        margin .05rem 0 .05rem .05rem
        color #505050
        font-size .17rem
        .active
          color #f85959
</style>
