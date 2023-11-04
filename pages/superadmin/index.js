import { NavAuth } from "@/components/nav";
import Restaurantes from "@/components/restaurantes";
import Usuarios from "@/components/usuarios";

export default function Superadmin(){
    const data = [
        {
            'usuario' : 'Jorge Gavilanes',
            'estado' : false
        },
        {
            'usuario' : 'Guppy Digital',
            'estado' : true
        },
        {
            'usuario' : 'Luis Gavilanes',
            'estado' : true
        }
    ]

    return (
        <>
            <NavAuth/>
            <main style={{gap:'.5em', display:'flex', flexDirection:'column'}}>
                <Usuarios title={'Superadmins'} data={data}/>
                <Restaurantes />
            </main>
        </>
    )
}