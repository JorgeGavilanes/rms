'use client'

import Styles from "./formulario.module.css"
import StylesA from "./enlaces.module.css"
import icons from "./icons"

import Link from "next/link"
import { useState } from "react"

function UserCorreo({userChange}){
    return (
        <input
            type="email"
            placeholder="Correo"
            name="identifier"
            className={Styles.inputText}
        />
    )
}

function Password({passChange}){
    const [hideShow, setHideShow] = useState(false);

    const funcHideShow = () => {
        setHideShow(!hideShow)
    }

    return (
        <section className={Styles.passContainer}>
            <input
                type={hideShow ? "text" : "password"}
                placeholder="Contraseña"
                name="password"
                className={Styles.inputPass}
            />
            <img
                src={icons.show}
                className={`${!hideShow && Styles.show} ${Styles.icon}`}
                onClick={funcHideShow}
            />
            <img
                src={icons.hide}
                className={`${hideShow && Styles.hide} ${Styles.icon}`}
                onClick={funcHideShow}
            />
        </section>
    )
}

function ValidPasswords(){
    const [hideShow, setHideShow] = useState(false);
    const [hideShowRepeat, setHideShowRepeat] = useState(false);

    const funcHideShow = () => {
        setHideShow(!hideShow)
    }

    const funcHideShowRepeat = () => {
        setHideShowRepeat(!hideShowRepeat)
    }

    return (
        <section className={Styles.gap}>
            <section className={Styles.passContainer}>
                <input
                    type={hideShow ? "text" : "password"}
                    placeholder="Ingresa tu contraseña"
                    className={Styles.inputPass}
                    />
                <img
                    src={icons.show}
                    className={`${!hideShow && Styles.show} ${Styles.icon}`}
                    onClick={funcHideShow}
                    />
                <img
                    src={icons.hide}
                    className={`${hideShow && Styles.hide} ${Styles.icon}`}
                    onClick={funcHideShow}
                    />
            </section>
            <section className={Styles.passContainer}>
                <input
                    type={hideShowRepeat ? "text" : "password"}
                    placeholder="Repite tu contraseña"
                    className={Styles.inputPass}
                />
                <img
                    src={icons.show}
                    className={`${!hideShowRepeat && Styles.show} ${Styles.icon}`}
                    onClick={funcHideShowRepeat}
                />
                <img
                    src={icons.hide}
                    className={`${hideShowRepeat && Styles.hide} ${Styles.icon}`}
                    onClick={funcHideShowRepeat}
                    />
            </section>
            {/* <p className={Styles.danger}>La contraseña debe tener 8 caracteres.</p> */}
        </section>
    )
}

function CBoton({href, title}){
    return ( 
        <Link href={href} className={Styles.boton}>{title}</Link>
    )
}

function CHeader({ Title, Enlace, TEnlace, notEnlace}){
    return (
        <header className={Styles.header}>
            <h2 className={Styles.title}>{Title}</h2>
            {
                !notEnlace && <Link href={Enlace} className={StylesA.enlace}>{TEnlace}</Link>
            }
        </header>
    )
}

function Login(){
    return (
        <form className={Styles.container}>
            <CHeader
                Title={'Login'}
                Enlace={'/registro'}
                TEnlace={'Crear cuenta'}
            />
            <section className={Styles.gap}>
                <UserCorreo />
                <Password />
                {/* <p className={Styles.danger}>La contraseña debe tener 8 caracteres.</p> */}
                <Link
                    href={"olvidepass"}
                    className={`${StylesA.enlace} ${Styles.forgetpass}`}
                >Olvidé mi contraseña</Link>
            </section>
            <button
                type="submit"
                className={Styles.submit}
                href="/dashboard"
            >Iniciar sesión</button>
        </form>
    )
}

function Registro(){
    return (
        <form className={Styles.container}>
            <CHeader 
                Enlace={'/'}
                TEnlace={'Iniciar sesión'}
                Title={'Crear cuenta'}
            />
            <section style={{display:'block'}}>
                <section className={Styles.gap}>
                    <UserCorreo />
                    <ValidPasswords />
                </section>
                <button
                    type="submit"
                    className={Styles.submit}
                    >Crear cuenta</button>
            </section>
            <section style={{display:'none'}}>
                <p className={Styles.desc}>Cuenta creada con éxito, pulsa el botón de abajo para iniciar sesión, recuerda que tu cuenta entrará en revisión por nuestro equipo para habilitarte todas las funcionalidades.</p>
                <CBoton href={'/login'} title={'Iniciar sesión'}/>
            </section>
        </form>
    )
}

function OlvidePass(){
    return (
        <form className={Styles.container}>
            <CHeader 
                Enlace={'/'}
                TEnlace={'Iniciar sesión'}
                Title={'Olvidé mi contraseña'}
            />
            <section style={{display:'block'}}>
                <p className={Styles.desc}>Para restablecer tu contraseña ingresa tu correo asociado a tu cuenta y asegúrate de revisar tu bandeja de entrada.</p>
                <UserCorreo />
                <button
                    type="submit"
                    className={Styles.submit}
                    >Restablecer contraseña</button>
            </section>
            <section style={{display:'none'}}>
                <p className={Styles.desc}>Se ha enviado el correo para restablecer tu contraseña con éxito. Asegúrate de crear una contraseña segura y guardarla en un sitio seguro.</p>
            </section>
        </form>
    )
}

function RestablecerPass(){
    return (
        <form className={Styles.container}>
            <CHeader 
                notEnlace={true}
                Title={'Restablecer contraseña'}
            />
            <section style={{display:'none'}}>
                <ValidPasswords />
                <button
                    type="submit"
                    className={Styles.submit}
                >
                    Restablecer contraseña
                </button>
            </section>
            <section style={{display:'block'}}>
                <p className={Styles.desc}>Se ha restablecido tu contraseña con éxito. Asegúrate de guardar la contraseña en un sitio seguro. Pulsa volver para ingresar.</p>
                <CBoton href={'/superadmin/login'} title={'Iniciar sesión'}/>
            </section>
        </form>
    )
}

module.exports = {
    Login,
    Registro,
    OlvidePass,
    RestablecerPass
};