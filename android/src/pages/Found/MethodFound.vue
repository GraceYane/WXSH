<template>
<div>
  <!-- 头部开始 -->
   <div id="head">维修查询</div>
  <el-main>

    <div style="margin: 10px 0">
      <el-input size="small" style="width: 200px" placeholder="请输入您的问题" suffix-icon="el-icon-search" v-model="question"></el-input>
      <el-button class="ml-5" type="primary" @click="searchQuestion" size="small">搜索</el-button>
      <el-button type="warning" @click="reset" size="small">重置</el-button>
    </div>

    <div style="margin: 10px 0">
      <div style="padding: 10px 0;text-align:left;margin-left: 10px;margin-right: 10px;height: auto; border-bottom: 1px dashed #ccc" v-for="item in tableData" :key="item.id">
        <div class="pd-10" style="display: flex; font-size: 23px;color: #e8f3eb;font-family: 宋体;  color: #181818; cursor: pointer"
             @click="$router.push({
                              name:'MethodFoundDetail',
                              params:item
        })">
          {{ item.question }}路由器问题，端口配置不当问题，防火墙未开或者错开
        </div>
        <div style="display: flex;font-size: 14px;font-family: 楷体;color: #607c85; margin-top: 10px">
          <i class="el-icon-user-solid"></i> <span>{{ item.classification }}</span>
          <i class="el-icon-s-opportunity" style="margin-left: 10px"></i> <span>{{ item.score }}23</span>
          <i class="el-icon-time" style="margin-left: 10px"></i> <span v-if="item.updateTime">{{ mySub(item.updateTime)}}</span>

        </div>
      </div>
    </div>
    <el-pagination
        class="pageList"
        :page-sizes="[8]"
        :page-size="8"
        layout="total, sizes, prev, pager, next, jumper"
        :total="counts"
        :current-page.sync="page"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    ></el-pagination>
  </el-main>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: "MethodFound",
  methods:{
    searchQuestion(){
      axios({
        //请求类型
        method: 'GET',
        //URL
        //url: 'http://localhost:8081/CustomerIn/page?page=1&pageSize=3',
        url: 'http://localhost:8081/MethodFound/page',
        //设置参数
        params:{
          page:1,
          pageSize:3,
          name:this.question
        },
      }).then(response => {
        console.log(response)
        if(response.data.code == 0){
          this.tableData = response.data.data.records;
        }
      });
    },
    reset(){
      this.question = ''
      axios({
        //请求类型
        method: 'GET',
        //URL
        //url: 'http://localhost:8081/CustomerIn/page?page=1&pageSize=3',
        url: 'http://localhost:8081/MethodFound/page',
        //设置参数
        params:{
          page:1,
          pageSize:3,
          name:''
        },
      }).then(response => {
        console.log(response)
        if(response.data.code == 0){
          this.tableData = response.data.data.records;
        }
      });
    },
    mySub(time){
      //time = time.toString();
      return time.substring(0, 10);
    }
  },
  data() {

    const newVar = {
      id: '2016-05-02',
      name: '王小虎',
      sex:'男',
      age:'20',
      address: '上海市普陀区金沙江路 1518 弄',
      goods:'手机'
    };
    const item = newVar;
    return {
      tableData: Array(8).fill(item),
      searchValue:"",
      pageSize:10,
      page:'',
      question:'',//搜索框的问题查询
    }
  },
  created:function() {
    console.log('created')
    axios({
      //请求类型
      method: 'GET',
      //URL
      //url: 'http://localhost:8081/CustomerIn/page?page=1&pageSize=3',
      url: 'http://localhost:8081/MethodFound/page',
      //设置参数
      params:{
        page:1,
        pageSize:3,
        name:this.searchValue
      },
    }).then(response => {
      console.log(response)
      if(response.data.code == 0){
        this.tableData = response.data.data.records;
      }
    });
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