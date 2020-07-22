import React, { Component } from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import { get } from '../../../utils/request';
import './goodsList.css'

const arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(i);
}

let goodsInfo = {}
class GoodsList extends Component {
    constructor() {
        super()
        this.state = {
            data: "",
            dataList: [],
            id: 0,
            priceFlag: false,
            personFlag: false
        }
    }
    TabFn = async (obj, a) => {
        const { title } = obj;
        const { id, personFlag, priceFlag } = this.state;
        if (title === '价格') {
            if (priceFlag) {
                let getDescData = await get('/goods/priceasc', { teatitlecontentId: id });
                if (getDescData.flag) {
                    this.setState({
                        dataList: getDescData.data,
                        priceFlag: !priceFlag
                    })
                }

            } else {
                let getAscData = await get('/goods/pricedesc', { teatitlecontentId: id });
                if (getAscData.flag) {
                    this.setState({
                        dataList: getAscData.data,
                        priceFlag: !priceFlag
                    })
                }

            }

        } else if (title === '新品') {
            this.defaultData();
        } else if (title === '销量') {
            if (personFlag) {
                let getDescData = await get('/goods/personasc', { teatitlecontentId: id });
                if (getDescData) {
                    this.setState({
                        dataList: getDescData.data,
                        personFlag: !personFlag
                    })
                }
            }else {
                let getAscData = await get('/goods/persondesc', { teatitlecontentId: id });
                if (getAscData) {
                    this.setState({
                        dataList: getAscData.data,
                        personFlag: !personFlag
                    })
                }
            }
        }
    }

    async defaultData() {
        const datalist = await get('/goods/goodsbyId', { teatitlecontentId: this.state.id });
        if (datalist.flag) {
            this.setState({
                dataList: datalist.data
            })
        }
    }
    componentDidMount() {
        this.setState({
            id: this.props.match.params.id
        }, () => {
            this.defaultData();
        })
    }

    goto = (id) => {
        this.props.history.push('/goods/' + id)
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
                                <li key={item.goodsId} onClick={this.goto.bind(null, item.goodsId)}>
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