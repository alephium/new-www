import { motion } from 'framer-motion'

const Interoperability = () => (
  <svg
    viewBox="0 0 240 120"
    xmlSpace="preserve"
    style={{
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      strokeMiterlimit: 1.5
    }}
  >
    <rect
      id="Interoperability"
      x={0}
      y={0}
      width={240}
      height={120}
      style={{
        fill: 'none'
      }}
    />
    <motion.g
      strokeWidth={3}
      animate={{ stroke: ['#22eb5e', '#00dbff'] }}
      transition={{ repeat: Infinity, duration: 1, repeatType: 'reverse' }}
    >
      <path
        d="M104.756,96.748l-5.346,-5.292l-0,-10.866l5.346,-5.346l5.346,5.346l0,10.866l-5.346,5.292Z"
        style={{
          fill: 'none'
        }}
      />
      <path
        d="M104.794,75.206l-0.038,-7.523l7.683,-7.683l7.561,0l0,7.561l-7.683,7.683l-7.523,-0.038Z"
        style={{
          fill: 'none'
        }}
      />
      <path
        d="M120.038,59.962l-0.038,-7.523l7.683,-7.683l7.561,-0l0,7.561l-7.683,7.683l-7.523,-0.038Z"
        style={{
          fill: 'none'
        }}
      />
      <path
        d="M135.244,44.756l-5.346,-5.292l-0,-10.866l5.346,-5.346l5.346,5.346l0,10.866l-5.346,5.292Z"
        style={{
          fill: 'none'
        }}
      />
    </motion.g>
    <motion.g
      strokeWidth={3}
      animate={{ stroke: ['#00dbff', '#22eb5e'] }}
      transition={{ repeat: Infinity, duration: 1, repeatType: 'reverse' }}
    >
      <path
        d="M135.244,96.748l5.346,-5.292l0,-10.866l-5.346,-5.346l-5.346,5.346l-0,10.866l5.346,5.292Z"
        style={{
          fill: 'none'
        }}
      />
      <path
        d="M135.206,75.206l0.038,-7.523l-7.683,-7.683l-7.561,0l0,7.561l7.683,7.683l7.523,-0.038Z"
        style={{
          fill: 'none'
        }}
      />
      <path
        d="M119.962,59.962l0.038,-7.523l-7.683,-7.683l-7.561,-0l-0,7.561l7.683,7.683l7.523,-0.038Z"
        style={{
          fill: 'none'
        }}
      />
      <path
        d="M104.756,44.756l5.346,-5.292l0,-10.866l-5.346,-5.346l-5.346,5.346l-0,10.866l5.346,5.292Z"
        style={{
          fill: 'none'
        }}
      />
    </motion.g>
  </svg>
)

export default Interoperability
