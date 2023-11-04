"use client"

import Styles from "./nav.module.css"
import StylesA from "./enlaces.module.css"
import Icons from "./icons"

import Link from "next/link";
import { useState } from 'react';
import UserNav from "./userNav";

const enlaces = [
    {
        'texto' : 'Inicio',
        'enlace' : '/',
        'icon' : ''
    }
]

export default function Nav() {
    return(
        <nav
            className={Styles.nav}
        >
            <img
                src="/static/guppydigital.svg"
                className={Styles.logo}
            />
            <a
                href="https://guppydigital.com"
                target="_blank"
                className={StylesA.enlace}
            >
                Visitar sitio
                <img
                    src={Icons.newTab}
                    className={Styles.icon}
                />
            </a>
        </nav>
    )
}

export function NavAuth(){
    const [navActive, setNavActive] = useState(false);

    function EnlaceStates({enlace, texto, icon}) {
        return (
            <a
            href={enlace}
            className={Styles.a}
            onClick={() => {
                setNavActive(false);
            }}>{texto}</a>
        )
    }

    return (
        <nav className={Styles.navAuth}>
            <div className={`${navActive ? `${Styles.bcDark}` : `${Styles.bcHDark}`}`}/>
            <UserNav />
            <div
                onClick={() => setNavActive(!navActive)}
                className={`${navActive ? `${Styles.menuAct}` : `${Styles.menuDesAct}`} ${Styles.nav__menu_bar}`}
            >
                <div className={Styles.burger}></div>
                <div className={Styles.burger}></div>
                <div className={Styles.burger}></div>
            </div>
            <section
            className={`${navActive ? `${Styles.enlacesMAct}` : ""} ${Styles.enlacesM}`}
            >
                <EnlaceStates enlace={"/"} texto={"INICIO"}/>
            </section>
        </nav>
    )
}