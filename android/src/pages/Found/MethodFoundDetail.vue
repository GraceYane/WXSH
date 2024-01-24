<template>
  <div>
    <!-- 头部开始 -->
     <div id="head">方法详情</div>
    <el-main>

      <div style="color: #666;margin-left:30px;">
        <div style="margin: 20px 0; ">
          <div class="pd-10" style="font-size: 30px; color: #181818; cursor: pointer">{{ methodDetail.classification }}</div>
          <div style="font-size: 14px; margin-top: 10px;" >
          </div>
        </div>
        <el-divider></el-divider>

        <div style="display: flex;text-align: left;height: 300px">
          <div>

            <div style="font-size: 30px; color: #d51212; cursor: pointer">故障问题</div>
            <div class="item">
              <div class="text">
                <div class="title">
                  <div>
                    <i class="el-icon-user-solid"></i>
                    {{methodDetail.username}}</div>
                  <div>
                    <i class="el-icon-time" style="margin-left: 10px"></i>
                    2020-01-01</div>
                </div>
                <div class="content">
                  {{methodDetail.question}}
                </div>
              </div>
            </div>

            <el-divider></el-divider>

            <div style="font-size: 30px; color: #34ab22; cursor: pointer">解决方案</div>
            <div class="item">
              <div class="text">
                <div class="title">
                  <div>
                    <i class="el-icon-user-solid"></i>
                    {{methodDetail.answerer}}</div>
                  <div>
                    <i class="el-icon-time" style="margin-left: 10px"></i>
                    2020-01-01</div>
                </div>
                <div class="content">
                  {{methodDetail.answer}}
                </div>
              </div>
            </div>


          </div>

        </div>


        <el-divider></el-divider>


      </div>
    </el-main>
    <div style="margin-top: 70px"><van-button @click="$router.back()" round plain type="info">返回上级</van-button></div>
  </div>

</template>

<script>
export default {
  name: "MethodFoundDetail",
  data(){
    return{
      methodDetail:this.$route.params
    }
  }
}
</script>

<style scoped>
.item {
  width: 150%;
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

.content {
  text-indent: 2em;
}
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