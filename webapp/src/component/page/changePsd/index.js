import React from 'react';
import './changePsd.css';
import { Toast } from 'antd-mobile';
import {get,put} from '../../../utils/request';

class ChangePsd extends React.Component {
    constructor(){
        super();
        this.state = {
            oldpsd:'',
            newpsd:'',
            dbNewPsd:'',
            psdFlag:false
        }
    }

    changeOldPsd = (e)=>{
        this.setState({
            oldpsd:e.target.value
        })
    }

    changeNewPsd = (e)=>{
        this.setState({
            newpsd:e.target.value
        })
    }

    changeDbNewPsd = (e)=>{
        this.setState({
            dbNewPsd:e.target.value
        })
    }

    blur = ()=>{
        const {newpsd,dbNewPsd} = this.state;
        if(dbNewPsd !== newpsd){
            this.setState({
                psdFlag:false
            })
            Toast.fail('两次输入密码不一致，请重新输入',1)
        }else {
            this.setState({
                psdFlag:true
            })
        }
    }

    submit = async()=>{
        const {oldpsd,newpsd,psdFlag} = this.state;
        let getUsername = localStorage.getItem('tea_username');
        let getUserId = parseInt(localStorage.getItem('tea_userId'));
        if(!psdFlag){
            Toast.fail('两次输入密码不一致，请重新输入',2);
            return;
        }else {
            let check = await get('/user/login',{username:getUsername,userpass:oldpsd});
            if(!check.flag){
                Toast.fail('校验原密码错误，请重新输入',2);
            }else {
                let change = await put(`/user/edit/${getUserId}`,{userpass:newpsd});
                if(change.flag){
                    Toast.success('修改密码成功',2);
                }else {
                    Toast.fail('修改密码失败',2);
                }
            }
        }
    }
    render() {
        const {oldpsd,newpsd,dbNewPsd} = this.state;
        return (
            <div className="AC_psd">
                <h2 className="AC_psd_title">修改密码</h2>
                <input type="password" value={oldpsd} ref={(ele) => {
                    this.oldpsd = ele
                }} onChange={this.changeOldPsd} placeholder="请输入原密码"></input>

                <input type="password" value={newpsd} ref={(ele) => {
                    this.newpsd = ele
                }} onChange={this.changeNewPsd} placeholder="请输入新密码"></input>

                <input type="password" value={dbNewPsd} ref={(ele) => {
                    this.dbNewPsd = ele
                }} onChange={this.changeDbNewPsd} placeholder="请再次输入新密码" onBlur={this.blur}></input>

                <button onClick={this.submit}>提交</button>
            </div>
        )
    }
}

export default ChangePsd;