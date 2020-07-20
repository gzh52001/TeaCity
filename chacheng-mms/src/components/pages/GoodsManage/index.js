
import React,{Component} from 'react'
import {Table, Button,Form,DatePicker,Input,Dialog} from 'element-react/next'
// import './GoodsManage.css'
class GoodsManage extends Component{
    constructor(props) {
        super(props);
      
        this.state = {
            dialogVisible3: false,
            titel: '',
            form: {
                value_c: '',
                supplier_c: '',
                godsId: '',
                gdsname: '',
                repository: '',
                salesVolume: '',
                turnover: '',
                supplier: '',
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
                    label: "商品ID",
                    prop: "goodsId",
                    width: 180,
                    align: 'center'
                },{
                    label: "商品名称",
                    prop: "goodsName",
                    width: 200,
                    align: 'center'
                },
                {
                    label: "存库",
                    prop: "repository",
                    width: 120,
                    align: 'center'
                },{
                    label: "销量",
                    prop: "salesVolume",
                    width: 120,
                    align: 'center'
                },
                {
                    label: "交易额/元",
                    prop: "turnover",
                    width: 120,
                    align: 'center'
                },{
                    label: "供应商",
                    prop: "supplier",
                    width: 200,
                    align: 'center'
                },
                {
                    label: "操作",
                    width: 190,
                    fixed: 'right',
                    render: (row, column, index)=>{
                        return (
                        <span>
                            <Button  
                                plain={true} 
                                type="info" 
                                size="small" 
                                onClick={ () => this.setState({ dialogVisible3: true, titel:true}) }
                                >编辑
                            </Button>
                            <Button 
                                type="text"
                                type="info" 
                                size="small"
                                onClick={ () => this.setState({ dialogVisible3: true, titel:false }) } 
                                >添加
                            </Button>
                            <Button type="danger" size="small" onClick={this.deleteRow.bind(this, index)}>移除</Button>
                        </span>)
                    }
                }
            ],
            data: [
                {
                    id: 1,
                    goodsId: 1234567,
                    goodsName: '康师傅',
                    repository: '600箱',
                    salesVolume: '300箱',
                    turnover: '12000',
                    supplier: '康师傅有限公司',
                },{
                    id: 2,
                    goodsId: 1234567,
                    goodsName: '康师傅',
                    repository: '600箱',
                    salesVolume: '300箱',
                    turnover: '12000',
                    supplier: '康师傅有限公司',
                }
            ]
        }
    }
        

    onSubmit = (e) => {
        e.preventDefault();
        
        console.log('submit!');
    }
    handleReset = (e)=> {
        e.preventDefault();
        this.setState({
            form: {}
        })
    }

    onChange = (key, value)=>{
        this.setState({
            form: Object.assign(this.state.form, { [key]: value })
        });
    }


    deleteRow = (index)=>{
        const { data } = this.state;
        data.splice(index, 1);
        this.setState({
        data: [...data]
        })
    }

    onCloseFn = ()=>{
        console.log(" onClose")
    }
    onOpenFn = ()=>{
        console.log(" onOpen")
    }
    render = ()=> {
        return (
        <div className='GoodsManage'>
             <Form inline={true} model={this.state.form} onSubmit={this.onSubmit.bind(this)} className="demo-form-inline">
                <Form.Item>
                    <Input value={this.state.form.value_c} placeholder="请输入商品名称/商品ID" onChange={this.onChange.bind(this, 'value_c')}></Input>
                </Form.Item>
                <Form.Item>
                    <Input value={this.state.form.supplier_c} placeholder="请输入供应商名称" onChange={this.onChange.bind(this, 'supplier_c')}></Input>
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

            <Dialog
                title={this.state.titel?"编辑商品信息":"添加商品信息"}
                visible={ this.state.dialogVisible3 }
                onCancel={ () => this.setState({ dialogVisible3: false }) }
            >
                <Dialog.Body onOpen={this.onOpenFn(null,'')}
                onClose={this.onCloseFn(null,'')}>
                    <Form model={this.state.form}>
                        <Form.Item label="商品ID" labelWidth="120">
                            <Input value={this.state.form.godsId} onChange={this.onChange.bind(this, 'godsId')}></Input>
                        </Form.Item>
                        <Form.Item label="商品名称" labelWidth="120">
                            <Input value={this.state.form.gdsname } onChange={this.onChange.bind(this, 'gdsname')}></Input>
                        </Form.Item>
                        <Form.Item label="存库" labelWidth="120">
                            <Input value={this.state.form.repository} onChange={this.onChange.bind(this, 'repository')}></Input>
                        </Form.Item>
                        <Form.Item label="销量" labelWidth="120">
                            <Input value={this.state.form.salesVolume} onChange={this.onChange.bind(this, 'salesVolume')}></Input>
                        </Form.Item>
                        <Form.Item label="交易金额/元" labelWidth="120">
                            <Input value={this.state.form.turnover} onChange={this.onChange.bind(this, 'turnover')} ></Input>
                        </Form.Item>
                        <Form.Item label="供应商" labelWidth="120">
                            <Input value={this.state.form.supplier} onChange={this.onChange.bind(this, 'supplier')}></Input>
                        </Form.Item>
                    </Form>
                </Dialog.Body>
                <Dialog.Footer className="dialog-footer">
                    <Button onClick={ () => this.setState({ dialogVisible3: false }) }>取 消</Button>
                    <Button 
                        type="primary" 
                        onClick={ () => this.setState({ dialogVisible3: false }) }
                    >
                        {this.state.titel?"确认修改":"确认添加"}
                    </Button>
                </Dialog.Footer>
            </Dialog>
        </div>

        )
    }
      
}

export default GoodsManage