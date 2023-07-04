import { motion } from 'framer-motion'

const Tooling = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    strokeMiterlimit="1.5"
    clipRule="evenodd"
    viewBox="0 0 240 120"
  >
    <path fill="none" d="M0 0H240V120H0z"></path>
    <motion.g
      fill="none"
      strokeWidth="3"
      animate={{ rotate: [-5, 0, 5, 0, -5] }}
      transition={{ repeat: Infinity, duration: 6 }}
      style={{ scale: 0.9 }}
    >
      <path
        stroke="#00dbff"
        d="M85.09 92.951l45.182-45.182V27.484l9.637-9.637 15.387 1.545-10.652 10.652 1.697 10.859 10.858
      1.697 10.652-10.652 1.546 15.386-9.637 9.637h-20.286l-45.182 45.182-9.202-9.202z"
      ></path>
      <path
        stroke="#22eb5e"
        d="M132.652 70.693l22.258 22.258-9.202 9.202-21.509-21.509M106.915 63.36l-6.389-6.389H80.24l-9.637-9.637 1.546-15.386L82.801 42.6l10.858-1.697 1.697-10.859-10.652-10.652 15.387-1.545 9.637 9.637v20.285l5.669 5.669"
      ></path>
    </motion.g>
  </svg>
)

export default Tooling
