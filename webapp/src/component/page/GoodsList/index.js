import React, { Component } from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import { get, request } from '../../../utils/request';
import './goodsList.css'
//测试
const arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(i);
}

class GoodsList extends Component {
    constructor() {
        super()
        this.state = {
            data: "",
            dataList: [],
            id: 0
        }
    }
    TabFn = (obj, a) => {
        console.log(obj)
        console.log(a)
    }
    componentDidMount() {
        this.setState({
            id: this.props.match.params.id
        }, async () => {
            const datalist = await get('/goods/goodsbyId', { teatitlecontentId: this.state.id });
            if(datalist.flag){
                this.setState({
                    dataList: datalist.data
                })
            }
        })
    }

    goto = (id)=>{
        this.props.history.push('/goods/'+id)
    }
    render() {
        const { dataList } = this.state;
        return (
            <div className="goodList">
                <div>
                    <WhiteSpace />
                    <Tabs
                        onTabClick={this.TabFn}
                        activeTab="0"
                        tabBarActiveTextColor='red'
                        tabBarUnderlineStyle={{ border: 'none' }}
                        tabs={[{ title: '销量' }, { title: '新品' }, { title: "价格" }, { title: '筛选' }]}
                        initialPage={1}
                        animated={false}
                        useOnPan={false}>
                        <ul className='gdsListBox' >
                            {dataList.map((item) => (
                                <li key={item.goodsId} onClick={this.goto.bind(null,item.goodsId)}>
                                    <img src={item.goodsImg} alt="" />
                                    <h4>{item.goodstitle}</h4>
                                    <p>{item.goodsDesc}</p>
                                    <p>{item.goodsPrice}<del>{item.goodsPrice}</del></p>
                                    <p>{item.goodsPerson}人好评</p>
                                    {item.goodsLogo ? <img src={item.goodsLogo} alt="" /> : null}
                                </li>
                            ))}
                        </ul>
                    </Tabs>
                    <WhiteSpace />
                    <h6>已经没有更多了哦</h6>
                </div>

            </div>
        )
    }
}

export default GoodsList;