<template>
<div class="app">
  <div class="left">
    <div class="img">
      <img :src="loginImg"/>
      <p>后台管理系统</p>
      <div class="form">
        <Form ref="formCustom" :model="formCustom" :rules="rules" :label-width="80">
            <FormItem label="账号:" prop="name">
                <Input type="text" v-model="formCustom.name" placeholder="请输入账户"/>
            </FormItem>
            <FormItem label="密码:" prop="passwd">
              <!-- <input type="password" style="position: absolute;left: 30000%;"/> -->
              <Input type="password" v-model="formCustom.passwd" placeholder="请输入密码"/>
            </FormItem>
            <FormItem>
              <div style="text-align: right;">
                <Button type="primary" @click="handleSubmit('formCustom')">登 录</Button>
              </div>
            </FormItem>
        </Form>
      </div>
    </div>
  </div>
</div>
</template>
<script>
/* eslint-disable */
import {post, get} from '../utils/index.js'
export default {
  data () {
    const validateAge = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入您的账号'));
      } else {
        callback();
      }
    }
    const validateAge2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入您的密码'));
      } else {
        callback();
      }
    }
    return {
      loginImg: require('../assets/img/login.png'),
      formCustom: {
        name: '',
        passwd: ''
      },
      rules: {
        name: [
            { validator: validateAge, trigger: 'blur' } //  validator: validateAge2,
        ],
        passwd: [
            { validator: validateAge2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          get('/login', this.formCustom).then(res=> {
            console.log(res)
            if (res.data.code === '0') {
              this.$Message.success('登录成功~');
            } else {
              this.$Message.error('账号或者密码有误,请检查!');
            }
          })
        } else {
          this.$Message.error('您的输入有误!');
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields();
    }
  }
}
</script>

<style lang="less" scoped>
.app {
  display: flex;
  height: 100vh;
  .left {
    position: relative;
    flex: 1;
    border-radius: 40vh 0 0 0;
    background-color: #a7c1ba;
    .img {
      width: 50%;
      max-width: 600px;
      margin: 18vh auto 0;
      img{
        width: 100%;
        margin-bottom: 2%;
      }
      p {
        margin-bottom: 6%;
        text-align: right;
        font-size: 22px;
        color: #fff;
      }
    }
  }
  .right {
    position: relative;
    background-color: #a7c1ba;
  }
  .form {
    max-width: 420px;
    margin: 0 auto;
    font-size: 16px;
  }
}
</style>
<style>
.app .ivu-form-item-label{
  font-size: 14px !important;
}
.app .ivu-form-item-content{
  font-size: 14px;
}
.app .ivu-input{
  font-size: 14px;
}
</style>


