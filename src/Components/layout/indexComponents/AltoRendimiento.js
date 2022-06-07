import { motion } from "framer-motion";
import { titlesVariants } from "../../../animations";
import { useInView } from "react-intersection-observer";


const AltoRendimiento = () => {
    const { ref, inView } = useInView();

    return (
        <article ref={ref} className="index-section">
            <img src="/images/backGrounds/altoRendimiento.jpeg" alt="" />
            {inView ? <motion.h2 variants={titlesVariants}
                initial="hidden"
                animate="visible"
                exit="exit">DEPORTISTAS <span>DE ALTO RENDIMIENTO</span> </motion.h2> :
                null}

        </article>

    )
}

export default AltoRendimiento