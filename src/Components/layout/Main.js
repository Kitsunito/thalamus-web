import AltoRendimiento from "./indexComponents/AltoRendimiento"
import Entrenadores from "./indexComponents/Entrenadores"
import VeniEntrenarte from "./indexComponents/VeniEntrenarte"
import Deportistas from "./indexComponents/Deportistas"
import ContactForm from "./indexComponents/ContactForm"
import EntrenadoresDesktop from "./indexComponents/EntrenadoresDesktop"
import DeportistasDesktop from "./indexComponents/deportistasDesktop"

const Main = () => {
    if (window.innerWidth > 1200) {
        return (
            <main>
                <VeniEntrenarte />
                <EntrenadoresDesktop />
                <AltoRendimiento />
                <DeportistasDesktop />
                <ContactForm />
            </main>
        )
    } else {
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
}

export default Main