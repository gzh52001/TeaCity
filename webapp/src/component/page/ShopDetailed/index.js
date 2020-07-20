import React from 'react';
import './shopDetailed.css';
import {get} from '../../../utils/request';

class ShopDetailed extends React.Component {
    constructor(){
        super();
        this.state = {
            id:0,
            datalist:[]
        }
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        this.setState({
            id:id
        },async ()=>{
            let getData = await get('/goods/goodsdetailById',{goodsId:this.state.id});
            if(getData.flag){
                this.setState({
                    datalist:getData.data[0]
                })
            }
        })
    }
    render() {
        return (
            <div className="AC_shopDe">
                <div className="AC_shopDe-scr">
                    <div className="AC_shopDeBox">
                        <div className="AC_shopDe_banner">
                            <img alt='' src={this.state.datalist.goodsBigImg}></img>
                        </div>
                        <div className="AC_shopDe_title">
                        <h2>{this.state.datalist.goodstitle}</h2>
                        </div>
                        <div className="AC_shopDe_price">
                        <p>醉品价：<span>￥{this.state.datalist.goodsPrice}</span></p>
                        </div>
                        <div className="AC_shopDe_cuxiao">
                            <aside>
                                <p>促销</p>
                            </aside>
                            <article>
                                <div>
                                    <p>直降</p><span>已优惠0元（10折）</span>
                                </div>
                                <div>
                                    <p>包邮</p><span>全场在线支付满59元免运费</span>
                                </div>
                            </article>
                        </div>
                        <div className="AC_shopDe_server">
                            <aside>
                                <p>服务</p>
                            </aside>
                            <article>
                                <p><span></span><em>全场商品90天保价</em></p>
                                <p><span></span><em>30天无忧退换货</em></p>
                                <p><span></span><em>满59元免运费</em></p>
                                <p><span></span><em>2000城市货到付款</em></p>
                            </article>
                        </div>
                        <div className="AC_shopDe_count">
                            <aside>
                                <p>数量</p>
                            </aside>
                            <article>
                                <input type="button" value="-"></input>
                                <input type="text" defaultValue="1"></input>
                                <input type="button" value="+"></input>
                            </article>
                        </div>
                        <div className="AC_shopDe_buyBar">
                            <aside>
                                <p>
                                    <i className="iconfont icon-tubiao-"></i>
                                    <span>客服</span>
                                </p>
                                <p>
                                    <i className="iconfont icon-gouwuchezhengpin"></i>
                                    <span>购物车</span>
                                </p>
                            </aside>
                            <article>
                                <button>加入购物车</button>
                                <button>立即购买</button>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShopDetailed;