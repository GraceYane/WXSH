<!-- 底部导航栏-->
<template>
  <div>
    <router-view></router-view>
   <MyTabbar></MyTabbar>
  </div>
</template>

<script>
import MyTabbar from "@/components/MyTabbar";
export default {
  name: "MyIndex",
  components: {MyTabbar},
  mounted() {
    this.$router.push({
      name:'index'
    })
  }
}
</script>

<style scoped>

</style>