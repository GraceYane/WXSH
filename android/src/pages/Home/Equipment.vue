<template>
<div>
  <!-- 头部开始 -->
  <div id="head">保修服务查询</div>
  <div style="margin: 10px 0">
    <el-input size="small" style="width: 200px" placeholder="请输入设备序列号" suffix-icon="el-icon-search" v-model="question"></el-input>
    <el-button class="ml-5" type="primary" @click="searchQuestion" size="small">搜索</el-button>
    <el-button type="warning" @click="$router.back()" size="small">返回</el-button>
  </div>
  <div v-if="this.x==1" style="margin-top: 40px"><van-button @click="$router.back()" round plain type="info">返回上级</van-button></div>
  <div  style="margin-left: 40px;margin-top: 30px;  font-size: 23px;color: #e8f3eb;font-family: 宋体;  color: #181818; cursor: pointer"  v-if="x!=1">
    <div style="display: flex;" v-if="equ.createTime">
      生产时间：{{equ.createTime.substring(0,10)}}
    </div>
    <div v-if="equ.createTime" style="display: flex;" >
      保质期：{{equ.time}}
    </div>
    <div v-if="equ.createTime" style="display: flex;" >
      设备类型：{{equ.classify}}
    </div>
    <div v-if="equ.createTime" style="display: flex;" >
      用户账号：{{equ.username}}
    </div>
    <div v-if="equ.createTime" style="margin-top: 40px"><van-button @click="$router.back()" round plain type="info">返回上级</van-button></div>

  </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "MyEquipment",
  data(){
    return{
      x:'',
      question:'', //设备号
      equ:'',
    }
  },
  methods:{
    searchQuestion(){
      this.x = 2
      axios({
        //请求类型
        method: 'GET',
        //URL
        //url: 'http://localhost:8081/CustomerIn/page?page=1&pageSize=3',
        url: 'http://localhost:8081/Equipment/page',
        //设置参数
        params:{
          page:1,
          pageSize:3,
          equipmentid:this.question
        },
      }).then(response => {
        console.log(response)
        if(response.data.code == 0){
          this.equ = response.data.data.records[0];
        }
      });
    },
    reset(){
      this.question = ''
    },
  },
  create:function (){
    this.x = 1
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
</style>