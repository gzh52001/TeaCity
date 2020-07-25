import React from 'react';
// import HeaderBar from '../../HeaderBar';
import {withLogin} from '../../../utils/hoc';
import './cart.css';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import cartActions from './../../../store/actions/cart'
import { get } from '../../../utils/request';
import {getInfo} from './../../../utils/getAndSetInfo'
// import {Toast} from 'antd-mobile'

class Cart extends React.Component {
   constructor(){
        super();
        this.state = {
            editState:false,
            editTitle:'',
            delBtnTitle:'',
            cartList:[],
        }
    }
    idArr = []
    setVal=()=>{
        // console.log(this.state.editState);
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
    addId=(goodsId,e)=>{
        if(e.target.checked===true){
            this.idArr.push(goodsId)
        }else{
            this.idArr = this.idArr.filter(item=>item!==goodsId)
        }
        console.log(this.idArr)
    }
    
    delOrSettlement=()=>{
        let {delGoods} = this.props
        if(!this.state.editState){
            delGoods(this.idArr)
            this.idArr = []
        }else if(this.state.editState){
            console.log("结算")
        }
    }
    setEditState=()=>{
        const {editState} = this.state;
        this.setState({
            editState : !editState
        },this.setVal())
    }

    async componentDidMount(){
        this.setVal();
        let userId = getInfo("tea_userId")
        let res = await get('/cart/find',{userId})
        if(res.flag){
            let {defaultList} = this.props
            defaultList(res.data)
        }
    }
    changeCount=(index,e)=>{
        let a = e.target.value
        console.log(a)
    }

    //父复选框控制子复选框
   checkAllFn = async ()=>{
        let {checkAll,checkAll2} = this.props
        await checkAll()
        checkAll2(this.props.cart.checkAll)
    }
    //子复选框控制父复选框
    checkOneFn = async (goodsId)=>{
        let {checkOne,checkOne2} = this.props
        await checkOne(goodsId)
        checkOne2()
    }
    render() {
        let {change,cart:{cartlist}} = this.props
        console.log(this.props)
        return (
            <div className="AC_cart">
                <div className="AC_cartScr">
                    <div className="AC_cartBox">
                        <div className="AC_cart_title">
                            <p>已满足满59包邮</p>
                        <span onClick={this.setEditState}>{this.state.editTitle}</span>
                        </div>
                        {cartlist.map((item,index)=>(
                            <div className="AC_cart_goods" key={item.cartId}>
                                <div className="AC_cart_oneGoods">
                                    <div className="AC_cart_input">
                                       {/* <input className='checkedDom' onClick={this.checkedFn.bind(null,item.goodsId)} type="checkbox"></input> */}
                                        <input className='checkedDom' onClick={this.addId.bind(null,item.goodsId)} onChange={this.checkOneFn.bind(null,item.goodsId)} checked={item.isChecked}  type="checkbox"></input>
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
                                                <input onChange={this.changeCount.bind(null,index)} type="text" value={item.count}></input>
                                                <input onClick={change.bind(null,item.goodsId,item.count+(item.count<100?1:0),item.userId)} type="button" value="+"></input>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="AC_cart_total">
                            <div className="AC_cart_checkNow">
                                {/* <input onClick={this.checkedFn.bind(null,null)} id='checkAll' type="checkbox"></input> */}
                                <input onChange={this.checkAllFn} checked={this.props.cart.checkAll} id='checkAll' type="checkbox"></input>
                            </div>
                            <div className="AC_cart_chooseNum">
                                <p>已选<span>({this.props.cart.step})</span></p>
                            </div>
                            <div className="AC_cart_price">
                                <p>￥{this.props.cart.totalPrice}</p>
                            </div>
                            <div className="AC_cart_totalButton">
                            <button onClick={this.delOrSettlement}>{this.state.delBtnTitle}</button>
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