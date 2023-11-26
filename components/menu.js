import Styles from "./menu.module.css"

export default function CMenu({data}){
    const categorias = data.categorias.data;

    return (
        <main className={Styles.container}>
            <h2
                className="Titulo"
                style={{ color : data.color1}}
            >Menú</h2>
                <section
                    className={Styles.categorias}
                >
                    <hr
                        className={Styles.separador}
                        style={{ backgroundColor : data.fondo}}
                    />
                    {
                        categorias.map((categoria, key) => {
                            const productos = categoria.attributes.productos.data;
                            const adicionales = categoria.attributes.extras.data;

                            return (
                                <>
                                    <section
                                        className={Styles.gridTemplate}
                                        key={key}
                                    >
                                        <h3
                                            className={Styles.categoria_titulo}
                                            style={{ color: data.color2 }}
                                        >{categoria.attributes.nombre}</h3>
                                        <h3 className={Styles.categoria_precio}>Precio</h3>
                                    </section>
                                    {
                                        productos
                                        .map((producto, key1) => {
                                            return (
                                                <section
                                                    className={Styles.gridTemplate}
                                                    key={key1}
                                                >
                                                    <section className={Styles.categoria_producto}>
                                                        <h4 className={Styles.categoria_producto_titulo}>{producto.attributes.nombre}</h4>
                                                        <p className={Styles.categoria_producto_desc}>{producto.attributes.descripcion}</p>
                                                    </section>
                                                    <h4 className={Styles.categoria_producto_precio}>${producto.attributes.precio}</h4>
                                                </section>
                                            )
                                        })
                                    }
                                    {
                                        adicionales.map((adicional, key2) => {
                                            return (
                                                <section key={key2}>
                                                    <section
                                                        className={Styles.gridTemplate}>
                                                        <h3
                                                            className={Styles.categoria_producto_adicionales}
                                                        >Adicionales</h3>
                                                    </section>
                                                    <section
                                                        className={Styles.gridTemplate}
                                                    >
                                                        <h4 className={Styles.categoria_producto_titulo}>{adicional.attributes.nombre}</h4>
                                                        <h4 className={Styles.categoria_producto_precio}>${adicional.attributes.precio}</h4>
                                                    </section>
                                                </section>
                                            )
                                        })
                                    }
                                    <hr
                                        className={Styles.separador}
                                        style={{ backgroundColor : data.fondo}}
                                    />
                                </>
                            )
                        })
                    }
                </section>
        </main>
    )
}