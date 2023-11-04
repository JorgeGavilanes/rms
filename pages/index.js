import { Login, Registro } from '/components/formulario'
import Nav from '/components/nav'
import Welcome from '/components/welcome'

export default function Home() {
  return (
    <main style={{backgroundColor:'var(--fondo)'}}>
      <Nav />
      <Welcome />
      <Login />
    </main>
  )
}