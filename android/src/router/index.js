// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
import HomeIndex from "@/pages/Home/HomeIndex";
import MyList from "@/pages/Home/MyList";
import MethodFound from "@/pages/Found/MethodFound";
import logIn from "@/pages/login/LogIn";
import MyIndex from "@/components/MyIndex";
import MySetting from "@/pages/Setting/MySetting";
import theOrder from "@/pages/theOrder/theOrder";
import QuestionApply from "@/pages/Home/QuestionApply";
import OrderDetail from "@/pages/theOrder/OrderDetail";
import FAQ from "@/pages/Home/FAQ";
import TianQi from "@/pages/Home/TianQi";
import MethodFoundDetail from "@/pages/Found/MethodFoundDetail";
import Equipment from "@/pages/Home/Equipment";
import EquipmentPage from "@/pages/Setting/EquipmentPage";
import Password from "@/pages/Setting/Password";
import ZhuCe from "@/pages/login/ZhuCe";

//创建并暴露一个路由器
export default new VueRouter({
    routes:[
        //登录
        {
            name:"login",
            path:"/login",
            component:logIn
        },
        {
            name:"zhuce",
            path:"/zhuce",
            component:ZhuCe
        },
        //现场故障问题表单申请
        {
            name:"QuestionApply",
            path:"/QuestionApply",
            component:QuestionApply
        },

        {
            name:"password",
            path:"/password",
            component:Password
        },

        {
            name:"home",
            path:"/home",
            component:MyIndex,
            //redirect:"/index",  //相当于嵌套，访问home的时候，相当于访问 home/index
            children:[
                {
                    //用户首页
                    name:"index",
                    path:"index",
                    component:HomeIndex,
                    children:[
                        {
                            name:"list",
                            path:"list",
                            component:MyList
                        },
                    ]
                },
                //查询页
                {
                    name:"MethodFound",
                    path:"MethodFound",
                    component:MethodFound,
                    children:[
                        //订单详情

                    ]
                },

                //设置页
                {
                    name:"setting",
                    path:"setting",
                    component:MySetting,
                },
                //订单查看与反馈页
                {
                    name:"order",
                    path:"order",
                    component:theOrder,
                }
            ]
        },
        //订单详情页
        {
            name:"OrderDetail",
            path:"/OrderDetail",
            component:OrderDetail
        },
        //订单详情页
        {
            name:"FAQ",
            path:"/FAQ",
            component:FAQ
        },
        //天气界面
        {
            name:"TianQi",
            path:"TianQi",
            component:TianQi
        },
        //方法查询详情
        {
            name:"MethodFoundDetail",
            path:"/MethodFoundDetail",
            component:MethodFoundDetail
        },
        //设备三包查询
        {
            name:"Equipment",
            path:"/Equipment",
            component:Equipment
        },
        //设备三包查询
        {
            name:"EquipmentPage",
            path:"/EquipmentPage",
            component:EquipmentPage
        }
    ]
})
