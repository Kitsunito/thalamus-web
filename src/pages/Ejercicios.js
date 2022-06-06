import EjerciciosDesktop from "./EjerciciosDesktop"
import EjerciciosMobile from "./EjerciciosMobile"

const Ejercicios = () => {
    if (window.innerWidth > 1200) {
        return (
            <EjerciciosDesktop />
        )
    } else {
        return (
          <EjerciciosMobile />
        )
    }
}

export default Ejercicios