import React from 'react';
import FenleiList from './../../../../public/data/fenlei.json'
import './sort.css';
import { Switch, Route } from 'react-router-dom';
import GoodsList from '../GoodsList';


class Sort extends React.Component {
    goto = (id) => {
        this.props.history.push('/goodsList/'+id)
    }
    render() {
        return (
            <div className='sort'>
                <Switch>
                    <Route path="/goodsList/:id" component={GoodsList} exact></Route>
                </Switch>
                <div>
                    <div className='search_input'>
                        <input type='text' placeholder="搜索您想要的产品" />
                        <span className='iconfont icon-fangdajing'></span>
                    </div>
                    {

                        FenleiList.map((item, index) => (
                            <div key={item.title}>
                                <div className="sub-title">{item.title}</div>

                                <div className="sub-content" style={{backgroundColor: "#fff"}}>
                                    {
                                        item.content.map((v, i) => {
                                            return <li className="sub-con-one" key={v.titleId} onClick={this.goto.bind(null, v.titleId)}>
                                                <img src={v.icon} alt=""></img>
                                                <p>{v.text}</p>
                                            </li>
                                        })
                                    }
                                </div>
                                {/* <Grid
                        data={item.content} 
                        columnNum={3}
                        onClick={this.goto.bind(null,item.titleId)}
                        /> */}
                            </div>
                        ))
                    }

                </div>
            </div>
        )
    }
}
// const Sort = (props)=>{
//     return(
//         <div className='sort'>
//             <div>
//                 <div className='search_input'>
//                     <input type='text' placeholder="搜索您想要的产品"/>
//                     <span className='iconfont icon-fangdajing'></span>
//                 </div>
//                 {   

//                     FenleiList.map((item, index)=>(
//                         // console.log(item)
//                          <div key={item.title}>
//                             <div className="sub-title">{item.title}</div>
//                             <Grid
//                             data={item.content} 
//                             columnNum={3}
//                             onClick={this.goto}
//                             />
//                         </div>
//                     ))
//                 }

//             </div>
//         </div>
//     )
// }

export default Sort;


