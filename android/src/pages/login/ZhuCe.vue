<template>
  <div>
    <!-- 头部开始 -->
    <div id="head">账户注册</div>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <div style="height: 20px"></div>

    <el-form-item style="width: 80%" label="账号" prop="name">
      <el-input v-model="ruleForm.username"></el-input>
    </el-form-item>
    <el-form-item style="width: 80%" label="密码" prop="name">
      <el-input v-model="ruleForm.password"></el-input>
    </el-form-item>

    <el-form-item style="width: 80%" label="姓名" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>

    <el-form-item style="width: 80%" label="性别" prop="sex">
      <el-select v-model="ruleForm.sex" placeholder="性别">
        <el-option label="男" value="男"></el-option>
        <el-option label="女" value="女"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item style="width: 80%" label="年龄" prop="age">
      <el-input v-model.number="ruleForm.age"></el-input>
    </el-form-item>

    <el-form-item style="width: 80%" label="手机号" prop="phone">
      <el-input v-model.number="ruleForm.phone"></el-input>
    </el-form-item>

    <el-form-item style="width: 80%" label="已购商品" prop="goods">
      <el-input v-model="ruleForm.goods"></el-input>
    </el-form-item>

    <el-form-item style="width: 80%" label="地址" prop="address">
      <el-input type="textarea" v-model="ruleForm.address"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">立即修改</el-button>
      <el-button @click="resetForm('ruleForm')">返回</el-button>
    </el-form-item>

  </el-form>

  </div>
</template>
<script>
import axios from "axios";
import {Toast} from "vant";

export default {
  name:'editCustomerIn',
  data() {
    // 手机号验证
    var checkPhone = (rule, value, callback) => {
      const phoneReg = /^1[3|4|5|6|7|8][0-9]{9}$/
      if (!value) {
        return callback(new Error('电话号码不能为空'))
      }
      setTimeout(() => {

        if (!Number.isInteger(+value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (phoneReg.test(value)) {
            callback()
          } else {
            callback(new Error('电话号码格式不正确'))
          }
        }
      }, 100)
    };
    return {
      ruleForm: {
        id:this.$route.params.id,
        name: this.$route.params.name,
        sex: this.$route.params.sex,
        age: this.$route.params.age,
        phone:this.$route.params.phone,
        goods: this.$route.params.goods,
        address: this.$route.params.address,
      },
      rules: {
        namex: [
          { required: true, message: '姓名', trigger: 'blur' },
          { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
        ],
        sex: [
          { required: true, message: '性别',  }
        ],
        age: [
          { required: true, message: '请输入年龄', trigger: 'blur' },
          { type: 'number', message: '年龄必须为数字值', trigger: 'blur' },
        ],
        phone: [
          {required: true, validator: checkPhone, trigger: 'blur' }
        ],
        goods: [
          {  required: true,message: '请输入商品'}
        ],
        address: [
          {  required: true, message: '请输入地址' }
        ],

      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios({
            //请求类型
            method: 'POST',
            //URL
            //url: 'http://localhost:8081/CustomerIn/page?page=1&pageSize=3',
            url: 'http://localhost:8081/CustomerIn/add',
            //设置参数
            data:this.ruleForm
          }).then(response => {
            console.log(response)
            if(response.data.code == 0){
              Toast("创建成功")
              this.$router.back()
            }
          });

        } else {
          alert('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.$router.back()
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
</style>