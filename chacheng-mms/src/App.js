import React,{Component} from 'react';
import './App.css';
import { Route, Switch, Redirect ,withRouter} from 'react-router-dom'

import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Reg from './components/pages/Reg'
import UserManage from './components/pages/UserManage'
import GoodsManage from './components/pages/GoodsManage'
import OrderManage from './components/pages/OrderManage'
import MenuTab from './components/MenuTab'
import {Layout} from 'element-react/next'
class App extends Component{
    constructor(props){
        super()
        this.props = props
        this.state = {}
    }
    login = ()=>{
      
    }
    render(){
        return(
          <div className="app">
            <header>
              <h4>茶城后台管理系统</h4>
              <div className='state'>
                <img src='./logo.jpg' alt=''/>
                <span onClick={this.login}>登录</span>
                {/* <span>退出</span> */}
              </div>
            </header>
              <Layout.Row type='flex'>
                <Layout.Col span='3'>
                  <MenuTab props={this.props}/>
                </Layout.Col>
                <Layout.Col span='21'>
                  <Switch>
                      <Route path='/home' component={Home} />
                      <Route path='/login' component={Login} />
                      <Route path='/reg' component={Reg} />
                      <Route path='/userManage' component={UserManage} />
                      <Route path='/goodsManage' component={GoodsManage} />
                      <Route path='/orderManage' component={OrderManage} />
                      <Redirect from='/' to='/home' exact />
                  </Switch>
                </Layout.Col>
              </Layout.Row>
          </div>
        )
    }
}


App = withRouter(App);

export default App;
