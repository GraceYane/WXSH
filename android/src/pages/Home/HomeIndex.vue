<template>
  <div>
    <!-- 头部开始 -->
    <div id="head">我的首页</div>
    <van-swipe style="height: 180px" class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item  v-for="item in images" :key="item">
        <img style="width: 100%;height: auto"  v-bind:src="item">
      </van-swipe-item>
    </van-swipe>
<!--    <div class="block">-->
<!--      <el-carousel height="550px">-->
<!--        <el-carousel-item v-for="item in images" :key="item">-->
<!--          <img style="width: 100%" v-bind:src="item" alt="jiazaishib">-->
<!--        </el-carousel-item>-->
<!--      </el-carousel>-->
<!--    </div>-->
    <div id="mid" style="text-align: center">
      <div >
        <img  style="width:80%;height:80%" @click="one"  src="http://p0.meituan.net/jungle/f33ed552c52b4466b6308a2c14dbc62d4882.png">
        <p style="font-size: 30%;text-align: center;">FAQ</p>
      </div>
      <div style="text-align: center" >
        <img  @click="QuestionApply()" style="width:80%;height:80%"  src="http://p0.meituan.net/jungle/6b93ee96be3df7cf2bb6e661280b047d3975.png">
        <p style="font-size: 30%;text-align: center;">用户下单</p>
      </div>
      <div  @click="FAQ" style="text-align: center" >
        <img   style="width:80%;height:80%" src="http://p1.meituan.net/jungle/d24bda7352a2af54dded09bdf532055b9416.png">
        <p style="font-size: 30%;text-align: center;">三包查询</p>
      </div>
      <div @click="weather" style="text-align: center">
        <img onclick="weather()" style="width:80%;height:80%" src="http://p1.meituan.net/jungle/b6033c2f9aa26cdf37ea24fb1346d2dc4690.png">
        <p style="font-size: 30%;text-align:center">天气查询</p>
      </div>
    </div>

    <el-main>

      <div style="margin: 10px 0">
        <div style="display: flex;padding: 10px 0;text-align:left;margin-left: 10px;margin-right: 10px;height: auto; border-bottom: 1px dashed #ccc" v-for="item in tableData" :key="item.id">•&nbsp;
          <div class="pd-10" style="display: flex; font-size: 23px;color: #e8f3eb;font-family: 宋体;  color: #181818; cursor: pointer"
               @click="$router.push({
                              name:'FAQ',
                              params:item
        })">
            {{ item.classification }}
          </div>
        </div>
      </div>
    </el-main>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "MyIndex",
  data(){
    return{
      images:[
        require("../../assets/images/home/banner4.png"),
        require("../../assets/images/home/banner5.png"),
        require("../../assets/images/home/banner6.png"),
      ],
      tableData:[

        {classification:"端口未备案放通导致业务访问不成功"},
        {classification:"Websocket协议支持问题"},
        {classification:"HTTP重定向到HTTPD问题"},
        {classification:"IPV6天窗问题解决"},
        {classification:"设备电源故障问题"},
        {classification:"设备端口故障"},
        {classification:"交换机VLAN配置问题"},
        {classification:"防火墙策略配置问题"},
      ]
    }
  },
  methods:{
    one(){
      this.$router.push({
        name:'FAQ',//name是路径的别名,相当于要跳转的路径path
      })
    },
    QuestionApply(){
      this.$router.push({
        name:'QuestionApply',//name是路径的别名,相当于要跳转的路径path
      })
    },
    FAQ(){
      this.$router.push({
        //name:'FAQ'
        name:'Equipment'
      })
    },
    weather(){
       this.$router.push({
         name:'TianQi'
       })
    }
  }
}
</script>
<style scoped>
#head {
  width: 100%;
  height: 2.906667rem;
  background-color: #72c7e1;
  border-bottom: 0.4px solid #b2b2b2;
  font-size: 1.533333rem;
  font-family: "楷体";
  text-align: center;
  line-height: 2.706667rem;
  font-weight: bold;
  color: white;
}
#mid{
  display: flex;
  justify-content: space-around;
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
