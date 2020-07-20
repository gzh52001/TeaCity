import React from 'react';
// import HeaderBar from '../../HeaderBar';
import './cart.css';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import cartActions from './../../../store/actions/cart'
class Cart extends React.Component {
    constructor(){
        super();
        this.state = {
            editState:false,
            editTitle:'',
            delBtnTitle:''
        }

    }

    setVal=()=>{
        console.log(this.state.editState);
        if(!this.state.editState){
            this.setState({
               editTitle: '编辑',
               delBtnTitle:'去结算'
            })
        }else if(this.state.editState){
            this.setState({
                editTitle: '完成',
                delBtnTitle:'删除'
            })
        }
    }

    setEditState=()=>{
        const {editState} = this.state;
        this.setState({
            editState : !editState
        },this.setVal())
    }

    componentDidMount(){
        this.setVal();
    }
    render() {
        console.log(this.props)
        return (
            <div className="AC_cart">
                <div className="AC_cartScr">
                    <div className="AC_cartBox">
                        <div className="AC_cart_title">
                            <p>已满足满59包邮</p>
                        <span onClick={this.setEditState}>{this.state.editTitle}</span>
                        </div>

                        <div className="AC_cart_goods">
                            <div className="AC_cart_oneGoods">
                                <div className="AC_cart_input">
                                    <input type="checkbox"></input>
                                </div>
                                <div className="AC_cart_imgBox">
                                    <img alt='' src="http://img3.zuipin.cn/zpfx/proimg/2017-11-24-16-46-43-5a17dc735bac596873.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250"></img>
                                </div>
                                <div className="AC_cart_goodsContent">
                                    <aside>
                                        <p>益泡柑 代用茶 柑普茶 益泡·雅  二红柑  一级 方罐100g</p>
                                    </aside>
                                    <article>
                                        <p><span>￥</span>100.00</p>
                                        <div className="AC_cart_buttonZu">
                                            <input type="button" value="-"></input>
                                            <input type="text" defaultValue="1"></input>
                                            <input type="button" value="+"></input>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>

                        <div className="AC_cart_goods">
                            <div className="AC_cart_oneGoods">
                                <div className="AC_cart_input">
                                    <input type="checkbox"></input>
                                </div>
                                <div className="AC_cart_imgBox">
                                    <img alt='' src="http://img3.zuipin.cn/zpfx/proimg/2017-11-24-16-46-43-5a17dc735bac596873.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250"></img>
                                </div>
                                <div className="AC_cart_goodsContent">
                                    <aside>
                                        <p>益泡柑 代用茶 柑普茶 益泡·雅  二红柑  一级 方罐100g</p>
                                    </aside>
                                    <article>
                                        <p><span>￥</span>100.00</p>
                                        <div className="AC_cart_buttonZu">
                                            <input type="button" value="-"></input>
                                            <input type="text" defaultValue="1"></input>
                                            <input type="button" value="+"></input>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>

                        <div className="AC_cart_total">
                            <div className="AC_cart_checkNow">
                                <input type="checkbox"></input>
                            </div>
                            <div className="AC_cart_chooseNum">
                                <p>已选<span>(0)</span></p>
                            </div>
                            <div className="AC_cart_price">
                                <p>￥0.00</p>
                            </div>
                            <div className="AC_cart_totalButton">
                            <button>{this.state.delBtnTitle}</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
Cart = connect((state)=>({
    state:state
}),(dispatch)=>bindActionCreators(cartActions,dispatch))(Cart)
export default Cart;