<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <p>你的start是小编的学习的动力</p>
    <vue-pay-pwd 
    :isCursor = "isCursor"
    :pwdWidth = "300"
    :pwdHeight = "38"
    :getPassword = "payPw">
    </vue-pay-pwd>
    <h2>借助vue-cli和vue的插件功能，实现六位密码插件，主要服务于pc站点</h2>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to my vue-pay-pwd',
      isCursor:true,
    }
  },
   methods: {
    payPw(pw){
      console.log("获取支付密码",pw)
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
}

a {
  color: #42b983;
}
</style>
