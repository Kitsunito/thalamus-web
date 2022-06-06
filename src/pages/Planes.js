import { motion } from "framer-motion";
import { containerVariants, plansVariants } from "../animations";

const Planes = () => {
    return (
        <motion.main className="planes"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <section>
                <motion.article className="bg-1"
                    variants={plansVariants}
                >
                    <h2>PLANES</h2>
                    <h3>Instroducción</h3>
                    <p>Desde Thalamus buscamos que el deportista aprenda a creer en un <span>PROCESO</span> a corto,
                        mediano y largo plazo sobre todo. Buscamos generarle un hábito de <span>CONSTANCIA</span> a
                        través del deporte y el entrenamiento pero que después se transforma en algo
                        aplicable al dia a dia. Y por último que entienda que para poder cumplir sus
                        objetivos debe saber lo que significa el valor del <span>ESFUERZO</span>, que por más talento
                        y capacidades que tenga debe entender que esta parte es fundamental en un proceso
                        de entrenamiento de Alto Rendimiento. Nuestros entrenadores buscan generar un
                        vínculo con los deportistas y brindarles todas las herramientas que estén a su
                        alcance.</p>
                </motion.article>
                <motion.article className="bg-2"
                    variants={plansVariants}
                >
                    <h3># 1</h3>
                    <p>Una vez que el deportista tiene su primer contacto con Thalamus se le realiza una
                        pequeña entrevista para ver cuales son sus objetivos, si tuvo alguna lesión previa
                        o en el último tiempo.</p>
                </motion.article>
                <motion.article className="bg-1"
                    variants={plansVariants}
                >
                    <h3># 2</h3>
                    <p>Una vez que comienza de acuerdo al nivel, sus objetivos y lo que venía realizando
                        por lo general se realiza de una a dos semanas de adaptación para conocerlo y ver
                        como se mueve básicamente. Una vez que cumple ese periodo se planifica un mesociclo
                        de 4 semanas que se irá modificando.</p>
                </motion.article>
                <motion.article className="bg-2"
                    variants={plansVariants}
                >
                    <h3># 3</h3>
                    <p>Una vez cumplido el periodo de adaptación del deportista comenzara con su planificación
                        individual y personalizada en donde se le realizará un seguimiento diario.</p>
                </motion.article>
                <motion.article className="bg-1"
                    variants={plansVariants}
                >
                    <h3># 4</h3>
                    <p>Cada plan es individual, en donde el deportista tendrá la opción de elegir un plan
                        con evaluaciones, esto quiere decir que se le realizara una batería de evaluaciones
                        de fuerza - potencia - asimetrías entre una pierna y otra. Estas evaluaciones
                        incluyen un test de fuerza en un press de pecho, dominadas, sentadillas, peso muerto,
                        derivados olímpicos (una cargada de colgado y un arranque de potencia) y por ultimo
                        un test de saltos (CMJ y un hop jump a una pierna).</p>
                </motion.article>
                <motion.article className="bg-2"
                    variants={plansVariants}
                >
                    <h3># 5</h3>
                    <p>El costo de los planes irá variando de acuerdo a los días que venga el deportista y
                        si realiza o no evaluaciones.</p>
                </motion.article>
                <motion.article className="bg-1"
                    variants={plansVariants}
                >
                    <h3># 6</h3>
                    <p>Un punto a tener en cuenta es que el deportista cuenta con un soporte y seguimiento
                        online (vía whatsapp) en donde podra hablar con su entrenador por cualquier motivo
                        deportivo que necesite. Al deportista se le brinda la facilidad en el caso de que
                        sufra una lesión o algun caso del estilo poder contar con la atención de un medico
                        y un diagnostico inmediato para así poder en menos de 24hs saber que tiene y así
                        poder tratar lo antes posible para acelerar la recuperación.</p>
                </motion.article>
            </section>
        </motion.main>
    );
}

export default Planes;