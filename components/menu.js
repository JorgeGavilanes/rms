import Styles from "./menu.module.css"

export default function CMenu(){
    return (
        <main className={Styles.container}>
            <h2
                className="Titulo"
                style={{ color : `color1`}}
            >Menú</h2>
                <section
                    className={Styles.categorias}
                >
                    <hr
                        className={Styles.separador}
                        style={{ backgroundColor : `color3`}}
                    />
                    <section
                        className={Styles.gridTemplate}>
                        <h3
                            className={Styles.categoria_titulo}
                            style={{ color: `color2` }}
                        >Productos</h3>
                        <h3 className={Styles.categoria_precio}>Precio</h3>
                    </section>
                        <section
                            className={Styles.gridTemplate}>
                            <section className={Styles.categoria_producto}>
                                <h4 className={Styles.categoria_producto_titulo}>Nombre</h4>
                                <p className={Styles.categoria_producto_desc}>Descripcion</p>
                            </section>
                            <h4 className={Styles.categoria_producto_precio}>$1.03</h4>
                        </section>
                    <section
                        className={Styles.gridTemplate}>
                        <h3
                            className={Styles.categoria_producto_adicionales}
                        >Adicionales</h3>
                    </section>
                        <section
                            className={Styles.gridTemplate}
                        >
                            <h4 className={Styles.categoria_producto_titulo}>Nombre</h4>
                            <h4 className={Styles.categoria_producto_precio}>$2.50</h4>
                        </section>
                </section>
        </main>
    )
}