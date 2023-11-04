import Styles from './userNav.module.css'
import icons from './icons'

export default function UserNav(){
    return (
        <section className={Styles.userComponent}>
            <section className={Styles.userCont}>
                <img
                    src={icons.user}
                    className={Styles.userIcon}
                />
            </section>
            <section className={Styles.userTexts}>
                <section className={Styles.saludoCont}>
                    <p className={Styles.saludo}>Saludos</p>
                    <img
                        src={icons.saludo}
                        className={Styles.happy}
                    />
                </section>
                <h1 className={Styles.userName}>Guppy Digital</h1>
            </section>
        </section>
    )
}