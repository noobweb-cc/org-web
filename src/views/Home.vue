<template>
<div class="app">
  <div class="left">
    <div class="img">
      <img :src="loginImg"/>
      <p>后台管理系统</p>
      <div class="form">
        <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
            <FormItem label="账号:" prop="name">
                <Input type="text" v-model="formCustom.name" number />
            </FormItem>
            <FormItem label="密码:" prop="passwd">
                <Input type="password" v-model="formCustom.passwd" />
            </FormItem>
            <FormItem label="验证码:" prop="isman">
                <Input type="password" v-model="formCustom.passwd" />
            </FormItem>
            <FormItem>
              <div style="text-align: right;">
                <Button size="lage" type="primary" @click="handleSubmit('formCustom')">登 录</Button>
              </div>  
              <!-- <Button size="lage" @click="handleReset('formCustom')" style="margin-left: 8px">重置</Button> -->
            </FormItem>
        </Form>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data () {
    const validateAge = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入您的密码'));
      } else if (value !== this.formCustom.passwd) {
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
      ruleCustom: {
        name: [
            { validator: validateAge, trigger: 'blur' }
        ],
        passwd: [
            { validator: validateAge, trigger: 'blur' }
        ],
        isman: [
            { validator: validateAge, trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!');
        } else {
          this.$Message.error('Fail!');
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


