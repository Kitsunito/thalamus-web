import AltoRendimiento from "./indexComponents/AltoRendimiento"
import Entrenadores from "./indexComponents/Entrenadores"
import VeniEntrenarte from "./indexComponents/VeniEntrenarte"
import Deportistas from "./indexComponents/Deportistas"
import ContactForm from "./indexComponents/ContactForm"
import EntrenadoresDesktop from "./indexComponents/EntrenadoresDesktop"
import DeportistasDesktop from "./indexComponents/deportistasDesktop"

import { motion } from "framer-motion";
import { containerVariants } from "../../animations.js"

const Main = () => {
    return (
        <motion.main
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit">
            <VeniEntrenarte />
            {window.innerWidth > 1200 ? <EntrenadoresDesktop /> : <Entrenadores />}
            <AltoRendimiento />
            {window.innerWidth > 1200 ? <DeportistasDesktop /> : <Deportistas />}
            <ContactForm />
        </motion.main>
    )
}

export default Main