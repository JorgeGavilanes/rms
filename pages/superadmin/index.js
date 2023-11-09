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
            'creditos' : 1
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

    const superadminData = [
        {
            'titulo' : 'Dashboard',
            'ruta' : '/superadmin',
            'icon' : [Icons.home]
        },
        {
            'titulo' : 'Superadmins',
            'ruta' : '/superadmin',
            'icon' : [Icons.users]
        },
        {
            'titulo' : 'Restaurantes',
            'ruta' : '/superadmin',
            'icon' : [Icons.locals]
        },
    ]

    return (
        <>
            <NavAuth rol={0} data={superadminData}/>
            <main style={{gap:'.5em', display:'flex', flexDirection:'column'}}>
                <Usuarios title={'Superadmins'} data={data}/>
                <Restaurantes data={restaurantes}/>
            </main>
        </>
    )
}