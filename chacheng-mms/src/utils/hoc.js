import React from 'react';
import Login from '../components/pages/Login';
import {withRouter} from 'react-router-dom';

export function withUser(InnerComponent){
    class OuterComponent extends React.Component{
        constructor(){
            super();
            this.state = {};
        }

        componentDidMount(){
            let userinfo;
            try{
                userinfo = localStorage.getItem('tea_username');
                userinfo = JSON.parse(userinfo);
            }catch(err){
                userinfo = {};
            }

            this.state = {
                userinfo
            }
        }

        render(){
            return <InnerComponent {...this.state} {...this.props}></InnerComponent>
        }
    }

    return OuterComponent;
}
export function withLogin(InnerComponent){
    return class OuterComponent extends InnerComponent{
        constructor(){
            super();
            if(!this.state){
                this.state = {};
            }

            this.state.loginFlag = false;
        }

        componentDidMount(){
            super.componentDidMount();
            let user = localStorage.getItem('tea_username');
            if(user){
                this.setState({
                    loginFlag:true
                })
            }
        }

        goto = ()=>{
            this.props.history.push('/login');
        }

        render(){
            const {loginFlag} = this.state;
            if(loginFlag){
                return super.render();
            }

            return (
                <div className="hoc">
                    <h2>请先登录</h2>
                    <button onClick={this.goto}>点我 去登录</button>
                </div>
            )
        }
    }
}

export function withMmsLogin(InnerComponent){
    return class OuterComponent extends InnerComponent{
        constructor(){
            super();
            if(!this.state){
                this.state = {
                };
            }

            this.state.loginFlag = false;
            this.state.time = 3;
        }

        componentDidMount(){
            let user = localStorage.getItem('tea_mms_username');
            if(user){
                super.componentDidMount();
                this.setState({
                    loginFlag:true
                })
            }else {
                let mytimer = null;
                let {time} = this.state;
                let a = time;
                mytimer = setInterval(()=>{
                    a--;
                    this.setState({
                        time:a
                    })
                    if(a <= 0){
                        this.props.history.push('/login');
                        clearInterval(mytimer);
                    }
                },1000)
            }
        }

        goto = ()=>{
            this.props.history.push('/login');
        }

        render(){
            const {loginFlag} = this.state;
            if(loginFlag){
                return super.render();
            }

            return (
            <div className="iflogin"><p>您尚未登录，请前往登录，{this.state.time}秒后自动跳转到登录，或者你可以</p><button onClick={this.goto}>立即登录</button></div>
            )
        }
    }
}
