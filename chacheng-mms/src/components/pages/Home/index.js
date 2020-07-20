import React,{Component} from 'react'
class Home extends Component{
    constructor(){
        super()
        this.state = {}
    }
    render(){
        return(
            <div style={{width:'100%', height:'100%' ,display:'flex',justifyContent:'center',alignItems:'center', background:'url(./home_bg.jpg) no-repeat 0 0/100% 120%'}}>
                <h2 style={{fontSize:"26px",fontWeight:'bold'}}>欢迎使用醉品茶城后台管理系统！</h2>
            </div>
        )
    }
}

export default Home