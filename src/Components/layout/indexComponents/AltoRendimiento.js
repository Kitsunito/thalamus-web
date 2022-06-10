import { motion } from "framer-motion";
import { title2Variants } from "../../../animations";
import { useInView } from "react-intersection-observer";


const AltoRendimiento = () => {
    const { ref, inView } = useInView();

    return (
        <article ref={ref} className="index-section">
            {window.innerWidth < 1200 ? <img src="/images/backGrounds/altoRendimientoMobile.webp" alt="" /> : <img src="/images/backGrounds/altoRendimiento.webp" alt="" />}
            {inView ? <motion.h2 variants={title2Variants}
                initial="hidden"
                animate="visible"
                exit="exit">DEPORTISTAS <span>DE ALTO RENDIMIENTO</span> </motion.h2> :
                null}

        </article>

    )
}

export default AltoRendimiento