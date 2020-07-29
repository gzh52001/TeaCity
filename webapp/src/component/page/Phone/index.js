import React from 'react';
import './phone.css';
import {put} from '../../../utils/request';
import {Toast} from 'antd-mobile';

class Phone extends React.Component{
    constructor(){
        super();
        this.state = {
            phone:''
        }
    }

    changePhone = (e)=>{
        const {phone} = this.state;
        this.setState({
            phone:e.target.value
        })
    }

    submit = async()=>{
        const {phone} = this.state;
        if(!phone){
            Toast.info('请输入正确的手机号!',2);
            return;
        }
        let getUserId = parseInt(localStorage.getItem('tea_userId'));
        console.log(getUserId);
        let change = await put(`/user/edit/${getUserId}`,{phoneNum:phone});
        if(change.flag){
            Toast.success(change.message,2);
        }else {
            Toast.fail(change.message,2)
        }
    }

    render(){
        const {phone} = this.state;
        return (
            <div className="AC_phone">
                <h2 className="AC_phone_title">绑定手机</h2>
                <input value={phone} ref={(ele)=>{
                    this.phone = ele;
                }} onChange={this.changePhone} placeholder="请输入您的手机号"></input>
                <button onClick={this.submit}>确定</button>
            </div>
        )
    }
}

export default Phone;