import Styles from "./guppydigital.module.css"
import Link from "next/link";

export default function GuppyDigital() {
    return (
        <section className={Styles.container}>
            <p>Desarrollado por</p>
            <Link href={"https://guppydigital.com"} target="_blank" className={Styles.a}>
                <img
                src="/static/guppydigital.svg"
                alt="GuppyDigital"
                className={Styles.logo}/>
            </Link>
        </section>
    )
}