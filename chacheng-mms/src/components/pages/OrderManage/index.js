import React, { Component } from 'react'
import { Table, Button, Form, Input, Message,MessageBox } from 'element-react/next';
import { get,del } from '../../../utils/request';
import { withMmsLogin } from '../../../utils/hoc';
// import './OrderManage.css'
class OrderManage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                orderId: '',
                data: '',
                region: '',
            },
            columns: [
                {
                    label: "订单ID",
                    prop: "cartId",
                    width: 100,
                    fixed: 'left',
                    align: 'center'
                }, {
                    label: "用户ID",
                    prop: "userId",
                    width: 160,
                    align: 'center'
                }, {
                    label: "用户名称",
                    prop: "username",
                    width: 160,
                    align: 'center'
                },
                {
                    label: "商品ID",
                    prop: "goodsId",
                    width: 160,
                    align: 'center'
                },
                {
                    label: '商品名称',
                    prop: 'goodstitle',
                },
                {
                    label: "数量",
                    prop: "count",
                    width: 90,
                    align: 'center'
                }, {
                    label: "总价",
                    prop: "goodsPrice",
                    width: 90,
                    align: 'center'
                },
                {
                    label: "操作",
                    width: 140,
                    render: (row, column, index) => {
                        return (
                            <span>
                                <Button type="danger" size="small" onClick={this.remove.bind(null,row)}>移除</Button>
                            </span>)
                    }
                }
            ],
            data: []
        }
    }


    async componentDidMount() {
        this.getDataFn();
    }

    async getDataFn(){
        let getData = await get('/cart/find2');
        console.log(getData);
        if (getData.flag) {
            this.setState({
                data: getData.data
            })
        }
    }

    findLikeData = async () => {
        const { form: { orderId } } = this.state;
        let getData = await get('/cart/getlikedata', { mes: orderId });
        console.log(getData);
        if (getData.flag) {
            Message.success(getData.message);
            this.setState({
                data: getData.data
            })
        } else {
            Message.error(getData.message);
        }
    }

    remove = (row)=>{
        const {userId,goodsId} = row;
        MessageBox.confirm('此操作将删除该订单, 是否继续?', '提示', {
            type: 'warning'
          }).then(async() => {
              let removeData = await del('/cart/del',{userId:userId,goodsId:goodsId});
              if(removeData.flag){
                  Message({
                    type: 'success',
                    message: '删除成功!'
                });
                this.getDataFn();
              }
            
          }).catch(() => {
            Message({
              type: 'info',
              message: '已取消删除'
            });
          });
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
    handleReset = (e) => {
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
                        <Input value={this.state.form.orderId} placeholder="请输入用户ID/用户名称" onChange={this.onChange.bind(this, 'orderId')}></Input>
                    </Form.Item>
                    <Form.Item>
                        <Button nativeType="submit" type="primary" onClick={this.findLikeData}>查询</Button>
                        <Button onClick={this.handleReset.bind(this)}>重置</Button>
                    </Form.Item>
                </Form>
                <Table
                    style={{ width: '100%' }}
                    columns={this.state.columns}
                    data={this.state.data}
                    border={true}
                    maxHeight={560}
                />
            </div>

        )
    }

}

OrderManage = withMmsLogin(OrderManage);
export default OrderManage