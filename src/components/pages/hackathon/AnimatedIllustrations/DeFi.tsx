import { useEffect } from 'react'
import { stagger, useAnimate } from 'framer-motion'

const DeFi = () => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate('g', { opacity: [0, 1, 0] }, { duration: 3, repeat: Infinity, delay: stagger(1.5) })
  }, [animate, scope])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeMiterlimit="1.5"
      clipRule="evenodd"
      viewBox="0 0 1000 500"
    >
      <g ref={scope} transform="translate(-1743.22 -1089.5) matrix(.20159 0 0 .14254 1743.22 1089.5)">
        <path fill="none" d="M0 0H4960.63V3507.87H0z"></path>
        <g>
          <path
            fill="none"
            stroke="#00dbff"
            strokeWidth="12.5"
            d="M3006.01 1244.35l134.09 77.42v125.83l-134.09 77.42-134.09-77.42v-125.83l134.09-77.42z"
            transform="translate(-72.254) matrix(4.96063 0 0 7.01575 -11486 -8126.7)"
          ></path>
          <path
            fill="none"
            stroke="#00dbff"
            strokeWidth="12.5"
            d="M3140.1 1400.32v47.28l-134.09 77.42-134.09-77.42v-47.28l134.09 77.41 134.09-77.41z"
            transform="translate(-72.254) matrix(4.96063 0 0 7.01575 -11486 -7794.65)"
          ></path>
          <path
            fill="none"
            stroke="#00dbff"
            strokeWidth="20.83"
            d="M3130.02 1394.06v-42.04"
            transform="translate(-72.254) translate(-29.514 -44.51) matrix(4.96063 0 0 7.01575 -12225 -7643.67)"
          ></path>
          <path
            fill="none"
            stroke="#00dbff"
            strokeWidth="20.83"
            d="M3130.02 1394.06v-42.04"
            transform="translate(-72.254) translate(-29.514 -44.51) matrix(4.96063 0 0 7.01575 -11916.2 -8343.69)"
          ></path>
          <path
            fill="none"
            stroke="#00dbff"
            strokeWidth="20.83"
            d="M3466.86 1263l79.72 118.9"
            transform="translate(-72.254) translate(-29.514 -44.51) matrix(4.96063 0 0 7.01575 -13940 -7643.67)"
          ></path>
        </g>
        <g>
          <path
            fill="none"
            stroke="#22eb5e"
            strokeWidth="12.5"
            d="M3006.01 1244.35l134.09 77.42v125.83l-134.09 77.42-134.09-77.42v-125.83l134.09-77.42z"
            transform="translate(-72.254) matrix(4.96063 0 0 7.01575 -13232.3 -8126.7)"
          ></path>
          <path
            fill="none"
            stroke="#22eb5e"
            strokeWidth="12.5"
            d="M3140.1 1400.32v47.28l-134.09 77.42-134.09-77.42v-47.28l134.09 77.41 134.09-77.41z"
            transform="translate(-72.254) matrix(4.96063 0 0 7.01575 -13232.3 -7794.65)"
          ></path>
          <path
            fill="none"
            stroke="#22eb5e"
            strokeWidth="12.5"
            d="M3131.94 1272.62v95.78h-15.38 88.15v-54.23h-45.8 28.47V1259h-69.47"
            transform="translate(-72.254) matrix(4.96063 0 0 7.01575 -14037.2 -7643.67)"
          ></path>
          <path
            fill="none"
            stroke="#22eb5e"
            strokeWidth="11.85"
            d="M3150.02 1243.54v-21.96"
            transform="translate(-72.254) matrix(4.96063 0 0 7.76949 -13917.2 -8564.42)"
          ></path>
          <path
            fill="none"
            stroke="#22eb5e"
            strokeWidth="11.85"
            d="M3150.02 1243.54v-21.96"
            transform="translate(-72.254) matrix(4.96063 0 0 7.76949 -13917.2 -7439.65)"
          ></path>
          <path
            fill="none"
            stroke="#22eb5e"
            strokeWidth="11.85"
            d="M3150.02 1243.54v-21.96"
            transform="translate(-72.254) matrix(4.96063 0 0 7.76949 -14049.6 -8564.42)"
          ></path>
          <path
            fill="none"
            stroke="#22eb5e"
            strokeWidth="11.85"
            d="M3150.02 1243.54v-21.96"
            transform="translate(-72.254) matrix(4.96063 0 0 7.76949 -14049.6 -7439.65)"
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default DeFi
