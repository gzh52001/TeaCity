import React from 'react';
import Swiper from 'swiper';
import '../../swiper.min.css';
import './touchslide.css';

class TouchSlide extends React.Component{
    constructor(){
        super();

        this.state = {
            hotsData: []
        }
    }

    async componentDidMount(){
        let hotsData = await fetch('./data/index-hot.json').then(res=>{
            return res.json();
        }).then(res=>{
            return res;
        })

        this.setState({
            hotsData: hotsData
        })

        var swiper = new Swiper('.swiper-container', {    
            slidesPerView: 'auto'  
        });  
        var startScroll, touchStart, touchCurrent;    
        swiper.slides.on('touchstart', function (e) {    
            startScroll = this.scrollLeft;  
            touchStart = e.targetTouches[0].pageX;  
        }, true);  
        swiper.slides.on('touchmove', function (e) {    
            touchCurrent = e.targetTouches[0].pageX;  
            var touchesDiff = touchCurrent - touchStart;  
            var slide = this;  
            var onlyScrolling =  
                    ( slide.scrollWidth > slide.offsetWidth ) &&
                    (  
                        ( touchesDiff < 0 && startScroll === 0 ) || 
                        ( touchesDiff > 0 && startScroll === ( slide.scrollWidth - slide.offsetWidth ) ) || 
                        ( startScroll > 0 && startScroll < ( slide.scrollWidth - slide.offsetWidth ) ) 
                    );  
            if (onlyScrolling) {  
                e.stopPropagation();  
            }  
        }, true);
    }
    render(){
        const {hotsData} = this.state;
        return(
            <div className="swiper-container">
                <div className="swiper-wrapper">

                    {
                        hotsData.map(item=>{
                            return (
                                <div className="swiper-slide" key={item.img}>
                        <section>
                            <article>
                                <img alt='' src={item.img}>
                                </img>
                            <p>{item.title}</p>
                            </article>
                            <aside>
                               <div>
                                   <img alt='' src={item.personIcon}></img>
                            <p>{item.personTitle}</p>
                               </div>
                               <div>
                            <span>{item.desc}</span><em>{item.price}</em>
                               </div>
                            </aside>
                        </section>
                    </div>
                            )
                        })
                    }
                    
                </div>
            </div>

        )
    }
}

export default TouchSlide;