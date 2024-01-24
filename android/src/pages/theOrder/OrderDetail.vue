<template>
 <div>
   <van-nav-bar
       title="订单详情"
       style="background-color: #72c7e1"
       left-text="返回"
       right-text=""
       left-arrow
       @click-left="goBack()"
       @click-right="onClickRight"
   />
   <div>
     <div style="font-size: 30px; color: #d51212; cursor: pointer">故障问题</div>
     <div class="item">
       <div class="text">
         <div class="title">
           <div>
             <i class="el-icon-user-solid"></i>
             {{username}}</div>
           <div>
             <i class="el-icon-time" style="margin-left: 10px"></i>
             {{updatetime.substring(0,10)}}</div>
         </div>
         <div style="text-align: left" class="content">
           &nbsp;&nbsp;&nbsp;{{question}}
         </div>
       </div>
     </div>
   </div>
   <van-steps direction="vertical" :active="active">
     <van-step>
       <h3>问题已提交</h3>
       <p>{{createTime.substring(0,20)}}</p>
     </van-step>
     <van-step>
       <h3>已安排工程师</h3>
       <p v-if="active!=1">{{updatetime}}</p>
     </van-step>
     <van-step>
       <h3>工程师正在路上</h3>
       <p v-if="active==3">{{updatetime}}</p>
     </van-step>
     <van-step>
       <h3>已解决</h3>
       <p>{{updatetime}}</p>
     </van-step>
   </van-steps>
   <van-divider />
   <div v-if="active==4">
     <div>
       <van-rate  v-model="score" />
     </div>
     <div style="margin-top: 10px"> <van-button @click="feedback" round type="primary" size="small">提交评价</van-button></div>
   </div>
 </div>
</template>

<script>
import axios from "axios";

export default {
  name: "OrderDetail",
  data(){
    return{
      username:this.$route.params.username,
      answerer:this.$route.params.answerer,
      questionLevel:this.$route.params.questionLevel,
      classification: this.$route.params.classification,
      question:this.$route.params.question,
      updatetime:this.$route.params.updateTime,
      createTime:this.$route.params.createTime,
      active:this.$route.params.isDeleted,
      score:0
    }
  },
  methods:{
    goBack() {
      this.$router.back();
    },
    feedback(){
      axios({
        //请求类型
        method: 'POST',
        //URL
        //url: 'http://localhost:8081/CustomerIn/page?page=1&pageSize=3',
        url: 'http://localhost:8081/EngineerPhone/edit',
        //设置参数
        data:{
          //id:this.$route.params.id,
          username:this.answerer,
          score:this.score}
      }).then(response => {
        console.log(response)
        if(response.data.code == 0){
          alert("已解决！")
        }
      });
    }
  }
}
</script>

<style scoped>
.item {
  width: 100%;
  height: 120px;
  display: flex;
  margin-bottom: 20px;
}

.photo {
  height: 60px;
  width: 60px;
  background-color: #666;
  border-radius: 15px;
  margin-right: 20px;
}

.text {
  flex: 1;
  padding: 20px;
  background-color: #d7d7d7;
  border-radius: 15px;
}

.title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

</style>