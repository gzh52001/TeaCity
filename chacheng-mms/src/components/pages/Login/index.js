import React, { Component } from 'react';
import {Form,Input,Button,Message} from 'element-react/next';
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
              username: '',
              password: '',
            },
            rules: {
              username: [
                { required: true, message: '请输入用户名', trigger: 'blur' },
                { validator: (rule, value, callback) => {
                  if (value === '') {
                    callback(new Error('请输入用户名'));
                  }
                } }
              ],
              password: [
                { required: true, message: '请输入密码', trigger: 'blur' },
                { validator: (rule, value, callback) => {
                  if (value === '') {
                    callback(new Error('请输入密码'));
                  }
                } }
              ],
            }
          };
    }


    onlogin = ()=>{
        const {form:{username,password}} = this.state;
        if(username === '' || password === ''){
            Message.error('请输入完整的信息');
        }else {
            if(username === 'admin' && password === '123456'){
                Message.success('登录成功');
                localStorage.setItem('tea_mms_username',username);
                console.log(this.props);
                this.props.history.push('/home');
            }else {
                Message.error('登录失败');
            }
        }
    }
      
      handleReset(e) {
        e.preventDefault();
      
        this.refs.form.resetFields();
        this.setState({
            form:{
                username:'',
                password:''
            }
        })
      }
      
      onChange(key, value) {
        this.setState({
          form: Object.assign({}, this.state.form, { [key]: value })
        });
      }

      
    render() {
        return (
            <div className="AC_login" style={{ background: 'url(./img1.jpg) no-repeat', width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, backgroundSize: '100% 100%',display:'flex',justifyContent:'center',alignItems:'center' }}>
                <Form ref="form" model={this.state.form} rules={this.state.rules} labelWidth="120" className="demo-ruleForm" style={{background:'rgba(255,255,255,0.6)',width:500,borderRadius:10,height:300,paddingTop: 40}}>
                    <h2 style={{fontFamily:'幼圆',fontWeight:'bold',fontSize:20,marginBottom:20,textAlign:'center'}}>欢迎登录醉品茶城管理系统</h2>

                    <Form.Item label="用户名" prop="username">
                        <Input type="text" value={this.state.form.username} onChange={this.onChange.bind(this, 'username')} autoComplete="off" />
                    </Form.Item>
                    <Form.Item label="密码" prop="password">
                        <Input type="password" value={this.state.form.password} onChange={this.onChange.bind(this, 'password')} autoComplete="off" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" onClick={this.onlogin}>提交</Button>
                        <Button onClick={this.handleReset.bind(this)}>重置</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default Login