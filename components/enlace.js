import StylesA from './enlaces.module.css'

export default function Enlace({ruta, icon, title}){
    return (
        <a href={ruta} className={StylesA.enlace}>
            <img src={icon} className={StylesA.icon}/>
            {title}
        </a>
    )
}

export function Danger({ruta, icon, title}){
    return (
        <a href={ruta} className={StylesA.enlaceDanger}>
            <img src={icon} className={StylesA.icon1}/>
            {title}
        </a>
    )
}