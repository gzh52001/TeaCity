import React,{Component} from 'react'
import {withMmsLogin} from '../../../utils/hoc';
class Home extends Component{
    constructor(){
        super()
        this.state = {}
    }
    componentDidMount(){}
    render(){
        return(
            <div style={{width:'100%', height:'100%' ,display:'flex',justifyContent:'center',alignItems:'center', background:'url(./img/home_bg.jpg) no-repeat 0 0/100% 120%'}}>
                <h2 style={{fontSize:"26px",fontWeight:'bold'}}>欢迎使用醉品茶城后台管理系统！</h2>
            </div>
        )
    }
}

Home = withMmsLogin(Home);
export default Home