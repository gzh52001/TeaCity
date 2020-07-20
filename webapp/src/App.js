import React, { Component } from 'react';
import { Switch, Route, Redirect, NavLink,withRouter} from 'react-router-dom';
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
// import NavBar from './component/NavBar';

class App extends Component {
  constructor(props){
    super(props)
    this.props = props
    this.state = {
      header: '',
      navList:[
        {
            title:'首页',
            path:'/home',
            component:Home,
            icon:'iconfont icon-shouye'
        },{
            title:'分类',
            path:'/sort',
            component:Sort,
            icon:'iconfont icon-fenlei-'
        },{
            title:'购物车',
            path:'/cart',
            component:Cart,
            icon:'iconfont icon-gouwuche'
        },{
            title:'我的',
            path:'/mine',
            component:Mine,
            icon:'iconfont icon-wode'
        }
      ]
    }
 
  }    
  goto = ()=>{
      this.props.history.go(-1);
  } 
  render() {
    let path = this.props.location.pathname
    return (
        <div className='app'>
          {
            path=='/home'?'':
            <div className='header_margin'>
              <header>
                  <a onClick={this.goto}><i className={"iconfont icon-zuojiantou"}></i>返回</a>
                  <span>{path=="/sort"?"商品分类":path=="/goodslist"?"商品列表":path=="/cart"?"购物车":path=="/mine"?"个人中心":path=="/login"?"登录/注册":"商品详情"}</span>
              </header>
            </div>
          }
          <Switch>
                <Route path="/home" component={Home} exact></Route>
                <Route path="/sort" component={Sort} exact></Route>
                <Route path="/cart" component={Cart} exact></Route>
                <Route path="/mine" component={Mine} exact></Route>
                <Route path="/sort/goodsList/:id" component={GoodsList} exact></Route>
                <Route path="/login" component={Login} exact></Route>
                <Route path='/notfound' component={NotFound} exact></Route>
                <Route path="/goods/:id" component={ShopDetailed} exact></Route>
                <Redirect from='/' to='/home'></Redirect>
                <Redirect to='/notfound'></Redirect>
          </Switch>
          <div className="navbar">
            <ul>
              <li>
                {this.state.navList.map(item=>{
                  return <NavLink key={item.path} to={item.path} activeClassName='active'>
                    <i className={item.icon}></i>
                    <span>{item.title}</span></NavLink>
              })}
              </li>
            </ul>
              {/* <NavBar></NavBar> */}
          </div>
        </div>
    );
  }
}

App = withRouter(App);
export default App;
