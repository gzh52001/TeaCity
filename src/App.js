import React, { Component } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css';
// import '../public/iconfont/iconfont.css';
import './App.css';

import Home from './component/page/Home';
import Sort from './component/page/Sort';
import Cart from './component/page/Cart'; 
import Mine from './component/page/Mine';
import NotFound from './component/page/NotFound';
import ShopDetailed from './component/page/ShopDetailed';
// import NavBar from './component/NavBar';

class App extends Component {
  state = {
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
            icon:'iconfont icon-fenlei'
        },{
            title:'购物车',
            path:'/cart',
            component:Cart,
            icon:'iconfont icon-gouwuchezhengpin'
        },{
            title:'我的',
            path:'/mine',
            component:Mine,
            icon:'iconfont icon-ziyuan'
        }
      ]
  }
  render() {
    return (
        <div>
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
            <Switch>
                  <Route path="/home" component={Home}></Route>
                  <Route path="/sort" component={Sort}></Route>
                  <Route path="/cart" component={Cart}></Route>
                  <Route path="/mine" component={Mine}></Route>
                  <Route path='/notfound' component={NotFound}></Route>
                  <Route path="/goods:id" component={ShopDetailed}></Route>
                  <Redirect from='/' to='/home'></Redirect>
                  <Redirect to='/notfound'></Redirect>
            </Switch>
        </div>
    );
  }
}

export default App;
