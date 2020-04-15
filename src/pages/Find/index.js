import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Swiper from 'swiper';
// import '../../../node_modules/swiper/css/swiper.css';
import style from './style.sass'

const Find = (props) => {
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: true,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            //   scrollbar: {
            //     el: '.swiper-scrollbar',
            //   },
        });
    return (
        <div className={style.wrap}>
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide"><img style={{width:'100%'}} src="http://p1.music.126.net/_uivT8vu3dbNu-2Zd_RhgQ==/109951164875517669.jpg?imageView&quality=89" /></div>
                    <div className="swiper-slide"><img style={{width:'100%'}} src="http://p1.music.126.net/-zyFghQ9XBlNG6Ld6QsATQ==/109951164875528309.jpg?imageView&quality=89" /></div>
                    <div className="swiper-slide"><img style={{width:'100%'}} src="http://p1.music.126.net/Ok2lMPC7xa64Mh0vq6VNqA==/109951164875567063.jpg?imageView&quality=89" /></div>
                    <div className="swiper-slide"><img style={{width:'100%'}} src="http://p1.music.126.net/3UPQOq8WMhnEzN8SMY_h4g==/109951164875487925.jpg?imageView&quality=89" /></div>
                    <div className="swiper-slide"><img style={{width:'100%'}} src="http://p1.music.126.net/vHDfDedEd2URN9_zFCzG5w==/109951164875514577.jpg?imageView&quality=89" /></div>
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-scrollbar"></div>
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    name: state.find.name
});
export default connect(mapStateToProps, null)(Find);