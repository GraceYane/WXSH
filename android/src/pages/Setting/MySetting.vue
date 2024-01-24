<template>
  <div  style="height: 900px;text-align: left ;background: rgb(239,239,239);">
    <div id="head">我的设置</div>

    <div class="head">
      <img class="avatar" src="https://i.waimai.meituan.com/static/img/default-avatar.png" alt="">
      <p class="nickname">用户个人 &gt;</p>
    </div>
    <div @click="address"  class="safe">
      <van-icon  name="location-o" style="margin-left: 15px"/>&nbsp;账号安全</div>
    <div @click="password"  class="safe">
      <van-icon name="shield-o" style="margin-left: 15px"/>&nbsp;修改密码</div>
    <div @click="equipmentPage" class="safe">
      <van-icon name="shield-o" style="margin-left: 15px"/>&nbsp;设备更换记录</div>

    <div style="height: 30px"></div>
    <div @click="about" class="safe"><van-icon name="guide-o" style="margin-left: 15px"/>&nbsp;关于平台</div>
    <div @click="feedback" class="safe"><van-icon name="envelop-o" style="margin-left: 15px"/>&nbsp;意见反馈</div>
    <div style="height: 10px"></div>

    <p class="tel">客服电话&nbsp;124-503-29</p>
    <p class="time">服务时间：&nbsp;9:00-23:00</p>

    <div  @click="login" style="margin-top: 30px;text-align: center;font-family: 华文宋体">退出当前账号</div>
  </div>
</template>

<script>
import {Toast} from "vant";

export default {
  name: "MySetting",
  data(){
    const username = this.$cookies.get("username");
    return {
      username:username
    }
  },
  methods:{
    feedback() {
    Toast('反馈邮箱：1245@geo.co')
      },
    about(){
      Toast('当前平台由xx支持')
    },
    address(){
      Toast('当前账户无风险');
    },
    login(){
      this.$router.push({
        name:"login"
      })
    },
    equipmentPage(){
      this.$router.push({
        name:"EquipmentPage"
      })
    },
    password(){
      this.$router.push({
        name:"password"
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

.safe{

  font-size: 1.14rem;

  padding-left: 0.17rem;

  border-bottom: 1px solid #E0E0E0 ;

  height: 2.65rem;

  line-height: 2.65rem;

  padding-right: 0.12rem;

  background: white;

}
.nickname {
  color: white;
  font-size: .426667rem;
  text-align: center;
  margin-top: .4rem;
}
.avatar {
  width: 1.92rem;
  height: 1.92rem;
  margin: 0 auto;
  display: block;
  border: .08rem solid rgba(255, 255, 255, .4);
  border-radius: 50%;
  margin-top: .666667rem;
}
.head {
  width: 100%;
  height: 10.266667rem;
  background-image: url(../../assets/images/img.png);
  background-size: cover;
  overflow: hidden;
}
.address::before {
  background-image: url(../../assets/images/my/address.png);
}
.tel {
  font-size: .8rem;
  color: #7ABD9A;
  text-align: center;
  line-height: 2.226667rem;
  height: 2.226667rem;
  background-color: #fff;
}

.time {
  font-size: .8rem;
  margin-top: .346667rem;
  color: #7ABD9A;
  text-align: center;
  line-height: 2.226667rem;
  height: 2.226667rem;
  background-color: #fff;
}
</style>