import Sliderimg from "./sliderimg"
import Styles from "./welcome.module.css"

export default function Welcome(){
    return (
        <main className={Styles.container}>
            <Sliderimg />
            <h1 className={Styles.title}>GuppyDigital RMS</h1>
            <p className={Styles.desc}>Bienvenidos al portal de GuppyDigital RMS, un Sistema Gestión de Restaurante desarrollado por GuppyDigital, inicia sesión para poder acceder a tu restaurante.</p>
        </main>
    )
}