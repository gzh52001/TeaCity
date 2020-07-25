import React, { Component } from 'react';
import { Table, Button, Form, Input, Loading, Dialog, Message } from 'element-react/next';
import { get } from '../../../utils/request';
import {withMmsLogin} from '../../../utils/hoc';
import './userManage.css'
class UserManage extends Component {
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
                    label: "用户ID",
                    prop: "userId",
                    width: 160,
                    align: 'center'
                }, {
                    label: "姓名",
                    prop: "username",
                    width: 200,
                    align: 'center'
                }, {
                    label: "联系方式",
                    prop: "phoneNum",
                    width: 160,
                    align: 'center'
                }, {
                    label: "性别",
                    prop: "sex",
                    width: 100,
                    align: 'center'
                },
                {
                    label: "地址",
                    prop: "address",
                },
                {
                    label: '年龄',
                    prop: 'age',
                    align: 'center',
                    width: 150
                }
            ],
            data: []
        }
    }

    async componentDidMount() {
        let getData = await get('/user/finduser');
        console.log(getData)
        getData.data.map(item => {
            if (item.sex === 1) {
                item.sex = '男'
            } else if (item.sex === 2) {
                item.sex = '女'
            }
        })
        this.setState({
            data: getData.data
        })
    }

    onSubmit(e) {
        e.preventDefault();

        console.log('submit!');
    }
    handleReset = (e) => {
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

    findUser = async () => {
        const { form: { value } } = this.state;
        let getSome = await get('/user/findsomeuser', { mes: value });
        if(getSome.flag){
            Message.success(getSome.message);
            getSome.data.map(item => {
                if (item.sex === 1) {
                    item.sex = '男'
                } else if (item.sex === 2) {
                    item.sex = '女'
                }
            })
            this.setState({
                data: getSome.data
            })
        }else {
            Message.error(getSome.message);
        }
        
    }

    // addUser = () => {
    //     this.setState({
    //         dialogVisible3: true
    //     })
    // }



    render() {
        return (
            <div className='userManage el-loading-demo'>
                <Form inline={true} model={this.state.form} onSubmit={this.onSubmit.bind(this)} className="demo-form-inline">
                    <Form.Item>
                        <Input value={this.state.form.value} placeholder="请输入用户ID/姓名" onChange={this.onChange.bind(this, 'value')}></Input>
                    </Form.Item>
                    <Form.Item>
                        <Button nativeType="submit" type="primary" onClick={this.findUser}>查询</Button>
                        <Button onClick={this.handleReset.bind(this)}>重置</Button>
                        {/* <Button type="success" style={{ marginLeft: 500 }} onClick={this.addUser}>新增用户</Button> */}
                    </Form.Item>
                </Form>
                {/* <Loading text="拼命加载中"> */}
                <Table
                    style={{ width: '100%' }}
                    columns={this.state.columns}
                    data={this.state.data}
                    border={true}
                    maxHeight={560}
                    emptyText='暂无数据'
                />
                {/* </Loading> */}


                {/* <Dialog
                    title="新增用户" 
                    visible={this.state.dialogVisible3}
                    onCancel={() => this.setState({ dialogVisible3: false })}
                >
                    <Dialog.Body>
                        <Form model={this.state.form}>
                            <Form.Item label="用户名" labelWidth="120">
                                <Input value={this.state.form.name}></Input>
                            </Form.Item>
                        </Form>
                    </Dialog.Body>

                    <Dialog.Footer className="dialog-footer">
                        <Button onClick={() => this.setState({ dialogVisible3: false })}>取 消</Button>
                        <Button type="primary" onClick={() => this.setState({ dialogVisible3: false })}>确 定</Button>
                    </Dialog.Footer>
                </Dialog> */}
            </div>

        )
    }

}

UserManage = withMmsLogin(UserManage);
export default UserManage