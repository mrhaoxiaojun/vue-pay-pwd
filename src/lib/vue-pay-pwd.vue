<!-- 
 * author haoxiaojun
 * on 2018-05
 * des 六位密码
 * props 
 * @param {Function}（可选） getPassword 拿到一个密码参数，建议必填
 * @param {Boolean}（可选） isCursor 是否显示光标
 * @param {Number}（可选） pwdWidth 设置宽度
 * @param {Number}（可选） pwdHeight 设置高度
 * 
-->
<template>
    <div class="vue-pay-pwd">
        <input ref="pwd" type="tel" @focus="focus" @blur="blur" maxlength="6" v-model="msg" class="pwd" unselectable="on" />
        <ul class="pwd-wrap" :style="{width:pwdWidth+'px'}">
            <li 
              v-for="(item,index) in pwdAry.length=6" 
              :key="index" 
              :style="{height:pwdHeight+'px','line-height':pwdHeight+'px'}"
              :class="msg.length == index ? isBour && isCursor  ? 'psd-blink': '' :''">
              <i v-if="msg.length > index"></i>
            </li>
            <!-- 
            <li :class="msg.length == 0? isBour && isCursor  ? 'psd-blink': '' :''"><i v-if="msg.length > 0"></i></li>
            <li :class="msg.length == 1? isBour && isCursor  ? 'psd-blink': '' :''"><i v-if="msg.length > 1"></i></li>
            <li :class="msg.length == 2? isBour && isCursor  ? 'psd-blink': '' :''"><i v-if="msg.length > 2"></i></li>
            <li :class="msg.length == 3? isBour && isCursor  ? 'psd-blink': '' :''"><i v-if="msg.length > 3"></i></li>
            <li :class="msg.length == 4? isBour && isCursor  ? 'psd-blink': '' :''"><i v-if="msg.length > 4"></i></li>
            <li :class="msg.length == 5? isBour && isCursor  ? 'psd-blink': '' :''"><i v-if="msg.length > 5"></i></li> 
            -->
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'vue-pay-pwd',
        components: {},
        props:{
          getPassword: {
            type: Function,
            default: function(){
              console.log("请传入获取密码的函数")
            }
          },
          isCursor:{
            type:Boolean,
            default:true
          },
          pwdWidth:{
            type: Number,
            default:260
          },
          pwdHeight:{
            type: Number,
            default:36
          },
        },
        data() {
            return {
                msg: '',
                isBour:false,
                pwdAry:[]
            }
        },
        created() {},
        computed: {},
        watch: {
            msg(curVal) {
                if(/[^\d]/g.test(curVal)) {
                    this.msg = this.msg.replace(/[^\d]/g, '');
                }
                this.getPassword(this.msg)
            },
        },
        methods: {
            focus() {
              this.isBour = true
              // this.$refs.pwd.focus();
            },
            blur(){
              this.isBour = false
            }
        },
    }
</script>
<style lang="scss" scoped>
div,input,ul,li{
  padding:0
}
.vue-pay-pwd {
    position: relative;
    display: inline-block;
    input[type=tel] {
        position: absolute;
        left: 0px;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 999;
        width: 100%;
        color: transparent;
        cursor: pointer;
        background-color:transparent;
        border: none;
        opacity: 0;
    }
    //光标
    .psd-blink {
        display: inline-block;
        &::after{
          content: "";
          display: block;
          height: 25px;
          position: relative;
          left:5px;
          top:5px;
          width: 1px;
          background: #000
        }
    }
    .pwd-wrap {
        display: flex;
        width: 260px;
        margin: 0 auto;
        background: #fff;
        border: 1px solid #ddd;
        cursor: pointer;
        li {
            list-style-type: none;
            text-align: center;
            line-height: 36px;
            flex: 1;
            border-right: 1px solid #ddd;
            &:last-child {
                border-right: 0;
            }
            i {
                height: 10px;
                width: 10px;
                border-radius: 50%;
                background: #000;
                display: inline-block;
            }
        }
    }
}
</style>