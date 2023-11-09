import NavPublic from "/components/navPublic"
import GuppyDigital from "/components/guppydigital"
import CMenu from "@/components/menu";
        

const Restaurante = ({ restaurante }) => {
    return(
        <div style={{background:`color3`}}>
            <NavPublic
                logo="logod"
                title="title"
            />
            <CMenu />
            <GuppyDigital />
        </div>
    )
}

export default Restaurante;