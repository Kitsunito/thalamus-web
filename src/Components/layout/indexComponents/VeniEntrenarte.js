import { motion } from "framer-motion";
import { titlesVariants } from "../../../animations";
import { useInView } from "react-intersection-observer";

const VeniEntrenarte = () => {
    const { ref, inView } = useInView();

    return (
        <article ref={ref} className="index-section">
            <img class="ajusteBG" src="/images/backGrounds/veniEntrenarte.jpeg" alt="" />
            {inView ? <motion.h2 variants={titlesVariants}
                initial="hidden"
                animate="visible"
                exit="exit">VENI A <span>ENTRENARTE</span> </motion.h2> :
                null}

        </article>

    )
}

export default VeniEntrenarte