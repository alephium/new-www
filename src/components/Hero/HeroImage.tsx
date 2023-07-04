import { useEffect, useState } from 'react'
import styled from 'styled-components'

import HeroDarkFrontImage from '../../images/hero-dark-front.svg'
import HeroDarkMiddleImage from '../../images/hero-dark-middle.svg'
import HeroDarkBackImage from '../../images/hero-dark-back.svg'
import HeroLightBackImage from '../../images/hero-light-back.svg'
import HeroLightMiddleImage from '../../images/hero-light-middle.svg'
import HeroLightFrontImage from '../../images/hero-light-front.svg'
import { deviceBreakPoints } from '../../styles/global-style'
import ParallaxWrapper from '../ParallaxWrapper'

interface HeroImageProps {
  slide: number
  layer: 'front' | 'middle' | 'back'
  parallaxSpeed: number
  className?: string
}

const HeroImage = ({ slide, layer, parallaxSpeed, className }: HeroImageProps) => {
  const [initiallyHidden, setInitiallyHidden] = useState(true)
  const [fadeIn, setFadeIn] = useState(false)

  const imageSlide1 = {
    front: HeroDarkFrontImage,
    middle: HeroDarkMiddleImage,
    back: HeroDarkBackImage
  }[layer]

  const imageSlide2 = {
    front: HeroLightFrontImage,
    middle: HeroLightMiddleImage,
    back: HeroLightBackImage
  }[layer]

  useEffect(() => {
    setInitiallyHidden(false)
    setFadeIn(true)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(false)
    }, 1000)
  }, [fadeIn])

  return (
    <ParallaxWrapper className={className} speed={parallaxSpeed}>
      <Image
        src={imageSlide1}
        className={
          layer + (slide === 1 ? ' hidden' : '') + (fadeIn ? ' fade-in' : '') + (initiallyHidden ? ' hidden' : '')
        }
        alt="Layer of dark graphic background element"
      />
      <Image
        src={imageSlide2}
        className={layer + (slide === 0 ? ' hidden' : '')}
        alt="Layer of dark graphic background element"
      />
    </ParallaxWrapper>
  )
}

export default styled(HeroImage)`
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;

  @media ${deviceBreakPoints.tablet} {
    filter: brightness(0.5);
  }
`

const Image = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 100%;
  top: 0;
  transition: opacity 0.1s ease-in-out;

  &.hidden {
    opacity: 0;
  }

  &.front {
    transition-duration: 0.1s;
  }

  &.middle {
    transition-duration: 0.3s;
  }

  &.back {
    transition-duration: 0.5s;
  }

  &.fade-in {
    transition-duration: 0.5s;
  }
`
