import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';

class ImgSwiper extends React.Component {
  state = {
    data: ['//img1.zuipin.cn/img/mcms/20200629/710-374.jpg', '//img1.zuipin.cn/new-wap/wap%E8%BD%AE%E6%92%AD/1.3-4%E6%9C%88%E8%BD%AE%E6%92%AD/lADPBGnDZb5zNqXNAXbNAsY_710_374.jpg', '//img1.zuipin.cn/new-wap/wap%E8%BD%AE%E6%92%AD/1.3-4%E6%9C%88%E8%BD%AE%E6%92%AD/lADPBGnDZb5wE1DNAXbNAsY_710_374.jpg','//img1.zuipin.cn/new-wap/wap%E8%BD%AE%E6%92%AD/20200604手机轮播.gif','//img1.zuipin.cn/new-wap/wap%E8%BD%AE%E6%92%AD/20200604叶界送礼-wap轮播.jpg'],
    imgHeight: 175,
  }
  render() {
    return (
      <WingBlank>
        <Carousel
          autoplay={true}
          infinite
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val}
                alt=""
                style={{ width: '100%', verticalAlign: 'top',height: 175 }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}

// ReactDOM.render(<App />, mountNode);
export default ImgSwiper;