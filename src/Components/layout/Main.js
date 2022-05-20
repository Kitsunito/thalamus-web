import AltoRendimiento from "./indexComponents/AltoRendimiento"
import Entrenadores from "./indexComponents/Entrenadores"
import VeniEntrenarte from "./indexComponents/VeniEntrenarte"
import Deportistas from  "./indexComponents/Deportistas"
import ContactForm from "./indexComponents/ContactForm"

const Main = () => {
    return (
        <main>
            <VeniEntrenarte />
            <Entrenadores />
            <AltoRendimiento />
            <Deportistas />
            <ContactForm />
        </main>
    )
}

export default Main