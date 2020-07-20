import React,{Component} from 'react';
import {Menu} from 'element-react/next'
import './MenuTab.css'


function MenuTab(props) {
    const menu = [{
      text: '首页',
      path: '/home',
      icon: 'el-icon-menu iconfont icon-shouye'
    }, {
      text: '用户管理',
      path: '/userManage',
      icon: 'el-icon-menu iconfont icon-wode'
    }, {
      text: '商品管理',
      path: '/goodsManage',
      icon: 'el-icon-menu iconfont icon-fenlei-'
    }, {
      text: '订单管理',
      path: '/orderManage',
      icon: 'el-icon-menu iconfont icon-gouwuche'
    }];

    let {pathname} = props.props.location
    let pathIndex = ''
    if(pathname === '/home'){
      pathIndex="1"
    } else if(pathname === '/userManage'){
      pathIndex = "2" 
    } else if(pathname === '/goodsManage'){
      pathIndex = "3" 
    } else if(pathname === '/orderManage'){
      pathIndex = "4"
    }

    function goto(path){
      props.props.history.push(path)
    }

    return (
      <div className='menu'>
            <Menu theme="dark" defaultActive={pathIndex} className="el-menu-vertical-demo" >
              {
                menu.map((item,index)=>(
                  <div style={{height:"100%"}} key={index} onClick={goto.bind(null,item.path,(index+1))}>
                    <Menu.Item index={(index+1).toString()} >
                      <i className={item.icon} ></i>{item.text}
                    </Menu.Item>
                  </div>
                ))
              }
          </Menu>
      </div>
    )
  }

export default MenuTab;
