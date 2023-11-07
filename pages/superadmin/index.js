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

    const restaurantes = [
        {
            'id': 1,
            'nombre' : 'Res1',
            'admin' : 'admin@admin.com',
            'fecha' : '01 de diciembre del 2023',
            'nUsuarios' : 3,
            'creditos' : 21
        },
        {
            'id': 1,
            'nombre' : 'Res1',
            'admin' : 'admin@admin.com',
            'fecha' : '01 de diciembre del 2023',
            'nUsuarios' : 3,
            'creditos' : 21
        },
        {
            'id': 1,
            'nombre' : 'Res1',
            'admin' : 'admin@admin.com',
            'fecha' : '01 de diciembre del 2023',
            'nUsuarios' : 3,
            'creditos' : 21
        },
        {
            'id': 1,
            'nombre' : 'Res1',
            'admin' : 'admin@admin.com',
            'fecha' : '01 de diciembre del 2023',
            'nUsuarios' : 3,
            'creditos' : 21
        },
        {
            'id': 1,
            'nombre' : 'Res1',
            'admin' : 'admin@admin.com',
            'fecha' : '01 de diciembre del 2023',
            'nUsuarios' : 3,
            'creditos' : 21
        }
    ]

    return (
        <>
            <NavAuth rol={0}/>
            <main style={{gap:'.5em', display:'flex', flexDirection:'column'}}>
                <Usuarios title={'Superadmins'} data={data}/>
                <Restaurantes data={restaurantes}/>
            </main>
        </>
    )
}