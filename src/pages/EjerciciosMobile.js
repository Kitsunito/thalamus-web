import { motion } from "framer-motion";
import { containerVariants, plansVariants } from "../animations";


const EjerciciosMobile = () => {
    return (
        <motion.main className="ejerciciosMobile"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit">
            <motion.section className="bg-1 firstSection"
                variants={plansVariants}
            >
                <h2>EJERCICIOS</h2>
                <h3>De fuerza básica de MM.II</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLx2jwbxdaQHSx8RAqsevnbBENGWBS7NQD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </motion.section>
            <motion.section className="bg-2"
                variants={plansVariants}
            >
                <h3>Trabajo de estabilidad</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLx2jwbxdaQHRDq6vAycANSVEXg1QlG-P2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </motion.section>
            <motion.section className="bg-1"
                variants={plansVariants}
            >
                <h3>Entrenamiento Físico - Cognitivo</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLx2jwbxdaQHQDajyl71RofZe_KBUupwZh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </motion.section>
            <motion.section className="bg-2"
                variants={plansVariants}
            >
                <h3>De potencia de MM.II</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLx2jwbxdaQHQhqPWB9iyGwTSG0SGwiwSg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </motion.section>
            <motion.section className="bg-1"
                variants={plansVariants}
            >
                <h3>Técnica de carrera</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLx2jwbxdaQHSv_YIU3jIpH7BRECgH7cSe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </motion.section>
            <motion.section className="bg-2"
                variants={plansVariants}
            >
                <h3>Movilidad - Flexibilidad</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLx2jwbxdaQHQr-PTJ00QxKaBhJY6iuBVG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </motion.section>
            <motion.section className="bg-1"
                variants={plansVariants}
            >
                <h3>Pliometría - Fuerza reactiva</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLx2jwbxdaQHQkMHzyqGoycsUW3THG67KW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </motion.section>
            <motion.section className="bg-2"
                variants={plansVariants}
            >
                <h3>Secundarios de MM.II</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLx2jwbxdaQHSA8q5nvRPJ9u8WwE4Ygu0q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </motion.section>
            <motion.section className="bg-1"
                variants={plansVariants}
            >
                <h3>Secundarios de MM.SS</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLx2jwbxdaQHT_sj4SBzfmd1QwX-iywboL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </motion.section>

            <motion.section className="bg-2"
                variants={plansVariants}
            >
                <h3>Zona media</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLx2jwbxdaQHR9VKu1rK9BVML1wTZlMXcy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></motion.section>

            <motion.section className="bg-1"
                variants={plansVariants}
            >
                <h3>De fuerza isometrica</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLx2jwbxdaQHSQuDUCfMLdQGfiTAzvPQcZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </motion.section>

        </motion.main>
    )
}

export default EjerciciosMobile