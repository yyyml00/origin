<template>
    <div class="login-box">
        <div class="loginContainer">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="60px" class="demo-ruleForm">
            <el-form-item label="用户名:" prop="userName">
            <el-input type="text" v-model="ruleForm.userName" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码:" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
            </el-form>
        </div>


    </div>
</template>
<script>
export default {
     data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } 
      };
      var validateuserName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } 
      };
     
      return {
        ruleForm: {
          pass: '',
          userName: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          userName: [
            { validator: validateuserName, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        // this.$router.push({
        //       path:'/index'
        //     });
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style scoped>
    .login-box {
        height: 700px;
        position: relative;
        background-color: brown;

    }
    .loginContainer {
        width: 300px;
        background-color: aqua;
        -webkit-border-radius: 8px;
        -moz-border-radius: 8px;
        border-radius: 8px;
        position: absolute;
        top: 150px;
        left: 470px;
        padding: 80px 40px;
       

    }
    
</style>


