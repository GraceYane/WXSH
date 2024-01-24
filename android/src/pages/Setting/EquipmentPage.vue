<template>
  <div>
    <!-- 头部开始 -->
    <van-nav-bar
        title="历史记录"
        left-text="返回"
        right-text=""
        style="background-color: #72c7e1"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
    />
    <el-main>

      <div style="margin: 10px 0">
        <div style="padding: 10px 0;text-align:left;margin-left: 10px;margin-right: 10px;height: auto; border-bottom: 1px dashed #ccc" v-for="item in tableData" :key="item.id">
          <div class="pd-10" style="display: flex; font-size: 23px;color: #e8f3eb;font-family: 宋体;  color: #181818; cursor: pointer"
               @click="$router.push({
                              name:'MethodFoundDetail',
                              params:item
        })">
            {{ item.classify }}
          </div>
          <div style="display: flex;font-size: 14px;font-family: 楷体;color: #607c85; margin-top: 10px">
            <i class="el-icon-user-solid"></i> <span>{{ item.username }}</span>
            <i class="el-icon-time" style="margin-left: 10px"></i> <span v-if="item.updateTime">{{ mySub(item.updateTime)}}</span>

          </div>
        </div>
      </div>
    </el-main>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "EquipmentPage",
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
      return time.substring(0, 20);
    },
    onClickLeft(){
      this.$router.back();
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
      url: 'http://localhost:8081/Equipment/all',
      //设置参数
      params:{
        page:1,
        pageSize:3,
        name:this.$cookies.get("username")
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