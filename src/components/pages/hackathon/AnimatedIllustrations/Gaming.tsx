import { motion } from 'framer-motion'

const Gaming = () => (
  <svg
    viewBox="0 0 240 120"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    style={{
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      strokeMiterlimit: 1.5
    }}
  >
    <g>
      <path
        d="M120,37.473l20.134,0l6.461,-5.307l0,-3.659l16.368,-0l-0,3.659l7.614,19.627l4.471,25.863l-5.581,13.837l-16.452,-1.173l-12.247,-19.241l-41.536,0l-12.247,19.241l-16.452,1.173l-5.581,-13.837l4.471,-25.863l7.614,-19.627l0,-3.659l16.368,-0l-0,3.659l6.461,5.307l20.134,0"
        style={{
          fill: 'none',
          stroke: '#00dbff',
          strokeWidth: 3
        }}
      />
      <motion.path
        d="M107.146,55.509l5.193,3.774l-1.984,6.105l-6.419,-0l-1.983,-6.105l5.193,-3.774Z"
        style={{
          fill: 'none',
          stroke: '#00dbff',
          strokeWidth: 2
        }}
        animate={{ x: [0, 2, 1, -1, 0], y: [1, -1, -3, 2, 0, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
      <path
        d="M132.854,55.509l5.193,3.774l-1.983,6.105l-6.419,-0l-1.984,-6.105l5.193,-3.774Z"
        style={{
          fill: 'none',
          stroke: '#00dbff',
          strokeWidth: 2
        }}
      />
      <g>
        <path
          d="M154.767,41.18l2.99,2.172l-1.142,3.514l-3.695,-0l-1.142,-3.514l2.989,-2.172Z"
          style={{
            fill: 'none',
            stroke: '#00dbff',
            strokeWidth: 2
          }}
        />
        <path
          d="M146.834,48.47l2.99,2.172l-1.142,3.513l-3.695,0l-1.142,-3.513l2.989,-2.172Z"
          style={{
            fill: 'none',
            stroke: '#00dbff',
            strokeWidth: 2
          }}
        />
        <path
          d="M162.7,48.47l2.99,2.172l-1.142,3.513l-3.695,0l-1.142,-3.513l2.989,-2.172Z"
          style={{
            fill: 'none',
            stroke: '#00dbff',
            strokeWidth: 2
          }}
        />
      </g>
      <motion.path
        d="M154.767,55.759l2.99,2.172l-1.142,3.514l-3.695,0l-1.142,-3.514l2.989,-2.172Z"
        style={{
          fill: 'none',
          strokeWidth: 2
        }}
        animate={{ stroke: ['#00dbff', '#22eb5e', '#22eb5e', '#00dbff'] }}
        transition={{ repeat: Infinity, duration: 0.5 }}
      />
      <g>
        <path
          d="M83.963,43.692l0,15.242"
          style={{
            fill: 'none',
            stroke: '#22eb5e',
            strokeWidth: '2.5px'
          }}
        />
        <path
          d="M76.342,51.313l15.242,-0"
          style={{
            fill: 'none',
            stroke: '#22eb5e',
            strokeWidth: '2.5px'
          }}
        />
      </g>
    </g>
  </svg>
)

export default Gaming
