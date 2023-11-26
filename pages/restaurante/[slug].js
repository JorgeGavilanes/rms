import NavPublic from "/components/navPublic"
import GuppyDigital from "/components/guppydigital"
import CMenu from "@/components/menu";
import icons from "@/components/icons";
        

const Restaurante = () => {
    const restaurante = {
        'nombre' : 'Res1',
        'url_img' : null,
        "color1": "#008ADD",
        "color2": "#2598DD",
        "fondo": "#E4EFFF",
        "categorias": {
            "data": [
                {
                    "id": 1,
                    "attributes": {
                        "nombre": "Hamburguesas",
                        "productos": {
                            "data": [
                                {
                                    "id": 1,
                                    "attributes": {
                                        "nombre": "hamburguesa sencilla",
                                        "descripcion": null,
                                        "precio": 1.50,
                                    }
                                },
                                {
                                    "id": 2,
                                    "attributes": {
                                        "nombre": "hamburguesa completa",
                                        "descripcion": 'Pan, salsas, carne de res, lechuga, tomate, mozarella, pollo, cheedar, carne de cerdo, tocino, chorizo, chimichurri.',
                                        "precio": 7,
                                    }
                                }
                            ]
                        },
                        "extras": {
                            "data": [
                                {
                                    "id": 1,
                                    "attributes": {
                                        "nombre": "salsa picante",
                                        "precio": 10,
                                    }
                                }
                            ]
                        }
                    }
                },
                {
                    "id": 2,
                    "attributes": {
                        "nombre": "Hotdogs",
                        "productos": {
                            "data": []
                        },
                        "extras": {
                            "data": []
                        }
                    }
                }
            ]
        }
    }

    return(
        <div style={{background:`${restaurante.fondo}`}}>
            <NavPublic
                logo={(restaurante.url_img != null) ? restaurante.url_img : icons.locals}
                title={restaurante.nombre}
            />
            <CMenu data={restaurante}/>
            <GuppyDigital />
        </div>
    )
}

export default Restaurante;