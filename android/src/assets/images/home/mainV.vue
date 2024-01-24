<template>
  <div>
  <div class="block">
    <el-carousel height="550px">
      <el-carousel-item v-for="item in images" :key="item">
        <img style="width: 100%" v-bind:src="item" alt="jiazaishib">
      </el-carousel-item>
    </el-carousel>
  </div>
    <div style="display: flex;text-align: center">

      <div style="display: flex;text-align: center;width: 80%;margin: 0 auto;">
        <div style="width: 20%">
          <el-card   @click="MethodFound" :body-style="{ padding: '0px' }" shadow="hover">
            <div style="padding: 44px;">
              <el-image style="height: 60px" :src="require('../../assets/images/查询.png')" fit="fill"></el-image>
              <div class="bottom clearfix">
                <el-button @click="MethodFound" type="text" class="button">产品处理方法查询</el-button>
              </div>
            </div>
          </el-card>
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <div style="padding: 44px;">
              <el-image style="height: 60px" :src="require('../../assets/images/产品处理方法维护.png')" fit="fill"></el-image>
              <div class="bottom clearfix">
                <el-button @click="$router.push({
                   name:'MethodMaintenance'
              })" type="text" class="button">产品处理方法维护</el-button>
              </div>
            </div>
          </el-card>
        </div>
        <div style="width: 20%">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <div style="padding: 44px;">
              <el-image style="height: 60px" :src="require('../../assets/images/现场问题申请.png')" fit="fill"></el-image>
              <div class="bottom clearfix">
                <el-button type="text" class="button"
                           @click="$router.push({
                              name:'QuestionApply'
                         })"
                >
                  现场问题处理申请
                </el-button>
              </div>
            </div>
          </el-card>
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <div style="padding: 44px;">
              <el-image style="height: 60px" :src="require('../../assets/images/进度查询.png')" fit="fill"></el-image>
              <div class="bottom clearfix">
                <el-button type="text" class="button">现场问题方法查询</el-button>
              </div>
            </div>
          </el-card>
        </div>
        <div style="width: 20%">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <div style="padding: 44px;">
              <el-image style="height: 60px" :src="require('../../assets/images/增派服务人员.png')" fit="fill"></el-image>
              <div class="bottom clearfix">
                <el-button type="text" class="button"
                           @click="$router.push({
                            name:'SendStaff',//name是路径的别名,相当于要跳转的路径path
                             })"
                >指派服务人员</el-button>
              </div>
            </div>
          </el-card>
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <div style="padding: 44px;">
              <el-image style="height: 60px" :src="require('../../assets/images/服务反馈.png')" fit="fill"></el-image>

              <div class="bottom clearfix">
                <el-button
                    @click="$router.push({
                            name:'FeedBack',//name是路径的别名,相当于要跳转的路径path
                   })"
                    type="text" class="button">接受派单服务反馈</el-button>
              </div>
            </div>
          </el-card>
        </div>
        <div style="width: 20%">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <div style="padding: 44px;">
              <el-image style="height: 60px" :src="require('../../assets/images/客户FAQ.png')" fit="fill"></el-image>

              <div class="bottom clearfix">
                <el-button type="text" class="button"
                           @click="$router.push({
                            name:'ClientFAQ',//name是路径的别名,相当于要跳转的路径path
                             })"
                >客户FAQ</el-button>
              </div>
            </div>
          </el-card>
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <div style="padding: 44px;">
              <el-image style="height: 60px" :src="require('../../assets/images/售后.png')" fit="fill"></el-image>
              <div class="bottom clearfix">
                <el-button type="text" class="button"
                           @click="$router.push({
                            name:'BusinessFAQ',//name是路径的别名,相当于要跳转的路径path
                             })"
                >售后FAQ</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mainV",
  data(){
    return {
      images:[
          require("../../assets/images/banner4.png"),
          require("../../assets/images/banner5.png"),
          require("../../assets/images/banner6.png"),
      ]
    }
  },
  methods:{
    MethodFound(){
      this.$router.push({
        name:'MethodFound',//name是路径的别名,相当于要跳转的路径path
      })
    }
  }
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>