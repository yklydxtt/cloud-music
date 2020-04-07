import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Swiper from 'react-id-swiper';
import style from './style.css'

const Find = (props) => {
    const params = {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    }
    return (
        <div className={style.wrap}>
            <Swiper {...params}>
                <img src="http://p1.music.126.net/_uivT8vu3dbNu-2Zd_RhgQ==/109951164875517669.jpg?imageView&quality=89" />
                <img src="http://p1.music.126.net/U7mp4LXEW6l17zrRbFysvQ==/109951164875539978.jpg?imageView&quality=89" />
                <img src="http://p1.music.126.net/-zyFghQ9XBlNG6Ld6QsATQ==/109951164875528309.jpg?imageView&quality=89" />
                <img src="http://p1.music.126.net/Ok2lMPC7xa64Mh0vq6VNqA==/109951164875567063.jpg?imageView&quality=89" />
                <img src="http://p1.music.126.net/3UPQOq8WMhnEzN8SMY_h4g==/109951164875487925.jpg?imageView&quality=89" />
                <img src="http://p1.music.126.net/vHDfDedEd2URN9_zFCzG5w==/109951164875514577.jpg?imageView&quality=89" />
            </Swiper>
        </div>
    )
}
const mapStateToProps = state => ({
    name: state.find.name
});
export default connect(mapStateToProps, null)(Find);