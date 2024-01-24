<!-- 底部导航栏-->
<template>
   <div>
     <van-tabbar v-model="active">
       <van-tabbar-item icon="home-o" @click="goHome">首页</van-tabbar-item>
       <van-tabbar-item icon="search" @click="found()">
                 查询</van-tabbar-item>
       <van-tabbar-item @click="order()" icon="friends-o">订单</van-tabbar-item>
       <van-tabbar-item @click="setting()" icon="setting-o">设置</van-tabbar-item>
     </van-tabbar>
   </div>
</template>

<script>
export default {
  name:"MyTabbar",
  data() {
    return {
      active: 0,
    };
  },
  methods:{
    goHome(){
      this.$router.push({
        name:'index',//name是路径的别名,相当于要跳转的路径path
      })
    },
    found(){
      this.$router.push({
        name:'MethodFound',//name是路径的别名,相当于要跳转的路径path
      })
    },
    setting(){
      this.$router.push({
        name:"setting"
      })
    },
    order(){
      this.$router.push({
        name:"order"
      })
    },
  }
};
</script>

<style scoped>

</style>