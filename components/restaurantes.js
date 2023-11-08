import Link from 'next/link'
import Styles from './restaurantes.module.css'
import StylesA from './enlaces.module.css'
import icons from './icons'

export default function Restaurantes({data}){
    return (
        <section className={Styles.container}>
            <h1>Restaurantes</h1>
            <section className={Styles.restaurantes}>
                {
                    data.map((restaurante, key) => {
                        return (
                            <section className={Styles.restaurante} key={key}>
                                <section className={Styles.restaurante_header}>
                                    <section className={Styles.restaurante_cont_iconRes}>
                                        <img src={icons.locals} className={`${Styles.icon} ${Styles.restaurante_iconRes}`}/>
                                    </section>
                                    <h2 className={Styles.restaurante_title}>{restaurante.nombre}</h2>
                                </section>
                                <section>
                                    <p>
                                        <strong>Créditos: </strong>
                                        {restaurante.creditos}
                                    </p>
                                    <p>
                                        <strong>Admin: </strong>
                                        {restaurante.admin}
                                    </p>
                                    <p>
                                        <strong>N° de usuarios: </strong>
                                        {restaurante.nUsuarios}
                                    </p>
                                    <p>
                                        <strong>Registro: </strong>
                                        {restaurante.fecha}
                                    </p>
                                </section>
                                <a href={`restaurante/${restaurante.id}`}>
                                    <img src={icons.show} className={Styles.icon}/>
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