<template>
  <div id="login">
    <div style="margin-top: 200px;">
      <div style="font-size: 40px;font-family: 楷体">欢迎登录</div>
      <van-form @submit="onSubmit" style="margin: auto;margin-top: 10px;width: 80%;background-color:transparent;" >
        <van-field
            style="background-color:transparent;font-size: 20px"
            v-model="customer.username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
            style="background-color:transparent;font-size: 20px"
            v-model="customer.password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <van-button @click="login" round block type="info" native-type="submit">登录</van-button>
        </div>
        <div style="margin: 16px;">
          <van-button @click="zhuce" round block  native-type="submit">注册</van-button>
        </div>
      </van-form>


    </div>
  </div>
</template>

<script>
import axios from "axios";
import {Toast} from "vant";

export default {
  name: "LogIn",
  data(){
    return {
      customer:{
        username:"",
        password:"",
      }
    }
  },
  methods:{
    zhuce(){
      this.$router.push({
        name:"zhuce"
      })
    },
    login(){
      axios({
        //请求类型
        method: 'POST',
        //URL
        //url: 'http://localhost:8081/CustomerIn/page?page=1&pageSize=3',
        url: 'http://localhost:8081/CustomerIn/login',
        //设置参数
        data:this.customer
        // params:{
        //   page:1,
        //   pageSize:3,
        //   name:this.question
        // } ,
      }).then(response => {
        console.log(response)
        if(response.data.code == 0){
          this.$cookies.set("username",this.customer.username)
          this.$cookies.set("userid",this.customer.id)
          this.$router.push("home")
          Toast("登录成功")
        }else {
          Toast("账号或密码错误")
        }
      });
    }
  }
}
</script>

<style scoped>
#login {
  background: url("../../assets/images/loginu.jpg") no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}
</style>