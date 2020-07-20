import React,{Component} from 'react'
import {Table, Button,Form,DatePicker,Input,Dialog} from 'element-react/next'
import './userManage.css'
class UserManage extends Component{
    constructor(props) {
        super(props);
      
        this.state = {
            dialogVisible3: false,
            form: {
                value: '',
                region: ''
            },
            columns: [
                {
                    label: "序号",
                    prop: "id",
                    width: 70,
                    fixed: 'left',
                    align: 'center'
                },{
                    label: "用户ID",
                    prop: "userId",
                    width: 160,
                    align: 'center'
                },{
                    label: "姓名",
                    prop: "name",
                    width: 100,
                    align: 'center'
                },{
                    label: "注册时间",
                    prop: "date",
                    width: 150,
                    align: 'center'
                },{
                    label: "联系方式",
                    prop: "phone",
                    width: 160,
                    align: 'center'
                },{
                    label: "订单管理",
                    prop: "order",
                    width: 280,
                    align: 'center'
                },
                {
                    label: "地址",
                    prop: "address",
                    width: 300
                },
            ],
            data: [
                {
                    id: 1,
                    userId: 1234567,
                    name: '王小虎',
                    date: '2016-05-02',
                    phone: '1874549828',
                    order: '查看订单',
                    address: '上海市普陀区金沙江路 1518 号',
                },{
                    id: 1,
                    userId: 1234567,
                    name: '王小虎',
                    date: '2016-05-02',
                    phone: '1874549828',
                    order: '查看订单',
                    address: '上海市普陀区金沙江路 1518 号',
                }
            ]
        }
    }
        

    onSubmit(e) {
        e.preventDefault();
        
        console.log('submit!');
    }
    handleReset = (e)=> {
        e.preventDefault();
        this.setState({
            form: {}
        })
    }
      
    onChange(key, value) {
        this.setState({
            form: Object.assign(this.state.form, { [key]: value })
        });
    }

        
    render() {
        return (
        <div className='userManage'>
             <Form inline={true} model={this.state.form} onSubmit={this.onSubmit.bind(this)} className="demo-form-inline">
                <Form.Item>
                    <Input value={this.state.form.value} placeholder="请输入用户ID/姓名" onChange={this.onChange.bind(this, 'value')}></Input>
                </Form.Item>
                <Form.Item prop="date1" labelWidth="0px">
                    <DatePicker
                    value={this.state.form.date1}
                    placeholder="选择日期"
                    onChange={this.onChange.bind(this, 'date1')}
                    />
                </Form.Item>
                <Form.Item>
                    <Button nativeType="submit" type="primary">查询</Button>
                    <Button onClick={this.handleReset.bind(this)}>重置</Button>
                </Form.Item>
            </Form>
            <Table
                style={{width: '100%'}}
                columns={this.state.columns}
                data={this.state.data}
                border={true}
                maxHeight={560}
            />
        </div>

        )
    }
      
}

export default UserManage