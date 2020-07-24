import React, { Component } from 'react'
import { Table, Button, Form, DatePicker, Input, Dialog, Pagination,Message,Select,MessageBox } from 'element-react/next'
// import { Message } from 'element-react';
import { get,put,del } from '../../../utils/request';
import {withMmsLogin} from '../../../utils/hoc';
// import './GoodsManage.css'
class GoodsManage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            total: 0,
            pageSizes: [50, 100, 150, 200, 250, 300],
            pageSize: 50,
            currentPage: 1,
            dialogVisible3: false,
            titel: '',
            form: {
                value_c: '',
                goodsId:'',
                goodstitle: '',
                goodstype: '',
                goodsImg: '',
                goodsDesc: '',
                goodsPrice: '',
                goodsPerson: '',
                goodsBigImg:''
            },
            columns: [
                {
                    label: "商品ID",
                    prop: "goodsId",
                    width: 100,
                    align: 'center'
                }, {
                    label: "商品名称",
                    prop: "goodstitle",
                    width: 200,
                    align: 'center'
                },
                {
                    label: "所属类型",
                    prop: "teatitlecontentId",
                    width: 100,
                    align: 'center'
                }, {
                    label: "图片",
                    prop: "goodsImg",
                    width: 300,
                    align: 'center'
                },
                {
                    label: "副标题",
                    prop: "goodsDesc",
                    width: 180,
                    align: 'center'
                }, {
                    label: "价格",
                    prop: "goodsPrice",
                    width: 100,
                    align: 'center'
                },
                {
                    label: "好评人数",
                    prop: "goodsPerson",
                    width: 100,
                    align: 'center'
                },
                {
                    label: '大图',
                    prop: 'goodsBigImg',
                    width: 300
                },
                {
                    label: "操作",
                    width: 140,
                    fixed: 'right',
                    render: (row, column, index) => {
                        return (
                            <span>
                                <Button
                                    plain={true}
                                    type="info"
                                    size="small"
                                    onClick={this.edit.bind(null,row)}
                                >编辑
                                </Button>
                                <Button type="danger" size="small" onClick={this.remove.bind(this,row)}>移除</Button>
                            </span>)
                    }
                }
            ],
            data: [],
            teatype:[]
        }
    }



    async getDataFn(url, state, count) {
        let getData = await get('/goods/' + url, { state: state, count: count });
        let getSort = await get('/goods/sort');
        getData.data.map(item => {
            getSort.data.forEach(it => {
                if (item.teatitlecontentId === it.titlecontentId) {
                    item.teatitlecontentId = it.text;
                    return it;
                }
            })
        })
        this.setState({
            data: getData.data
        })
    }

    async componentDidMount() {
        let getAll = await get('/goods/findgoods');
        let getteatype = await get('/goods/sort');
        this.setState({
            teatype:getteatype.data
        })
        console.log(getteatype);
        this.getDataFn('getsomegoods', 0, 50);
        this.setState({
            total: getAll.data.length
        })
    }

    changePages = (currentPage) => {
        const { pageSize } = this.state;
        this.getDataFn('getsomegoods', pageSize * (currentPage - 1), pageSize);
        this.setState({
            currentPage: currentPage
        })
    }

    changeSizes = (size) => {
        const { currentPage, total } = this.state;
        if (currentPage > Math.ceil(total / size)) {
            this.setState({
                currentPage: Math.ceil(total / size)
            }, () => {
                const { currentPage } = this.state;
                this.getDataFn('getsomegoods', size * (currentPage - 1), size);
                this.setState({
                    pageSize: size
                })
            })
        } else {
            this.getDataFn('getsomegoods', size * (currentPage - 1), size);
            this.setState({
                pageSize: size
            })
        }

    }

    findSomeGoods = async () => {
        const { form: { value_c } } = this.state;
        let getData = await get('/goods/getlikegoods', { mes: value_c });
        let getSort = await get('/goods/sort');
        getData.data.map(item => {
            getSort.data.forEach(it => {
                if (item.teatitlecontentId === it.titlecontentId) {
                    item.teatitlecontentId = it.text;
                    return it;
                }
            })
        })
        this.setState({
            data: getData.data,
            total: getData.data.length
        })
    }

    edit = (row)=>{
        this.setState({ 
            dialogVisible3: true, 
            titel: true,
            form:{
                goodsId:row.goodsId,
                goodstitle: row.goodstitle,
                goodstype: row.teatitlecontentId,
                goodsImg: row.goodsImg,
                goodsDesc: row.goodsDesc,
                goodsPrice: row.goodsPrice,
                goodsPerson: row.goodsPerson,
                goodsBigImg:row.goodsBigImg
            }
        })
    }

    remove = (row)=>{
        MessageBox.confirm('此操作将删除该数据, 是否继续?', '提示', {
            type: 'warning'
          }).then(async () => {
            let removeData = await del('/goods/del/'+row.goodsId);
            if(removeData.flag){
                Message({
                    type: 'success',
                    message: '删除成功!'
                });
                const {pageSize,currentPage} = this.state;
                this.getDataFn('getsomegoods',pageSize*(currentPage-1),pageSize);
            }else {
                Message({
                    type: 'error',
                    message: '删除失败!'
                });
            }
            
          }).catch(() => {
            Message({
              type: 'info',
              message: '已取消删除'
            });
          });
    }

    addData = ()=>{
        this.setState({
             dialogVisible3: true, 
             titel: false,
             form:{
                goodsId:'',
                goodstitle: '',
                goodstype: '',
                goodsImg: '',
                goodsDesc: '',
                goodsPrice: '',
                goodsPerson: '',
                goodsBigImg:''
            }

        })
    }

    sure =async ()=>{
        const {titel,form,pageSize,currentPage} = this.state;
        if(titel){
            let getTitle = await get('/goods/gettitlecon',{text:form.goodstype});
            let changeData = await put('/goods/edit/'+form.goodsId,{goodstitle:form.goodstitle,goodsImg:form.goodsImg,goodsPrice:form.goodsPrice,teatitlecontentId:getTitle.data[0].titlecontentId,goodsBigImg:form.goodsBigImg,goodsDesc:form.goodsDesc});
            if(changeData.flag){
                Message({
                    message: '修改成功',
                    type: 'success'
                  });
                this.getDataFn('getsomegoods',pageSize*(currentPage-1),pageSize);
            }else {
                Message({
                    message: '修改失败',
                    type: 'error'
                  });
            }
        }else {
            const {form,pageSize,currentPage} = this.state;
            if(form.goodstype && form.goodstitle && form.goodsPrice && form.goodsImg){
                let addData = await get('/goods/addgoods',{teatitlecontentId:form.goodstype,goodstitle:form.goodstitle,goodsImg:form.goodsImg, goodsDesc:form.goodsDesc, goodsPrice:form.goodsPrice, goodsPerson:0,goodsBigImg:form.goodsBigImg})
                Message({
                    message: addData.message,
                    type: 'success'
                  });
                  this.getDataFn('getsomegoods',pageSize*(currentPage-1),pageSize);
            }else {
                Message.error('请输入完整的信息');
            }
        }
        this.setState({ dialogVisible3: false })
    }

    onSubmit = (e) => {
        e.preventDefault();

        console.log('submit!');
    }
    handleReset = (e) => {
        e.preventDefault();
        this.setState({
            form: {}
        })
    }

    onChange = (key, value) => {
        this.setState({
            form: Object.assign(this.state.form, { [key]: value })
        });
    }


    deleteRow = (index) => {
        const { data } = this.state;
        data.splice(index, 1);
        this.setState({
            data: [...data]
        })
    }

    onCloseFn = () => {
        console.log(" onClose")
    }
    onOpenFn = () => {
        console.log(" onOpen")
    }
    render = () => {
        const { total, pageSizes, pageSize, currentPage } = this.state;
        return (
            <div className='GoodsManage'>
                <Form inline={true} model={this.state.form} onSubmit={this.onSubmit.bind(this)} className="demo-form-inline">
                    <Form.Item>
                        <Input value={this.state.form.value_c} placeholder="请输入商品名称/商品ID" onChange={this.onChange.bind(this, 'value_c')}></Input>
                    </Form.Item>
                    <Form.Item>
                        <Button nativeType="submit" type="primary" onClick={this.findSomeGoods}>查询</Button>
                        <Button onClick={this.handleReset.bind(this)}>重置</Button>
                        <Button type="success" onClick={this.addData} style={{marginLeft:400}}>添加商品</Button>
                    </Form.Item>
                </Form>
                <Table
                    style={{ width: '100%' }}
                    columns={this.state.columns}
                    data={this.state.data}
                    border={true}
                    maxHeight={560}
                />
                <Pagination layout="total, sizes, prev, pager, next, jumper" total={total} pageSizes={pageSizes} pageSize={pageSize} currentPage={currentPage} onCurrentChange={this.changePages} onSizeChange={this.changeSizes} />

                <Dialog
                    title={this.state.titel ? "编辑商品信息" : "添加商品信息"}
                    visible={this.state.dialogVisible3}
                    onCancel={() => this.setState({ dialogVisible3: false })}
                >
                    <Dialog.Body onOpen={this.onOpenFn(null, '')}
                        onClose={this.onCloseFn(null, '')}>
                        <Form model={this.state.form}>
                            <Form.Item label="商品ID" labelWidth="120">
                                <Input value={this.state.form.goodsId} onChange={this.onChange.bind(this, 'goodsId')} disabled></Input>
                                
                            </Form.Item>
                            <Form.Item label="商品名称" labelWidth="120">
                                <Input value={this.state.form.goodstitle} onChange={this.onChange.bind(this, 'goodstitle')}></Input>
                            </Form.Item>
                            <Form.Item label="所属类型" labelWidth="120">
                            <Select value={this.state.form.goodstype} placeholder="请选择茶叶类型" onChange={this.onChange.bind(this,'goodstype')}>
                                {this.state.teatype.map(item=>{
                                   return (
                                        <Select.Option key={item.titlecontentId} label={item.text} value={item.text}></Select.Option>
                                   )
                                })}
                            </Select>
                                {/* <Input value={this.state.form.goodstype} onChange={this.onChange.bind(this, 'goodstype')}></Input> */}
                            </Form.Item>
                            <Form.Item label="图片" labelWidth="120">
                                <Input value={this.state.form.goodsImg} onChange={this.onChange.bind(this, 'goodsImg')}></Input>
                            </Form.Item>
                            <Form.Item label="副标题" labelWidth="120">
                                <Input value={this.state.form.goodsDesc} onChange={this.onChange.bind(this, 'goodsDesc')} ></Input>
                            </Form.Item>
                            <Form.Item label="价格" labelWidth="120">
                                <Input value={this.state.form.goodsPrice} onChange={this.onChange.bind(this, 'goodsPrice')}></Input>
                            </Form.Item>
                            <Form.Item label="好评人数" labelWidth="120">
                                <Input value={this.state.form.goodsPerson} onChange={this.onChange.bind(this, 'goodsPerson')} disabled></Input>
                            </Form.Item>
                            <Form.Item label="大图" labelWidth="120">
                                <Input value={this.state.form.goodsBigImg} onChange={this.onChange.bind(this, 'goodsBigImg')}></Input>
                            </Form.Item>
                        </Form>
                    </Dialog.Body>
                    <Dialog.Footer className="dialog-footer">
                        <Button onClick={() => this.setState({ dialogVisible3: false })}>取 消</Button>
                        <Button
                            type="primary"
                            onClick={this.sure}
                        >
                            {this.state.titel ? "确认修改" : "确认添加"}
                        </Button>
                    </Dialog.Footer>
                </Dialog>
            </div>

        )
    }

}

GoodsManage = withMmsLogin(GoodsManage);
export default GoodsManage