"use client"

import Styles from './usuarios.module.css'
import icons from './icons';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

export default function Usuarios({title, data, isAdmin}){
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    const headers = [
        {'imgH':"/static/header.svg"},
        {'imgH':"/static/header1.svg"},
        {'imgH':"/static/header2.svg"},
        {'imgH':"/static/header3.svg"}
    ]

    return (
        <section className={Styles.container}>
            <h1 className={Styles.title}>{title}</h1>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                className={`mySwiper ${Styles.containerUsers}`}
            >
                {
                    data.map((user) => {
                        return(
                            <SwiperSlide>
                                <a className={Styles.containerUser} href="/usuario/id">
                                    <section className={Styles.userCont}>
                                        <img
                                            src={icons.user}
                                            className={Styles.userIcon}
                                        />
                                    </section>
                                    <p>{user.usuario}</p>
                                    {/* <p>{(user.estado)?'true':'false'}</p> */}
                                </a>
                            </SwiperSlide>
                        )
                    })
                }
                {
                    !isAdmin && 
                    <SwiperSlide>
                        <a className={Styles.containerUser} href='/usuario/nuevo'>
                            <section className={Styles.userCont}>
                                <img
                                    src={icons.right}
                                    className={Styles.userIcon}
                                    />
                            </section>
                            <p>Agregar nuevo</p>
                            {/* <p>{(user.estado)?'true':'false'}</p> */}
                        </a>
                    </SwiperSlide>
                }
            </Swiper>
        </section>
    )
}