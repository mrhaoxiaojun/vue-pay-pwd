# vue-pay-pwd

> A Vue pulgin to vue-pay-pwd

## 使用说明

小编借助vue-cli和vue的插件功能，实现六位密码插件，主要服务于pc站点

## 使用方法

``` bash
import Vue from 'vue'
import vuePayPwd from 'vue-pay-pwd'

Vue.use(vuePayPwd)
```

## 配置

```
<vue-pay-pwd 
:isCursor = "isCursor"
:pwdWidth = "300"
:pwdHeight = "38"
:getPassword = "payPw">
</vue-pay-pwd>
```

```
data () {
    return {
      msg: 'Welcome to my vue-pay-pwd',
      isCursor:true,//是否开启光标
    }
  },
   methods: {
    payPw(pw){
      console.log("获取支付密码",pw)
    }
  },
```

## Props

| name        | Description   | type     | default  | required |
| ----------- | ------------- | -------- | -------- | -------- |
| getPassword | 拿到一个密码参数，建议必填 | Function | function | 非        |
| isCursor    | 是否显示光标        | Boolean  | true     | 非        |
| pwdWidth    | 设置宽度          | Number   | 260      | 非        |
| pwdHeight   | 设置高度          | Number   | 36       | 非        |

### 

感谢您的阅读，[欢迎start](https://github.com/mrhaoxiaojun/vue-pay-pwd.git)一起学习，1458149969@qq.com