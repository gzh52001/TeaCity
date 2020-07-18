import React,{Component} from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import './goodsList.css'
//测试
const arr = [];
  for(let i = 0;i<10;i++){
      arr.push(i);
  }

class GoodsList extends Component{
    constructor(){
        super()
        this.state = {
            data:""
        }
    }
    TabFn = (obj,a)=>{
        console.log(obj)
        console.log(a)
    }
    render(){
        return(
            <div className="goodList">
                <div>
                    <WhiteSpace />
                        <Tabs 
                            onTabClick={this.TabFn}
                            activeTab="0" 
                            tabBarActiveTextColor='red'  
                            tabBarUnderlineStyle={{border:'none'}} 
                            tabs={[{ title: '销量' },{ title: '新品' },{ title: "价格"},{ title: '筛选' }]} 
                            initialPage={1} 
                            animated={false} 
                            useOnPan={false}>
                            <ul className='gdsListBox' >
                                {arr.map((item)=>(
                                    <li key={item}>
                                        <img src='https://img3.zuipin.cn/online_img/proimg/20200426170059_225048924801.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160' alt="" />
                                        <h4>黛伦堡 D`arenberg  澳大利亚干红葡萄酒 犁跃2016年 750ML红酒</h4>
                                        <p>JH评分90分  香气饱满</p> 
                                        <p>￥158<del>￥168</del></p>
                                        <p>10人好评</p>
                                        <img src='https://m.zuipin.cn/web/images/zp_lpc_xx.png' alt="" />
                                    </li>
                                ))}
                            </ul>
                        </Tabs>
                    <WhiteSpace />
                </div>

            </div>
        )
    }
}

export default GoodsList;