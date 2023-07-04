import { useEffect } from 'react'
import { stagger, useAnimate } from 'framer-motion'

const waterJetGroupTransforms = [
  '4.9606 0 0 .88759 53.66 -761.92',
  '4.9606 0 0 .2509 202.57 184.47',
  '8.6673 0 0 .51781 -1067.1 -66.134',
  '8.6673 0 0 .51781 -918.21 152.42',
  '15.28 0 0 .91285 -3300 -228.79',
  '15.28 0 0 1.6746 -3151.1 -1097',
  '15.28 0 0 2.0864 -3002.2 -1441.2',
  '15.28 0 0 1.1644 -2853.3 360.72',
  '15.28 0 0 .67921 -2704.4 1342.7',
  '15.28 0 0 .3396 -2555.4 1981.8'
]

const GenevaWaterJet = () => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate('path', { opacity: [0.3, 1] }, { duration: 0.5, repeat: Infinity, delay: stagger(0.1) })
  }, [animate, scope])

  return (
    <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.5" viewBox="0 0 1200 990">
      <g transform="translate(0 -1089.5)">
        <g transform="matrix(.2419 0 0 .28195 0 1089.5)">
          <rect width="4960.6" height="3507.9" fill="none" />
          <clipPath id="a">
            <rect width="4960.6" height="3507.9" />
          </clipPath>
          <g clipPath="url(#a)">
            <g transform="matrix(.83333 0 0 1.0111 489.7 -68.046)">
              <g transform="matrix(4.9606 0 0 3.5079 0 404.08)">
                <path d="m363.51 626.24v-593.87" fill="none" stroke="#00dbff" strokeWidth="10.42px" />
              </g>
              <g ref={scope}>
                {waterJetGroupTransforms.map((transform, index) => (
                  <g key={index} transform={`matrix(${transform})`}>
                    <path d="m382.71 1327.9v553.73" fill="none" stroke="#00dbff" strokeWidth="3px" />
                  </g>
                ))}
              </g>
            </g>
            <g transform="matrix(5.3639 -.032669 -.038077 4.4489 -213.75 -475.36)">
              <path d="m0 700.53 363.51-74.284" fill="none" stroke="#00dbff" strokeOpacity=".3" strokeWidth="8.22px" />
            </g>
            <g transform="matrix(5.7428 0 0 4.9272 3246.1 -1414.3)">
              <path d="m0 699.53 363.51-73.284" fill="none" stroke="#00dbff" strokeOpacity=".3" strokeWidth="7.5px" />
            </g>
            <g transform="matrix(4.1339 0 0 3.5467 462.41 -4239.2)">
              <path d="m375.88 1999.3h50.298" fill="none" stroke="#00dbff" strokeOpacity=".3" strokeWidth="10.42px" />
            </g>
            <g transform="matrix(4.1339 0 0 3.5467 1173.3 -4239.2)">
              <path d="m375.88 1999.3h50.298" fill="none" stroke="#00dbff" strokeOpacity=".3" strokeWidth="10.42px" />
            </g>
            <g transform="matrix(4.1339 0 0 3.5467 1381.9 -4033.4)">
              <path d="m375.88 1999.3h50.298" fill="none" stroke="#00dbff" strokeOpacity=".3" strokeWidth="10.42px" />
            </g>
            <g transform="matrix(4.1339 0 0 3.5467 898.82 -3940.5)">
              <path d="m375.88 1999.3h50.298" fill="none" stroke="#00dbff" strokeOpacity=".3" strokeWidth="10.42px" />
            </g>
            <g transform="matrix(4.1339 0 0 3.5467 1266.4 -3778.8)">
              <path d="m375.88 1999.3h50.298" fill="none" stroke="#00dbff" strokeOpacity=".3" strokeWidth="10.42px" />
            </g>
            <g transform="matrix(4.1339 0 0 3.5467 459.78 -3827.1)">
              <path d="m375.88 1999.3h50.298" fill="none" stroke="#00dbff" strokeOpacity=".3" strokeWidth="10.42px" />
            </g>
            <g transform="matrix(4.1339 0 0 3.5467 1556.4 -4373.5)">
              <path d="m375.88 1999.3h50.298" fill="none" stroke="#00dbff" strokeOpacity=".3" strokeWidth="10.42px" />
            </g>
            <g transform="matrix(4.1339 0 0 3.5467 2469.9 -4506.2)">
              <path d="m375.88 1999.3h50.298" fill="none" stroke="#00dbff" strokeOpacity=".3" strokeWidth="10.42px" />
            </g>
            <g transform="matrix(4.1339 0 0 3.5467 -481.72 -4309.2)">
              <path d="m375.88 1999.3h50.298" fill="none" stroke="#00dbff" strokeOpacity=".3" strokeWidth="10.42px" />
            </g>
            <g transform="matrix(4.1339 0 0 3.5467 -1235.2 -4033.4)">
              <path d="m375.88 1999.3h50.298" fill="none" stroke="#00dbff" strokeOpacity=".3" strokeWidth="10.42px" />
            </g>
            <g transform="matrix(4.1339 0 0 3.5467 -817.93 -3747.6)">
              <path d="m375.88 1999.3h50.298" fill="none" stroke="#00dbff" strokeOpacity=".3" strokeWidth="10.42px" />
            </g>
            <g transform="matrix(4.1339 0 0 3.5467 2736 -4869.8)">
              <path d="m375.88 1999.3h50.298" fill="none" stroke="#00dbff" strokeOpacity=".3" strokeWidth="10.42px" />
            </g>
            <g transform="matrix(4.1339 0 0 3.5467 3053.1 -4334.6)">
              <path d="m375.88 1999.3h50.298" fill="none" stroke="#00dbff" strokeOpacity=".3" strokeWidth="10.42px" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default GenevaWaterJet
