import { motion } from "framer-motion";
import { containerVariants, plansVariants} from "../animations";

const SobreNosotros = () => {
    return (
        <motion.main className="sobreNosotros"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit">
            <motion.section
            variants={plansVariants}>
                <h2>SOBRE <span>NOSOTROS</span> </h2>
                <p>Inauguramos <span>Thalamus</span> un 8 de abril de 2019 pero esta idea surgió mucho antes con Jorge Dominguez y Juan Leon Novillo. Siempre nos apasiono el deporte, tenemos la suerte de ser amigos desde chicos, y compartir muchas cosas de nuestras vidas. En 2016 los dos nos fuimos a jugar al rugby a europa por dos años, uno a españa y el otro a italia. Una vez que volvieron surgió la idea de hacer algo diferente y de brindarles a los deportistas de la provincia un entrenamiento y un manera de ver el deporte diferente.</p>
                <p>Es así como surgio la idea de abrir un Centro de Alto Rendimiento. Con mucho esfuerzo y ayuda de nuestros amigos y familiares dimos inicio a esta aventura en donde cada dia somos mas.</p>
                <p>Los dos fuimos deportistas y con los años de experiencia en el estudio y sobre todo en el deporte nos dimos cuenta del déficit que hay en el entrenamiento fisico por eso decimos dar inicio a un lugar donde los chicos no solo se entrenen de manera especifica sino que también aprendan a entrenarse muy bien ellos individualmente.</p>
                <p>El objetivo de <span>Thalamus</span> es lograr que el deportista pueda entender y saber entrenarse de manera adecuada para así poder potenciar su rendimiento dentro del campo de juego.</p>
                <p>Dentro de <span>Thalamus</span> se busca entrenar al deportista de manera individual con una planificación personalizada en base a sus objetivos - deporte - historial de lesiones en el caso de que las haya. También se le brinda un apoyo desde la parte nutritiva y de kinesiología en el caso de que lo necesite.</p>
                <p>Además de estos servicios que son todos dentro de <span>Thalamus</span>, al deportista de le brinda un soporte vía online (whatsapp, llamadas o mensajes) como así también se lo deriva a realizarse estudios con un especialista en imagenes como así también posterior a esto a un médico traumatólogo recomendado desde <span>Thalamus</span> en el caso de necesitarlo.</p>
                <p>Desde <span>Thalamus</span> no solo nos dedicamos al entrenamiento sobre un deportista de alto rendimiento, pueden venir personas que buscan mejorar su bienestar, estar mas saludables a través de un muy buen entrenamiento personalizado. Personas que sufrieron un lesion y vienen por rehabilitación. Personas que juegan deportes amateurs pero se entrenan como profesionales, niños y jóvenes que buscan aprender desde chicos y crecer a través de un proceso a corto - mediano - plazo y deportistas profesionales que vienen a realizar un entrenamiento extra para seguir rindiendo dentro del campo.</p>
                <p>Por último contarles que cada vez nos dedicamos mas a entrenar y crear procesos a largo plazo con niños de aproximadamente 8-9 años donde se los forma desde las bases para asi poder ver los frutos en un largo plazo.</p>
            </motion.section>
        </motion.main>
    )
}

export default SobreNosotros