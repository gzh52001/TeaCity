import React,{Component}from 'react';
import { List,Modal } from 'antd-mobile';
import {withLogin} from '../../../utils/hoc';
import './mine.css'
const Item = List.Item;
class Mine extends Component{
    constructor(){
        super()
        this.state = {
            data:"",
            username:'',
            exitFlag: false
        }
        this.alert = Modal.alert;
    }

    componentDidMount(){
        let userinf = localStorage.getItem('tea_username');
        this.setState({
            username:userinf
        })
    }

    showAlert = () => {
        const alertInstance = this.alert('退出', '你确定要退出吗？', [
          { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
          { text: '退出', onPress: () =>  this.setState({exitFlag:true},this.exit()) },
        ]);
        setTimeout(() => {
          // 可以调用close方法以在外部close
          console.log('auto close');
          alertInstance.close();
        }, 500000);
      };

    exit = ()=>{
        localStorage.removeItem('tea_username');
        localStorage.removeItem('tea_token');
        localStorage.removeItem('tea_userId');
        this.props.history.push('/login');
    }

    setAddress=()=>{
        this.props.history.push('/mine/address');
    }

    render(){
        const {username} = this.state;
        return (
            <div>
                <div className='mine'>
                <div className='person-info'>
                    <div className='person-info_top'>
                        <img alt='' prop='' src='./img/head_img.png'/>
                        <div className='nfo_top_con'>
                            <h3>{username}</h3>
                            <b>
                                <span><i></i></span>
                            </b>
                            <p>
                                9&nbsp;品
                                <span>8</span>
                                <span>7</span>
                                <span>6</span>
                                <span>5</span>
                                <span>4</span>
                                <span>3</span>
                                <span>2</span>
                                <span>1</span>
                            </p>
                        </div>
                        <span>等级说明<i className="iconfont icon-wenhao"></i></span>
                    </div>
                    <div className='person-info_btm' style={{background: 'url("./img/zp_bg_hy_t.png") no-repeat 0 0/100%'}}>
                        <p>
                            <b>九品</b>
                            <span>0</span>
                            成长值
                        </p>
                        <p>
                            还需
                            <span>500</span>
                            成长值升级为八品
                            <i className="iconfont icon-youjiantou"></i>
                        </p>
                        <div className='lv'>
                            <span></span>
                        </div>
                        <img alt='' prop='' src='./img/head_img.png'/>
                    </div>
                </div>
                <div className='account-info'>
                    <span>
                        <b>168.00</b>
                        <p>账户余额(元)</p>
                    </span>
                    <span>
                        <b>50</b>
                        <p>我的积分</p>
                    </span>
                    <span>
                        <b>2</b>
                        <p>红包个数</p>
                    </span>
                </div>
                <div className='entry'>
                    <span>
                        <img alt='' prop='' src='./img/zp_img_jf.png'/>
                    </span>
                    <span>
                        <img alt='' prop='' src='./img/zp_img_qd.png'/>
                    </span>
                </div>
                <Item
                        thumb="./img/ic_me_dingdan.png"
                        arrow="horizontal"
                    >我的订单<span style={{position: "absolute",right:'12%',color:"#B1B1B1"}}>全部订单</span></Item>
                <ul className='orders-list'>
                    <li>
                        <img alt='' prop='' src='./img/ic_me_dfkdd.png'/>
                        <h4>待付款</h4>
                    </li>
                    <li>
                        <img alt='' prop='' src='./img/ic_me_dfkdd.png'/>
                        <h4>待发货</h4>
                    </li>
                    <li>
                        <img alt='' prop='' src='./img/ic_me_dfkdd.png'/>
                        <h4>待收货</h4>
                    </li>
                    <li>
                        <img alt='' prop='' src='./img/ic_me_dfkdd.png'/>
                        <h4>待评价</h4>
                    </li>
                </ul>
                <List style={{marginTop:10}} className='managements'>
                    <Item
                        thumb="./img/ic_me_tequan.png"
                        arrow="horizontal"
                    >我的特权<span style={{position: "absolute",right:'12%',color:"#B1B1B1"}}>九品&nbsp;&nbsp;会员</span></Item>
                    <Item
                        thumb="./img/ic_me_dizhi.png"
                        arrow="horizontal"
                        onClick={this.setAddress}
                    >地址管理</Item>
                    <Item
                        thumb="./img/ic_me_bdsj.png"
                        arrow="horizontal"
                    >绑定手机</Item>
                    <Item
                        thumb="./img/ic_me_xgmm.png"
                        arrow="horizontal"
                    >修改密码</Item>
                </List>
                <div className="btn" onClick={this.showAlert}>退出登录</div>
            </div>
            </div>
        )
    }
}

Mine = withLogin(Mine);
export default Mine;