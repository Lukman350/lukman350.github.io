import { motion } from "framer-motion"

import { styles } from "../styles"
import { staggerContainer } from "../utils/motion"

const SectionWrapper = (Component, idName) => function HOC() {
  return (
    <motion.section>
      <motion.div
        variants={staggerContainer()}
        className={`relative z-0 mx-auto max-w-7xl ${styles.paddingX} ${styles.paddingY}`}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <span className="hash-span" id={idName}>&nbsp;</span>
        <Component />
      </motion.div>
    </motion.section>
  )
}

export default SectionWrapper