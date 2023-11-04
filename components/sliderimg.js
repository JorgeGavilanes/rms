"use client"

import Styles from "./sliderimg.module.css"
import icons from './icons'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

export default function Sliderimg() {
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    const headers = [
        {'imgH':"/static/header.svg"},
        {'imgH':"/static/header1.svg"},
        {'imgH':"/static/header2.svg"},
        {'imgH':"/static/header3.svg"}
    ]
    
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            modules={[Navigation, Autoplay]}
            className={`mySwiper ${Styles.container}`}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
        >
            {headers.map((item, idx) => {
                return (
                    <SwiperSlide className={Styles.imgContainer} key={idx}>
                        <img
                            className={Styles.img}
                            src={item.imgH}
                            alt="GuppyDigital"
                        />
                    </SwiperSlide>
                )
            })}
        
        <section className={Styles.nav}>
            <img ref={navigationPrevRef} src={icons.left} className={`${Styles.icon} ${Styles.left}`}/>
            <img ref={navigationNextRef} src={icons.right} className={`${Styles.icon} ${Styles.right}`}/>
        </section>
        </Swiper>
    )
}