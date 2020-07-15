import React from 'react';
import HeaderBar from '../../HeaderBar';
import './shopDetailed.css'

class ShopDetailed extends React.Component{
    componentDidMount(){
        console.log(this.props)
    }
    render(){
        return (
            <div>
                <div className="AC_shopDe_header">
                    <HeaderBar></HeaderBar>
                </div>
                <div className="AC_shopDe_banner">
                    <img src="http://img3.zuipin.cn/online_img/proimg/20200415174226_12825902394.jpg"></img>
                </div>
            </div>
        )
    }
}

export default ShopDetailed;