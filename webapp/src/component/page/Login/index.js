import React, { Component } from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import { get, post } from '../../../utils/request';
import ModalKuang from '../../Modal';
import './login.css'
const tabs = [
    { title: '注册账号' },
    { title: '密码登录' }
];
class Login extends Component {
    constructor() {
        super()
        this.state = {
            data: "",
            regUsername: '',
            regPassword: '',
            modaltitle: '',
            logUsername: '',
            logPassword: '',
            checkpsd: ''
        }

        this.modalFlag = false;
    }

    changeRegUsername = (event) => {
        this.setState({
            regUsername: event.target.value
        })
    }

    changeRegPassword = (event) => {
        this.setState({
            regPassword: event.target.value
        })
    }

    changeLogUsername = (event) => {
        this.setState({
            logUsername: event.target.value
        })
    }

    changeLogPassword = (event) => {
        this.setState({
            logPassword: event.target.value
        })
    }

    changeDbPsd = (event) => {
        this.setState({
            checkpsd: event.target.value
        })
    }

    modalShow = (str,fn)=>{
        this.modalFlag = true;
        this.setState({
            modaltitle:str
        },()=>{
            this.modalFlag = false;
            fn && fn();
        })
    }
    goHome = (loginHttp)=>{
        const { data: { username, userId, token } } = loginHttp;
            localStorage.setItem('tea_username', username);
            localStorage.setItem('tea_userId', userId);
            localStorage.setItem('tea_token', token);
            this.props.history.push('/home');
    }

    register = async () => {
        const { regUsername, regPassword, checkpsd } = this.state;
        this.setState({
            modalFlag: false
        })
        if (regUsername && regPassword) {
            if (checkpsd === regPassword) {
                let checkname = await get('/user/checkname', { username: regUsername });
                if (checkname.flag) {
                    let reg = await post('/user/register', { username: regUsername, userpass: regPassword });
                    if(reg.flag){
                        this.modalShow('注册成功');
                    }else {
                        this.modalShow('注册失败');
                    }
                } else {
                   this.modalShow('用户名已存在，请重新注册');
                }
            }else {
                   this.modalShow('两次密码不一致，请重新输入');
            }

        } else {
            this.modalShow('请输入完整的信息');
        }
    }

    login = async () => {
        const { logUsername, logPassword } = this.state;
        if (logUsername && logPassword) {
            let loginHttp = await get('/user/login', { username: logUsername, userpass: logPassword });
            if (loginHttp.flag) {
                this.modalShow('登录成功',this.goHome.bind(null,loginHttp));
            } else {
                this.modalShow('登录失败');
            }
        }
    }

    render() {
        const { regUsername, regPassword, modaltitle, logUsername, logPassword, checkpsd } = this.state;
        return (
            <div className='login-wrap'>
                <img alt='' src='./img/V7_logo.png' />
                <div>
                    <WhiteSpace />
                    <Tabs
                        activeTab="0"
                        tabBarActiveTextColor='#333'
                        tabBarUnderlineStyle={{ transform: 'scaleX(.35) scaleY(.7)', borderColor: 'red' }}
                        tabs={tabs}
                        initialPage={1}
                        animated={false}
                        useOnPan={false}>
                        <div className='reg' >
                            <input type='text' placeholder='请输入账号' value={regUsername} ref={(ele) => {
                                this.regUsername = ele
                            }} onChange={this.changeRegUsername} />
                            <input id='pwd' type='password' placeholder='请输入密码' value={regPassword} ref={(ele) => {
                                this.regPassword = ele;
                            }} onChange={this.changeRegPassword} />
                            <input id='pwd2' type='password' placeholder='确认密码' value={checkpsd} ref={(ele) => {
                                this.checkpsd = ele;
                            }} onChange={this.changeDbPsd} />
                            <button onClick={this.register}>立即注册</button>
                        </div>
                        <div className='login' >
                            <input type='text' id='username' placeholder='请输入账号' value={logUsername} ref={(ele) => {
                                this.logUsername = ele;
                            }} onChange={this.changeLogUsername} />
                            <input type='password' id='password' placeholder='请输入密码' value={logPassword} ref={(ele) => {
                                this.logPassword = ele;
                            }} onChange={this.changeLogPassword} />
                            <button onClick={this.login}>立即登录</button>
                        </div>
                    </Tabs>
                    <WhiteSpace />
                </div>
                {
                    this.modalFlag ? <ModalKuang modalFlag={this.modalFlag} modaltitle={modaltitle}></ModalKuang> : null
                }
            </div>
        )
    }
}

export default Login;