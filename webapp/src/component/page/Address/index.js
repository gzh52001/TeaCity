import React from 'react';
import {Picker} from 'antd-mobile';
import cities from '../../../utils/address'

class Address extends React.Component{
    constructor(){
        super();
        this.state = {
            city1:'广东省',
            city2:'广州市',
            city3:'天河区',
            alldata:{},
            datalist1:[]
        }
    }
    componentDidMount(){
        this.setState({
            alldata:cities
        })
    }
    changecity1=(e)=>{
        this.setState({
            city1:e.target.value
        },()=>{
            console.log(this.state.city1)
        })
    }
    changecity2=(e)=>{
        this.setState({
            city2:e.target.value
        })
    }
    changecity3=(e)=>{
        this.setState({
            city3:e.target.value
        })
    }
    render(){
        const {city1,city2,city3} = this.state;
        return(
            <div>
                <h2>地址管理</h2>
                <select value={city1} ref={(ele)=>{
                    this.city1 = ele;
                }} onChange={this.changecity1}>
                </select>
                <select value={city2} ref={(ele)=>{
                    this.city2 = ele;
                }} onChange={this.changecity2}>
                </select>
                <select value={city3} ref={(ele)=>{
                    this.city3 = ele;
                }} onChange={this.changecity3}>
                </select>
            </div>
            
        )
    }
}

export default Address; 