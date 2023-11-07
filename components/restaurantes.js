import Link from 'next/link'
import Styles from './restaurantes.module.css'
import StylesA from './enlaces.module.css'
import icons from './icons'

export default function Restaurantes({data}){
    return (
        <section className={Styles.container}>
            <h1>Restaurantes</h1>
            <section>
                {
                    data.map((restaurante, key) => {
                        return (
                            <section key={key}>
                                <section>
                                    <img />
                                    <h2>{restaurante.nombre}</h2>
                                </section>
                                <section>
                                    <p>
                                        <strong>Admin : </strong>
                                        {restaurante.admin}
                                    </p>
                                    <p>
                                        <strong>N° de usuarios : </strong>
                                        {restaurante.nUsuarios}
                                    </p>
                                    <p>
                                        <strong>Registro : </strong>
                                        {restaurante.fecha}
                                    </p>
                                </section>
                                <a href={`restaurante/${restaurante.id}`}>
                                    <img />
                                    Ver y editar
                                </a>
                            </section>
                        )
                    })
                }
            </section>
        </section>
    )
}