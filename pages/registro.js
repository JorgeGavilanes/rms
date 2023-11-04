import { Registro } from '/components/formulario'
import Nav from '/components/nav'
import Welcome from '/components/welcome'
import styles from './../styles/Home.module.css'
import GetRoute from '/components/ruta'

export default function PRegistro() {
  return (
    <main style={{backgroundColor:'var(--fondo)'}}>
      <Nav />
      <Welcome />
      <Registro />
    </main>
  )
}