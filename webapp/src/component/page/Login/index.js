import React,{Component} from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import './login.css'
  const tabs= [
    { title: '注册账号' },
    { title: '密码登录' }
  ];
class Login extends Component{
    constructor(){
        super()
        this.state= {
            data:""
        }
    }
    render(){
        return(
            <div className='login-wrap'>
                <img alt='' src='./img/V7_logo.png'/>
                <div>
                    <WhiteSpace />
                        <Tabs
                            activeTab="0"
                            tabBarActiveTextColor='#333'
                            tabBarUnderlineStyle={{transform: 'scaleX(.35) scaleY(.7)',borderColor:'red'}} 
                            tabs={tabs} 
                            initialPage={1} 
                            animated={false} 
                            useOnPan={false}>
                            <div className='reg' >
                                <input type='text' placeholder='请输入账号'/>
                                <input id='pwd' type='password' placeholder='请输入密码'/>
                                <input id='pwd2' type='password' placeholder='确认密码'/>
                                <button>立即注册</button>
                            </div>
                            <div className='login' >
                                <input type='text' id='username' placeholder='请输入账号'/>
                                <input type='password' id='password' placeholder='请输入密码'/>
                                <button>立即登录</button>
                            </div>
                        </Tabs>
                    <WhiteSpace />
                </div>
            </div>
        )
    }
}

export default Login;