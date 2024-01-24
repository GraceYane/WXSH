<template>
<div>
  <div style="margin: 10px 0">
    <div style="padding: 10px 0;margin-left: 30px;height: 80px; border-bottom: 1px dashed #ccc" v-for="item in tableData" :key="item.id">
      <div class="pd-10" style="font-size: 20px; color: #3F5EFB; cursor: pointer"
           @click="$router.push({
                              name:'MethodFoundDetail',
                              params:item
        })">
        {{ item.question }}
      </div>
      <div style="font-size: 14px; margin-top: 10px">
        <i class="el-icon-user-solid"></i> <span>{{ item.classification }}</span>
        <i class="el-icon-s-opportunity" style="margin-left: 10px"></i> <span>{{ item.score }}</span>
        <i class="el-icon-time" style="margin-left: 10px"></i> <span>{{ item.updateTime }}2022</span>

      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "MyList",

  data(){
    const item = {
      id: '2016-05-02',
      name: '王小虎',
      sex:'男',
      age:'20',
      address: '上海市普陀区金沙江路 1518 弄',
      goods:'手机'
    };
    return{
      tableData: Array(8).fill(item),
    }
  }
}
</script>

<style scoped>

</style>