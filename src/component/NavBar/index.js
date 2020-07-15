import React from 'react';
import { TabBar } from 'antd-mobile';
import {withRouter} from 'react-router-dom';


class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
      fullScreen: true,
    };
  }
  componentDidMount(){
      const path = this.props.location.pathname;
      if(path === '/home'){
        this.setState({
          selectedTab:'blueTab'
        })
      }else if(path === '/sort'){
        this.setState({
          selectedTab:'redTab'
        })
      }else if(path === '/cart'){
        this.setState({
          selectedTab:'greenTab'
        })
      }else {
        this.setState({
            selectedTab:'yellowTab'
        })
      }
  }

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#ff3600"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<div className="iconfont icon-shouye" style={{
              width: '22px',
              height: '22px',
              fontSize: '22px'
              }}
            />
            }
            selectedIcon={<div className="iconfont icon-shouye" style={{
              width: '22px',
              height: '22px',
              color:'#ff3600',
              fontSize: '22px'
              }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
              this.props.history.push('/home');
            }}
            data-seed="logId"
          >
          
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div className="iconfont icon-fenlei" style={{
                width: '22px',
                height: '22px',
                fontSize: '22px'
                }}
              />
            }
            selectedIcon={
              <div className="iconfont icon-fenlei" style={{
                width: '22px',
                height: '22px',
                color:'#ff3600',
                fontSize: '22px'
                }}
              />
            }
            title="分类"
            key="Koubei"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
              this.props.history.push('/sort');
            }}
            data-seed="logId1"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div className="iconfont icon-gouwuchezhengpin" style={{
                width: '22px',
                height: '22px',
                fontSize: '22px'
                }}
              />
            }
            selectedIcon={
              <div className="iconfont icon-gouwuchezhengpin" style={{
                width: '22px',
                height: '22px',
                color:'#ff3600',
                fontSize: '22px'
                }}
              />
            }
            title="购物车"
            key="Friend"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
              this.props.history.push('/cart');
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={<div className="iconfont icon-ziyuan" style={{
              width: '22px',
              height: '22px',
              fontSize: '22px'
            }}></div>}
            selectedIcon={<div className="iconfont icon-ziyuan" style={{
              width: '22px',
              height: '22px',
              fontSize: '22px',
              color:"ff3600"
            }}></div>}
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
              this.props.history.push('/mine');
            }}
          >
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

// ReactDOM.render(<TabBarExample />, mountNode);
TabBarExample = withRouter(TabBarExample);
export default TabBarExample;