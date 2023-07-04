import { motion } from 'framer-motion'

const NFTs = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    strokeMiterlimit="1.5"
    clipRule="evenodd"
    viewBox="0 0 240 120"
  >
    <path fill="none" d="M0 0H240V120H0z"></path>
    <g fill="none">
      <g stroke="#22eb5e" strokeWidth="3">
        <path d="M90.823 22.29H149.178V97.709H90.823z"></path>
        <path d="M82.296 11.271H157.704V108.73H82.296z"></path>
      </g>
      <motion.g stroke="#00dbff" animate={{ y: [-5, 0, -5] }} transition={{ repeat: Infinity, duration: 5 }}>
        <path
          strokeWidth="3"
          d="M141.075 93.84V75.161l-5.735-10.208-3.95-5.913-3.206-7.09v-5.634l-2.633-6.015-7.744-4.093-7.236 7.801V59.04l3.06 4.018-9.356 7.118-3.11 5.761-2.501 15.053 24.832 5.76 2.783-2.91L120 88.852l-9.429-3.317v-6.893"
        ></path>
        <path strokeWidth="3" d="M131.151 81.002l2.564 7.85-12.595.89"></path>
        <path
          strokeWidth="2"
          d="M113.95 50.287h3.918M120.113 50.287h3.918M117.148 57.165h4.204l1.509-.788M127.755 50.287v16.192M130.9 59.04v8.288M133.868 62.212v5.894M112.433 43.391l15.322 1.945"
        ></path>
      </motion.g>
    </g>
  </svg>
)

export default NFTs
