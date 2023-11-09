"use client"

import Styles from "./nav.module.css"
import StylesA from "./enlaces.module.css"
import Icons from "./icons"

import Link from "next/link";
import { useState } from 'react';
import UserNav from "./userNav";
import { Danger } from "./enlace";

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

export function NavAuth({ rol, superadminData }){
    const [navActive, setNavActive] = useState(false);

    function EnlaceStates({enlace, texto, icon}) {
        return (
            <a
            href={enlace}
            className={Styles.a}
            onClick={() => {
                setNavActive(false);
            }}><img src={icon} className={Styles.icon1}/>{texto}</a>
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
                {
                    (rol === 0) &&
                    superadminData.map(e => {
                        return (
                            <EnlaceStates enlace={e.ruta} icon={e.icon} texto={e.titulo}/>
                        )
                    })
                }
                <section className={Styles.footer} />
                <EnlaceStates enlace={'/perfil'} icon={Icons.user} texto={'Editar perfil'}/>
                <Danger icon={Icons.logout} ruta={''} title={'Cerrar sesión'}/>
            </section>
        </nav>
    )
}