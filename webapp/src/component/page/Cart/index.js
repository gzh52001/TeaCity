import React from 'react';
// import HeaderBar from '../../HeaderBar';
import {withLogin} from '../../../utils/hoc';
import './cart.css';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import cartActions from './../../../store/actions/cart'
import request from '../../../utils/request';
import {getInfo} from './../../../utils/getAndSetInfo'
import {Toast} from 'antd-mobile'

class Cart extends React.Component {
    //结算或编辑删除
    delOrSettlement = async ()=>{
        let {delGoods,checkAll,cart:{checkall}} = this.props
        if(this.props.cart.delbtn){//开关为真
            console.log('结算')
        }else{
            let obj = {
                userId:getInfo("tea_userId"),
            }
            let res = await request.del('/cart/selectdel',obj)
            if(res.flag){
                Toast.info('删除成功！', 1)
            } else{
                Toast.info('删除失败！', 1)
            }
            delGoods()
            checkall?checkAll('all'):''
        }
    }
    
    componentDidMount(){
    
    }
    //输入修改商品数量
    changeCount=(goodsId,userId,e)=>{
        let {change} = this.props
        let value = e.target.value
        change(goodsId,value,userId)
        console.log(e.target.value)
    }
    onBlurFn=(goodsId,userId,e)=>{
        let {change} = this.props
        let value = e.target.value
        if(value>100){
            Toast.info('达到最大存库', 1)
        }
        value = value<(1||'')?1:value>100?100:value
        change(goodsId,value,userId)
    }
    //父复选框控制子复选框
   checkAllFn = async ()=>{
        let {checkAll,checkAll2} = this.props
        await checkAll('')
        checkAll2(this.props.cart.checkall)
    }
    //子复选框控制父复选框
    checkOneFn = async (goodsId,userId,isChecked=this.props)=>{
        let {checkOne,checkOne2} = this.props
        await checkOne(goodsId)
        // request.put('/cart/inputcheck',{goodsId,userId,isChecked})
        checkOne2()
    }
    render() {
        let {change,delBtn,cart:{cartlist,delbtn}} = this.props
        // console.log(cartlist)
        return (
            <div className="AC_cart">
                <div className="AC_cartScr">
                    <div className="AC_cartBox">
                        <div className="AC_cart_title">
                            <p>已满足满59包邮</p>
                        <span onClick={delBtn}>{delbtn?'编辑':'完成'}</span>
                        </div>
                        {cartlist.map((item,index)=>(
                            <div className="AC_cart_goods" key={item.goodsId}>
                                <div className="AC_cart_oneGoods">
                                    <div className="AC_cart_input">
                                        <input  className='checkedDom' onChange={this.checkOneFn.bind(null,item.goodsId,item.userId)} checked={item.isChecked||''}  type="checkbox"></input>
                                    </div>
                                    <div className="AC_cart_imgBox">
                                        <img alt='' src={item.goodsBigImg}></img>
                                    </div>
                                    <div className="AC_cart_goodsContent">
                                        <aside>
                                            <p>{item.goodstitle}</p>
                                        </aside>
                                        <article>
                                            <p><span>￥</span>{item.goodsPrice}</p>
                                            <div className="AC_cart_buttonZu">
                                                <input onClick={change.bind(null,item.goodsId,item.count-(item.count>1?1:0),item.userId)} type="button" value="-"></input>
                                                <input onBlur={this.onBlurFn.bind(null,item.goodsId,item.userId)} onChange={this.changeCount.bind(null,item.goodsId,item.userId)} type="text" value={item.count}></input>
                                                <input onClick={change.bind(null,item.goodsId,(item.count-0)+(item.count<100?1:0),item.userId)} type="button" value="+"></input>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="AC_cart_total">
                            <div className="AC_cart_checkNow">
                                <input onChange={this.checkAllFn} checked={this.props.cart.checkall} id='checkAll' type="checkbox"></input>
                            </div>
                            <div className="AC_cart_chooseNum">
                                <p>已选<span>({this.props.cart.step})</span></p>
                            </div>
                            <div className="AC_cart_price">
                                <p>￥{this.props.cart.totalPrice}</p>
                            </div>
                            <div className="AC_cart_totalButton">
                            <button onClick={this.delOrSettlement}>{delbtn?'结算':'删除'}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Cart = withLogin(Cart);
Cart = connect( ({cart})=>({
    cart
}),(dispatch)=>bindActionCreators(cartActions,dispatch))(Cart)
export default Cart;