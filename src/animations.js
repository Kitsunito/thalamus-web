const containerVariants = {
    hidden: { x: "-100vw" },
    visible: {
        x: 0,
        transition: {
            duration: 1,
            when: "beforeChildren",
            staggerChildren: 0.5
        }
    },
    exit: {
        x: "100vw",
        transition: { ease: 'easeInOut' }
    }
}

/*Planes */

const plansVariants = {
    hidden: {
        y: "-10vw",
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            mass: 0.5,
            damping: 7,
        }
    },

}
/*title */
const title1Variants = {
    hidden: {
        y: "-10vw",
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            mass: 0.5,
            damping: 7,
            delay: 1,
        }
    },

}

const title2Variants = {
    hidden: {
        y: "-10vw",
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            mass: 0.5,
            damping: 7,
            delay: .5,
        }
    },

}

const textsVariants = {
    hidden: {
        x: "10vw",
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            mass: 0.5,
            damping: 7,
            delay: .5,
        }
    },
}

/* Header */
const headerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: 0.5,
            when: "beforeChildren"
        }
    }
}

const brandNameVariants = {
    hidden: { x: "-100vw" },
    visible: {
        x: 0,
        transition: {
            type: 'spring',
            mass: 0.4,
            damping: 8,
        }
    }
}

const logoVariants = {
    hidden: {
        opacity: 0,
        rotate: -180
    },
    visible: {
        opacity: 1,
        rotate: 0,
        transition: {
            delay: 0.5,
            duration: 1,
            opacity: { duration: 0.3 }
        }
    }
}

export { containerVariants, plansVariants, headerVariants, brandNameVariants, logoVariants, title1Variants, title2Variants, textsVariants }