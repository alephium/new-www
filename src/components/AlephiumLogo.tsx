import { motion } from 'framer-motion'
import { useTheme } from 'styled-components'

interface AlephiumLogoProps {
  className?: string
  gradientIndex: number
}

const AlephiumLogo = ({ className, gradientIndex, ...props }: AlephiumLogoProps) => {
  const theme = useTheme()

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 268 454"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}
      className={className}
      {...props}
    >
      <g transform="matrix(1,0,0,1,-1334,-4506)">
        <g id="logo-light" transform="matrix(1.02904,0,0,1,1269.09,-0.201119)">
          <rect x="63.112" y="4506.2" width="260.243" height="453.499" style={{ fill: 'none' }} />
          <clipPath id="_clip1">
            <rect x="63.112" y="4506.2" width="260.243" height="453.499" />
          </clipPath>
          <g clipPath="url(#_clip1)">
            <g transform="matrix(1,0,0,1,-0.0464983,0)">
              <g transform="matrix(0.46324,0,0,0.476693,63.1121,4506.2)">
                <path
                  d="M187.296,627.61C187.296,615.272 177.581,606.969 165.616,609.078L21.68,634.454C9.715,636.564 -0,648.293 -0,660.63L-0,932.485C-0,944.822 9.715,953.126 21.68,951.016L165.616,925.64C177.581,923.531 187.296,911.802 187.296,899.464L187.296,627.61Z"
                  style={{ fill: theme.textPrimary, fillRule: 'nonzero' }}
                />
              </g>
              <g transform="matrix(0.46324,0,0,0.476693,63.1121,4506.2)">
                <motion.path
                  d="M561.888,18.859C561.888,6.522 552.173,-1.782 540.207,0.327L396.272,25.704C384.306,27.813 374.592,39.542 374.592,51.88L374.592,323.734C374.592,336.072 384.306,344.375 396.272,342.266L540.207,316.89C552.173,314.78 561.888,303.051 561.888,290.714L561.888,18.859Z"
                  fill="url(#logo-accent-gradient)"
                  animate={{ rotateY: gradientIndex * 360 }}
                  transition={{ duration: 0.3 }}
                />
              </g>
              <g transform="matrix(0.46324,0,0,0.476693,63.1121,4506.2)">
                <path
                  d="M210.743,82.363C205.186,70.124 190.266,62.023 177.446,64.283L23.229,91.472C10.408,93.732 4.512,105.503 10.069,117.742L351.145,868.949C356.702,881.188 371.622,889.29 384.442,887.029L538.659,859.841C551.479,857.581 557.376,845.809 551.819,833.57L210.743,82.363Z"
                  style={{ fill: theme.textPrimary, fillRule: 'nonzero' }}
                />
              </g>
            </g>
          </g>
        </g>
      </g>
      <defs>
        <linearGradient id="logo-accent-gradient" x2="-0.2" y2="1">
          <stop offset="0%" style={{ stopColor: gradients[gradientIndex][0] }} />
          <stop offset="25%" style={{ stopColor: gradients[gradientIndex][1] }} />
          <stop offset="50%" style={{ stopColor: gradients[gradientIndex][2] }} />
          <stop offset="100%" style={{ stopColor: gradients[gradientIndex][3] }} />
        </linearGradient>
      </defs>
    </svg>
  )
}

const gradients = [
  ['#fff', '#ff6f08', '#0800ff', '#00eeff'],
  ['#fff', '#ffd900', '#f200ff', '#520156'],
  ['#22eb5e', '#ffffff', '#029b30', '#22eb5e']
]

export default AlephiumLogo
