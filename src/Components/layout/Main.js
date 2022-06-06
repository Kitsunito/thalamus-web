import AltoRendimiento from "./indexComponents/AltoRendimiento"
import Entrenadores from "./indexComponents/Entrenadores"
import VeniEntrenarte from "./indexComponents/VeniEntrenarte"
import Deportistas from "./indexComponents/Deportistas"
import ContactForm from "./indexComponents/ContactForm"
import EntrenadoresDesktop from "./indexComponents/EntrenadoresDesktop"
import DeportistasDesktop from "./indexComponents/deportistasDesktop"


const Main = () => {
    return (
        <main>
            <VeniEntrenarte />
            {window.innerWidth > 1200 ? <EntrenadoresDesktop /> : <Entrenadores />}
            <AltoRendimiento />
            {window.innerWidth > 1200 ? <DeportistasDesktop /> : <Deportistas />}
            <ContactForm />
        </main>
    )
}

export default Main