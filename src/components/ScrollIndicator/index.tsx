import React from 'react'
import { ScrollIndicatorContainer, ArrowIcon } from './styles'
import arrowIcon from '../../assets/ArrowCircleDown.png'
import { ScrollIndicatorProps } from './types'

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  size = 40,
  targetSectionId,
  onClick,
}) => {
  const handleClick = (): void => {
    if (onClick) {
      onClick()
      return
    }

    if (targetSectionId) {
      const targetElement = document.getElementById(targetSectionId)
      if (targetElement) {
        const headerOffset = 80
        const elementPosition = targetElement.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
        return
      }
    }

    const sections = Array.from(
      document.querySelectorAll('section[id]')
    ) as HTMLElement[]
    
    if (sections.length === 0) return

    const scrollPosition = window.scrollY + window.innerHeight / 2

    for (let i = 0; i < sections.length; i++) {
      const sectionTop = sections[i].offsetTop
      const sectionBottom = sectionTop + sections[i].offsetHeight

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        const nextSection = sections[i + 1]
        if (nextSection) {
          const headerOffset = 80
          const offsetPosition = nextSection.offsetTop - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          })
        }
        return
      }
    }

    if (sections[0]) {
      const headerOffset = 80
      const offsetPosition = sections[0].offsetTop - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <ScrollIndicatorContainer size={size} onClick={handleClick}>
      <ArrowIcon src={arrowIcon} alt="Scroll down" />
    </ScrollIndicatorContainer>
  )
}

export default ScrollIndicator