<template>
   <div >

     <!-- 头部开始 -->
     <div id="head">订单查询</div>
     <div style="margin-top: 10px"></div>
     <van-pull-refresh  v-model="refreshing" @refresh="onRefresh">
       <van-list
           v-model="loading"
           :finished="finished"
           finished-text="没有更多了"
           @load="onLoad"
       >
         <van-cell v-for="(item) in tableData" :key="item"   @click="orderDetail(item)">
           <div style=" font-size: 23px;color: #181818;font-family: 宋体;">
             {{item.classification}}
<!--               <van-button  @click="orderDetail(item.row)" plain hairline type="info" size="small">查看详情</van-button>-->

             <div style="margin-right: 0px">
               <van-tag v-if="item.isDeleted==4" type="success " style="margin:auto">已解决</van-tag>
               <van-tag v-if="item.isDeleted!=4" type="primary">进行中</van-tag>
             </div>
           </div>

         </van-cell>
       </van-list>
     </van-pull-refresh>
   </div>
</template>

<script>
import axios from "axios";

export default {
  name: "theOrder",
  data(){
    return {
      list: ["123","44faf"],
      loading: false,
      finished: false,
      refreshing: false,
      tableData:"",
    };
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          //this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          //this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    orderDetail(item){
      this.$router.push({
        name:"OrderDetail",
        path:"/OrderDetail",
        params:item, //params传递参数时，必须带上name属性，否则界面可以跳转，但是参数不回传递
        query:item  //query只需要表明path便可以传递参数
      })
    }
  },
  created() {
    axios({
      //请求类型
      method: 'POST',
      //URL
      //url: 'http://localhost:8081/CustomerIn/page?page=1&pageSize=3',
      url: 'http://localhost:8081/MethodFound/getOrder',
      //设置参数
      //data:this.customer
      // params:{
      //   page:1,
      //   pageSize:3,
      //   name:this.question
      // } ,
    }).then(response => {
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