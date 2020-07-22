import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { Dropdown,Message,MessageBox } from 'element-react/next';
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Reg from './components/pages/Reg'
import UserManage from './components/pages/UserManage'
import GoodsManage from './components/pages/GoodsManage'
import OrderManage from './components/pages/OrderManage'
import MenuTab from './components/MenuTab'
import { Layout } from 'element-react/next'

class App extends Component {
  constructor(props) {
    super()
    this.props = props
    this.state = {
      storage: ''
    }
  }

  componentDidMount() {
    let getStorage = localStorage.getItem('tea_mms_username');
    let d = new Date();
    let str = '';
    if (d.getHours() >= 0 && d.getHours() < 6) {
      str += '凌晨好：';
    } else if (d.getHours() >= 6 && d.getHours() < 12) {
      str += '早上好：';
    } else if (d.getHours() >= 12 && d.getHours() < 18) {
      str += '下午好：';
    } else if (d.getHours() >= 18 && d.getHours() < 24) {
      str += '晚上好：';
    }
    if (getStorage) {
      str = str + getStorage;
      this.setState({
        storage: str
      })
    }
  }

  handleCommand(command) {
    if(command === 'exit'){
      MessageBox.confirm('此操作将退出登录，执行后需要重新登录才能进入，是否继续', '提示', {
        type: 'warning'
      }).then(() => {
        localStorage.removeItem('tea_mms_username');
        this.props.history.push('/login');
        Message({
          type: 'success',
          message: '退出成功!'
        });
      }).catch(() => {
        Message({
          type: 'info',
          message: '已取消退出登录'
        });
      });
    }
  }

  render() {
    return (
      <div className="app">
        <header>
          <h4>茶城后台管理系统</h4>
          <div className='state'>
            <img src='./logo.jpg' alt='' />
            <Dropdown onCommand={this.handleCommand.bind(this)} menu={(
              <Dropdown.Menu>
                <Dropdown.Item command='exit'>退出登录</Dropdown.Item>
              </Dropdown.Menu>
            )}>
              <span className="el-dropdown-link">
                {this.state.storage}<i className="el-icon-caret-bottom el-icon--right"></i>
              </span>
            </Dropdown>
          </div>
        </header>
        <Layout.Row type='flex'>
          <Layout.Col span='3'>
            <MenuTab props={this.props} />
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
