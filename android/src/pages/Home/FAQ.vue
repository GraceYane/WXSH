<template>
  <div>
    <!-- 头部开始 -->
    <div @click="back" id="head">热点问题</div>
    <el-main>

      <div style="margin: 10px 0">
        <div style="display: flex;padding: 10px 0;text-align:left;margin-left: 10px;margin-right: 10px;height: auto; border-bottom: 1px dashed #ccc" v-for="item in tableData" :key="item.id">•&nbsp;
          <div class="pd-10" style="display: flex; font-size: 23px;color: #e8f3eb;font-family: 宋体;  color: #181818; cursor: pointer"
               @click="$router.push({
                              name:'MethodFoundDetail',
                              query:item,
                              params:item
        })">
            {{ item.answer }}
          </div>
        </div>
      </div>
    </el-main>
  </div>
</template>

<script>
export default {
  name: "FAQ",
  data(){
    return{
      tableData:[
        {classification:"端口未备案放通导致业务访问不成功fffffff",
          question: "端口未备案放通导致业务访问不成功",
          answer: "国内在网站这方面管理的比较严格，只要使用的是国内的服务器，上线前都需要备案，备案周期根据地方效率不同，耗时不一样。"},
        {classification:"Websocket协议支持问题",question: "Websocket协议支持问题",answer: "WebSocket 协议仅支持连接错误，建立连接交换消息，所以，需在传递层设计错误应对方案。"},
        {classification:"HTTP重定向到HTTPS问题",question: "HTTP重定向到HTTPS问题",answer: "HTTP重定向到HTTPS，URLConnection会将重定向的HTTPS以HTTP方式继续提交，那么服务端肯定是认为你是错误的提交方式；同理，HTTPS重定向HTTP也一样。"},
        {classification:"IPV6天窗问题解决",question: "IPV6天窗问题",answer: "使用IPv6转换服务后，IPv6客户端的web HTTP请求均转换到IPv4的源地址上，同时解决IPv6转换的天窗问题引起的加载缓慢、无法打开等情况。"},
        {classification:"设备电源故障问题",question: "设备电源故障问题",answer: "电源模块难以启动 首先是破坏性较小的情况。 电源模块在启动过程中难以启动，甚至无法启动。 在使用电源模块的过程中，电源模块输出端的电压可能正常。"},
        {classification:"设备端口故障",question: "设备端口故障",answer: "如果是多个接口由UP变为DOWN，则可能原因是本端或对端设备的单板故障以及对端设备状态变化，例如对端设备进行主备倒换、休眠或者重启等。"},
        {classification:"防火墙策略配置问题",question:"防火墙策略配置问题",answer:"看端口是否开放成功 firewall-cmd --list-all 或者 firewall-cmd --list-ports image.png 最后我们就可以顺利访问服务器的相关端口"},
      ]

    }
  },
  methods:{
    back(){
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