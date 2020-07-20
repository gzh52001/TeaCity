import React from 'react';

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