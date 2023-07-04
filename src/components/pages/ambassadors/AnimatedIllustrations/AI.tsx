import { useEffect } from 'react'
import { stagger, useAnimate } from 'framer-motion'

const AI = () => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate('path', { stroke: ['#22eb5e', '#00dbff'] }, { duration: 0.3, repeat: Infinity, delay: stagger(0.1) })
  }, [animate, scope])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeMiterlimit="1.5"
      clipRule="evenodd"
      viewBox="0 0 1000 500"
    >
      <g transform="translate(-1743.22 -1705.91) matrix(.20159 0 0 .14254 1743.22 1705.91)">
        <path fill="none" d="M0 0H4960.63V3507.87H0z"></path>
        <g>
          <path
            fill="none"
            stroke="#00dbff"
            strokeWidth="10.85"
            d="M2051.28 2117.08v-176.96h68.1v-114.7h129.27v114.7h68.1v176.96"
            transform="matrix(5.71587 0 0 8.08387 -10003.2 -13914.5)"
          ></path>
          <path
            fill="none"
            stroke="#00dbff"
            strokeWidth="11.32"
            d="M2147.62 1880.72l18.98-18.98 18.99 18.98"
            transform="matrix(5.47881 0 0 7.7486 -9537.54 -13304.3)"
          ></path>
          <path
            fill="none"
            stroke="#00dbff"
            strokeWidth="11.32"
            d="M2147.62 1880.72l18.98-18.98 18.99 18.98"
            transform="matrix(5.47881 0 0 7.7486 -9242.64 -13304.3)"
          ></path>
          <g ref={scope}>
            <path
              fill="none"
              stroke="#00dbff"
              strokeWidth="11"
              d="M2137.47 1913v21.45"
              transform="matrix(5.71587 0 0 11.6013 -9737.16 -20714.9)"
            ></path>
            <path
              fill="none"
              stroke="#00dbff"
              strokeWidth="11"
              d="M2137.47 1913v21.45"
              transform="matrix(5.71587 0 0 8.2587 -9913.06 -14320.5)"
            ></path>
            <path
              fill="none"
              stroke="#00dbff"
              strokeWidth="11"
              d="M2137.47 1913v21.45"
              transform="matrix(5.71587 0 0 8.2587 -9561.27 -14320.5)"
            ></path>
          </g>
          <path
            fill="none"
            stroke="#00dbff"
            strokeWidth="10.85"
            d="M2184.01 1825.42v-37.16"
            transform="matrix(5.71587 0 0 8.08387 -10003.2 -13914.5)"
          ></path>
          <path
            fill="none"
            stroke="#00dbff"
            strokeWidth="3.62"
            d="M2137.47 1913v21.45"
            transform="matrix(5.71587 0 0 33.3302 -10106.6 -61276)"
          ></path>
          <path
            fill="none"
            stroke="#00dbff"
            strokeWidth="3.62"
            d="M2137.47 1913v21.45"
            transform="matrix(5.71587 0 0 33.3302 -9367.55 -61276)"
          ></path>
          <path
            fill="none"
            stroke="#22eb5e"
            strokeWidth="14.43"
            d="M2138.48 1852.58H2179.167V1893.992H2138.48z"
            transform="matrix(4.29645 0 0 6.07641 -6794.99 -10948.8)"
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default AI
