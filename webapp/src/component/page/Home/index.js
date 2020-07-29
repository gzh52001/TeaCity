import React from 'react';
import ImgSwiper from '../../Swiper';
import TouchSlide from '../../TouchSlide';
import './home.css';

class Home extends React.Component {
    constructor(props) {
        super();
        this.props = props
        this.state = {
            newsData: [],
            hours:0,
            minutes:0,
            seconds:0
        }
    }

    async componentDidMount() {
        let getNewsData = await fetch('./data/index.json').then(res => {
            return res.json();
        }).then(res => {
            return res;
        })

        this.setState({
            newsData: getNewsData
        })

        this.time();
    }

    b0(str){
        if(str<10){
            return '0'+str
        }
        return str;
    }

    time(){
        let d1 = new Date();
        let d2 = new Date();
        d2.setDate(d1.getDate()+1);
        d2.setHours(0);
        d2.setMinutes(0);
        d2.setSeconds(0);
        setInterval(()=>{
            let d3 = new Date();
            let a = d2.getTime()-d3.getTime();
            let h = this.b0(parseInt(a%(24*60*60*1000)/(60*60*1000)));
            let m = this.b0(parseInt(a%(60*60*1000)/(60*1000)));
            let s = this.b0(parseInt(a%(60*1000)/1000));
            this.setState({
                hours:h,
                minutes:m,
                seconds:s
            })
        },1000)

    }


    render() {
        const { newsData,hours,minutes,seconds } = this.state;
        // console.log(newsData)
        return (
            <div>
                <div className="AC_home">
                    <div className="AC_home-scr">
                        <div className="AC_home-box">
                            {/* <header className="AC_home_header">
                                <article>
                                    <Input></Input>
                                </article>
                            </header> */}
                            { 
                                <div className='header_margin'>
                                    <header className="AC_home_header">
                                        <div className='search'>
                                            <i className=" iconfont icon-fangdajing"></i>
                                            <span>武夷大红袍</span>
                                        </div>
                                    </header>
                                </div>
                            }
                            <div className="AC_home_swiper">
                                <div className="AC_home_left-img"></div>
                                <div className="AC_home_right-img"></div>
                                <ImgSwiper></ImgSwiper>

                            </div>
                            <div className="AC_home_titleImg">
                                <img alt='' src="http://img1.zuipin.cn/new_pc/zuipinfw/20200603fw/P_02.jpg"></img>
                            </div>
                            <div className="AC_home_item">
                                <section>
                                    <img alt='' src="http://img1.zuipin.cn/new_pc/zuipinfw/20200603fw/ic_01.png"></img>
                                    <p>品牌集成</p>
                                </section>
                                <section>
                                    <img alt='' src="http://img1.zuipin.cn/new_pc/zuipinfw/20200603fw/ic_02.png"></img>
                                    <p>大师名匠</p>
                                </section>
                                <section>
                                    <img alt='' src="http://img1.zuipin.cn/new_pc/zuipinfw/20200603fw/ic_03.png"></img>
                                    <p>春天茶园</p>
                                </section>
                                <section>
                                    <img alt='' src="http://img1.zuipin.cn/new_pc/zuipinfw/20200603fw/ic_04.png"></img>
                                    <p>茶礼定制</p>
                                </section>
                                <section>
                                    <img alt='' src="http://img1.zuipin.cn/new_pc/zuipinfw/20200603fw/ic_05.png"></img>
                                    <p>积分商城</p>
                                </section>
                            </div>
                            <div className="AC_home_banner">
                                <img alt='' src="http://img1.zuipin.cn/new_pc/zuipinfw/20200603fw/pro.jpg"></img>
                            </div>
                            <div className="AC_home_times">
                                <div className="AC_home_timesHeader">
                                    <div className="AC_home_timesTitle">
                                        <i className="iconfont icon-miaobiao"></i>
                                        <em>限时<span>特价</span></em>
                                    </div>
                                    <div className="AC_home_timesNow">
                                        <p>距结束</p>
                                        <span>{hours}</span>
                                        <em>:</em>
                                        <span>{minutes}</span>
                                        <em>:</em>
                                        <span>{seconds}</span>
                                    </div>
                                </div>
                                <div className="AC_home_timesContent">
                                    <section>
                                        <img alt='' src="http://img2.zuipin.cn/online_img/proimg/20190828154238_140159718588.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250"></img>
                                        <p>【线上专供】醉品朴茶 红茶 金骏眉 一茶一城&厦门 薯香 50g*5盒 </p>
                                        <span>￥99.00</span>
                                        <del>￥850</del>
                                    </section>
                                </div>
                            </div>

                            <div className="AC_home_ImgCart">
                                <img alt='' src="http://img1.zuipin.cn/new_pc/zuipinfw/20191211fw/发现好茶.png"></img>
                                <img alt='' src="http://img1.zuipin.cn/new_pc/zuipinfw/20191211fw/送礼频道.png"></img>
                            </div>

                            <div className="AC_home_newsGoods">
                                <div className="AC_home_goodsTitle">
                                    <h2>新品首发</h2>
                                    <article>
                                        <p>茶界新品</p>
                                        <img alt='' src="https://m.zuipin.cn/wap/images/v8/center_lazy.png"></img>
                                        <p>新鲜直达</p>
                                    </article>
                                </div>
                                <div className="AC_home_goodsContent">
                                    {
                                        newsData.map(item => {
                                            // console.log(this.state)
                                            return (
                                                <section key={item.price}>
                                                    <aside>
                                                        <img alt='' src={item.img}></img>
                                                    </aside>
                                                    <article>
                                                        <p>{item.title}</p>
                                                        <span>{item.desc}</span>
                                                        <em>{item.price}</em>
                                                    </article>
                                                </section>

                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="AC_home_hot">
                                <div className="AC_home_goodsTitle">
                                    <h2>热评产品</h2>
                                    <article>
                                        <p>口碑精选</p>
                                        <img alt='' src="https://m.zuipin.cn/wap/images/v8/hot_xin.png"></img>
                                        <p>你的好茶</p>
                                    </article>
                                </div>

                                <div className="AC_home_touchSlide">
                                    <TouchSlide></TouchSlide>
                                </div>
                            </div>
                            <div className="AC_home_topEight">
                            <div className="AC_home_goodsTitle">
                                    <h2>TOP8茶叶类目</h2>
                                    <article>
                                        <p>品八大茗茶</p>
                                        <img alt='' src="https://m.zuipin.cn/wap/images/v8/center_lazy.png"></img>
                                        <p>享闲雅之意</p>
                                    </article>
                                </div>
                                <div className="AC_home_topContent">
                                    <img alt='' src="https://img1.zuipin.cn/new-wap/WAP%E5%85%AB%E5%A4%A7%E7%83%AD%E9%94%80/20200113/1.jpg" onClick={()=>{
                                        this.props.history.push('/goodsList/2345001')
                                    }}></img>
                                    <img alt='' src="https://img1.zuipin.cn/new-wap/WAP%E5%85%AB%E5%A4%A7%E7%83%AD%E9%94%80/20200113/2.jpg"
                                    onClick={()=>{
                                        this.props.history.push('/goodsList/2346001')
                                    }}></img>
                                    <img alt='' src="https://img1.zuipin.cn/new-wap/WAP%E5%85%AB%E5%A4%A7%E7%83%AD%E9%94%80/20200113/3.jpg"
                                    onClick={()=>{
                                        this.props.history.push('/goodsList/2347002')
                                    }}></img>
                                    <img alt='' src="https://img1.zuipin.cn/new-wap/WAP%E5%85%AB%E5%A4%A7%E7%83%AD%E9%94%80/20200113/4.jpg"
                                    onClick={()=>{
                                        this.props.history.push('/goodsList/2347001')
                                    }}></img>
                                    <img alt='' src="https://img1.zuipin.cn/new-wap/WAP%E5%85%AB%E5%A4%A7%E7%83%AD%E9%94%80/20200113/5.jpg"
                                    onClick={()=>{
                                        this.props.history.push('/goodsList/2348001')
                                    }}></img>
                                    <img alt='' src="https://img1.zuipin.cn/new-wap/WAP%E5%85%AB%E5%A4%A7%E7%83%AD%E9%94%80/20200113/6.jpg"
                                    onClick={()=>{
                                        this.props.history.push('/goodsList/2349001')
                                    }}></img>
                                    <img alt='' src="https://img1.zuipin.cn/new-wap/WAP%E5%85%AB%E5%A4%A7%E7%83%AD%E9%94%80/20200113/7.jpg"
                                    onClick={()=>{
                                        this.props.history.push('/goodsList/2346003')
                                    }}></img>
                                    <img alt='' src="https://img1.zuipin.cn/new-wap/WAP%E5%85%AB%E5%A4%A7%E7%83%AD%E9%94%80/20200113/8.jpg"
                                    onClick={()=>{
                                        this.props.history.push('/goodsList/2352001')
                                    }}></img>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;