<template>
  <!--  现场问题处理申请-->
  <div>
    <van-nav-bar
        title="维修申请"
        style="background-color: #72c7e1;font-size: 1.533333rem;font-family:楷体"
        left-text="返回"
        left-arrow
        @click-left="goBack()"
        @click-right="onClickRight"
    />

    <div style="margin-top: 30px">
      <div>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="故障等级" style="width: 60%">
            <el-select v-model="form.questionLevel" placeholder="请选择故障等级">
              <el-option label="紧急" value="1"></el-option>
              <el-option label="一般紧急" value="2"></el-option>
              <el-option label="非常紧急" value="3"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item style="width: 60%" label="申请人">
            <el-input v-model="form.username"></el-input>
          </el-form-item>

          <el-form-item style="width: 60%" label="故障分类">
            <el-input v-model="form.classification"></el-input>
          </el-form-item>

          <el-form-item style="width: 80%" label="故障描述">
            <el-input  type="textarea" v-model="form.question"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即申请</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form></div>
    </div>

  </div>


</template>

<script>
import axios from "axios";
import {Toast} from "vant";

export default {
  name: "QuestionApply",
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        classification: "",
        resource: '',
        desc: '',
        username:this.$cookies.get("username"),
        isDeleted:1,
        questionLevel:"",
      }
    }
  },
  methods: {
    onSubmit() {
      this.form.username = this.$cookies.get("username")
      console.log('submit!');
      axios({
        //请求类型
        method: 'POST',
        //URL
        //url: 'http://localhost:8081/CustomerIn/page?page=1&pageSize=3',
        url: 'http://localhost:8081/MethodFound/add',
        //设置参数
        data:this.form
      }).then(response => {
        console.log(response)
        if(response.data.code == 0){
          Toast("申请成功，请耐心等待")
          this.$router.back();
        }
      });
    },
    goBack(){
      this.$router.back();
    }
  }
}
</script>

<style scoped>

</style>