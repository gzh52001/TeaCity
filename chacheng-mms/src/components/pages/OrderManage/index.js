import React,{Component} from 'react'
import {Table, Button,Form,DatePicker,Input} from 'element-react/next'
// import './OrderManage.css'
class OrderManage extends Component{
    constructor(props) {
        super(props);
      
        this.state = {
            form: {
                orderId: '',
                data:'',
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
                    label: "订单号",
                    prop: "orderId",
                    width: 160,
                    align: 'center'
                },
                {
                    label: "商品名称",
                    prop: "goodsName",
                    width: 160,
                    align: 'center'
                },{
                    label: "单价/元",
                    prop: "unitPrice",
                    width: 90,
                    align: 'center'
                },{
                    label: "数量",
                    prop: "num",
                    width: 90,
                    align: 'center'
                },{
                    label: "总价",
                    prop: "totalPrice",
                    width: 90,
                    align: 'center'
                },{
                    label: "下单时间",
                    prop: "date",
                    width: 150,
                    align: 'center'
                },
                {
                    label: "地址",
                    prop: "address",
                    width: 300
                }
            ],
            data: [
                {
                    id: 1,
                    userId: 1234567,
                    orderId: 2314123412312,
                    goodsName: '哇哈哈',
                    name: '王小虎',
                    unitPrice: 125.00,
                    num: 10,
                    totalPrice: 1250.00,
                    date: '2016-05-02',
                    address: '上海市普陀区金沙江路 1518 号',
                },{
                    id: 1,
                    userId: 1234567,
                    orderId: 2314123412312,
                    goodsName: '哇哈哈',
                    name: '王小虎',
                    unitPrice: 125.00,
                    num: 10,
                    totalPrice: 1250.00,
                    date: '2016-05-02',
                    address: '上海市普陀区金沙江路 1518 号',
                },{
                    id: 1,
                    userId: 1234567,
                    orderId: 2314123412312,
                    goodsName: '哇哈哈',
                    name: '王小虎',
                    unitPrice: 125.00,
                    num: 10,
                    totalPrice: 1250.00,
                    date: '2016-05-02',
                    address: '上海市普陀区金沙江路 1518 号',
                },{
                    id: 1,
                    userId: 1234567,
                    orderId: 2314123412312,
                    goodsName: '哇哈哈',
                    name: '王小虎',
                    unitPrice: 125.00,
                    num: 10,
                    totalPrice: 1250.00,
                    date: '2016-05-02',
                    address: '上海市普陀区金沙江路 1518 号',
                },
            ]
        }
    }
        

    onSubmit(e) {
        e.preventDefault();
        
        console.log('submit!');
    }
      
    onChange(key, value) {
        this.setState({
            form: Object.assign(this.state.form, { [key]: value })
        });
    }
    handleReset = (e)=> {
        e.preventDefault();
        this.setState({
            form: {}
        })
    }
        
    render() {
        return (
        <div className='OrderManage'>
             <Form inline={true} model={this.state.form} onSubmit={this.onSubmit.bind(this)} className="demo-form-inline">
                <Form.Item>
                    <Input value={this.state.form.orderId} placeholder="请输入用户ID/订单号" onChange={this.onChange.bind(this, 'orderId')}></Input>
                </Form.Item>
                <Form.Item prop="date" labelWidth="0px">
                    <DatePicker
                    value={this.state.form.date}
                    placeholder="选择日期"
                    onChange={this.onChange.bind(this, 'date')}
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

export default OrderManage