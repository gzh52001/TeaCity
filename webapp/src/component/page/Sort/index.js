import React from 'react';
import { Grid } from 'antd-mobile';
import FenleiList from './../../../../public/data/fenlei.json'
import './sort.css';
// console.log(FenleiList)
function fn(obj,idx){
    console.log(obj)
    console.log(idx)
}
const Sort = (props)=>{
    return(
        <div className='sort'>
            <div>
                <div className='search_input'>
                    <input type='text' placeholder="搜索您想要的产品"/>
                    <span className='iconfont icon-fangdajing'></span>
                </div>
                {   
                    FenleiList.map((item, index)=>(
                        // console.log(item)
                         <div key={item.title}>
                            <div className="sub-title">{item.title}</div>
                            <Grid
                            data={item.content} 
                            columnNum={3}
                            onClick={fn}
                            />
                        </div>
                    ))
                }
                
            </div>
        </div>
    )
}
export default Sort;


