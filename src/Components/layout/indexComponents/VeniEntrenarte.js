import { motion } from "framer-motion";
import { title1Variants } from "../../../animations";
import { useInView } from "react-intersection-observer";

const VeniEntrenarte = () => {
    const { ref, inView } = useInView();

    return (
        <article ref={ref} className="index-section">
            {window.innerWidth < 1200 ? <img class="ajusteBG" src="/images/backGrounds/veniEntrenarteMobile.webp" alt="" /> : <img src="/images/backGrounds/veniEntrenarte.webp" alt="" />}
            {inView ? <motion.h2 variants={title1Variants}
                initial="hidden"
                animate="visible"
                exit="exit">VENI A <span>ENTRENARTE</span> </motion.h2> :
                null}

        </article>

    )
}

export default VeniEntrenarte