import React, { Component } from 'react';
import { Switch, Route, Redirect, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import 'antd-mobile/dist/antd-mobile.css';
// import '../public/iconfont/iconfont.css';
import './App.css';
import Login from './component/page/Login'
import GoodsList from './component/page/GoodsList'
import Home from './component/page/Home';
import Sort from './component/page/Sort';
import Cart from './component/page/Cart';
import Mine from './component/page/Mine';
import NotFound from './component/page/NotFound';
import ShopDetailed from './component/page/ShopDetailed';
import Address from './component/page/Address';

import { defaultList } from './store/actions/cart'
import { get } from './utils/request';

// @withRouter
// @connect(mapStateToProps)


class App extends Component {
  state = {
    header: '',
    navList: [
      {
        title: '首页',
        path: '/home',
        component: Home,
        icon: 'iconfont icon-shouye'
      }, {
        title: '分类',
        path: '/sort',
        component: Sort,
        icon: 'iconfont icon-fenlei-'
      }, {
        title: '购物车',
        path: '/cart',
        component: Cart,
        icon: 'iconfont icon-gouwuche'
      }, {
        title: '我的',
        path: '/mine',
        component: Mine,
        icon: 'iconfont icon-wode'
      }
    ]
  }
  async componentDidMount() {
    let userId = localStorage.getItem("tea_userId")
    if (userId) {
      let res = await get('/cart/find', { userId })
      if (res.flag) {
        this.props.dispatch(defaultList(res.data))
      }
    }

  }

  goto = () => {
    this.props.history.go(-1)
  }
  render() {
    let path = this.props.location.pathname.split("/")[1]
    return (
      <div className='app'>
        {
          path === 'home' ? '' :
            <div className='header_margin'>
              <header>
                <a onClick={this.goto}><i className={"iconfont icon-zuojiantou"}></i>返回</a>
                <span>{path === "sort" ? "商品分类" : path === `goodsList` ? "商品列表" : path === "cart" ? "购物车" : path === "mine" ? "个人中心" : path === "login" ? "登录/注册" : "商品详情"}</span>
              </header>
            </div>
        }
        <Switch>
          <Route path="/home" component={Home} exact></Route>
          <Route path="/sort" component={Sort} exact></Route>
          <Route path="/cart" component={Cart} exact></Route>
          <Route path="/mine" component={Mine} exact></Route>
          <Route path="/mine/address" component={Address} exact></Route>
          <Route path="/goodsList/:id" component={GoodsList} exact></Route>
          <Route path="/login" component={Login} exact></Route>
          <Route path='/notfound' component={NotFound} exact></Route>
          <Route path="/goods/:id" component={ShopDetailed} exact></Route>
          <Redirect from='/' to='/home'></Redirect>
          <Redirect to='/notfound'></Redirect>
        </Switch>
        {
          path == ('login' || 'goods') ? '' :
            <div className="navbar">
              <ul>
                <li className='gowu'>
                  {this.state.navList.map(item => {
                    return <NavLink key={item.path} to={item.path} activeClassName='active'>
                      <i className={item.icon}>
                        {
                          item.title == '购物车' ? <b>{this.props.goodsNum}</b> : ''
                        }
                      </i>
                      <span>{item.title}</span></NavLink>
                  })}
                </li>
              </ul>
            </div>
        }
      </div>
    );
  }
}


const mapStateToProps = ({ cart: { cartlist } }) => {
  return {
    goodsNum: cartlist.length
  }
}


App = withRouter(App);
App = connect(mapStateToProps)(App)

export default App;
