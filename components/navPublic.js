import Styles from "./navPublic.module.css"

export default function NavPublic({ title, logo }){
    return(
        <section className={Styles.container}>
            <img src={logo} className={Styles.img}/>
            <h1 className={Styles.title}>{title}</h1>
        </section>
    )
}