<template>
  <div>
  <div id="head">修改密码</div>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <div style="height: 20px"></div>

    <el-form-item style="width: 80%" label="修改密码" prop="profession">
      <el-input v-model="ruleForm.password"></el-input>
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
  name:'editEngineerPhone',
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
        name: this.$route.params.name,
        sex: this.$route.params.sex,
        age: this.$route.params.age,
        phone:this.$route.params.phone,
        profession: this.$route.params.profession,
        address: this.$route.params.address,
        company:this.$route.params.company,
        username:this.$cookies.get("username"),
        password:'',
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
            url: 'http://localhost:8081/CustomerIn/edit',
            //设置参数
            data:this.ruleForm
          }).then(response => {
            console.log(response)
            if(response.data.code == 0){
              Toast("修改成功")
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