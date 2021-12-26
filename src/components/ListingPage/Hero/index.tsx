import React from 'react'
import { HeroType, SiteData, Theme } from '../../../utils/models'
import Body2 from './body2'
import Navbar2 from './navbar2'

interface Props {
  siteData: SiteData
  theme: Theme
  isDarkMode: boolean
  handleDarkModeClick: () => void
}

const Hero: React.FC<Props> = ({ siteData, theme, isDarkMode, handleDarkModeClick }) => {
  const { heroType } = siteData

  const heroBg = heroType === HeroType.SIMPLE || heroType === HeroType.SIMPLE_CENTER ? `bg-${theme.primary}` : ''

  const isCenter = heroType === HeroType.SIMPLE_CENTER || heroType === HeroType.MINIMAL_CENTER ? true : false

  return (
    <div className={heroBg}>
      <Navbar2
        title={siteData.siteName}
        logo={siteData.siteLogo}
        theme={theme}
        isDarkMode={isDarkMode}
        heroType={heroType}
        handleDarkModeClick={handleDarkModeClick}
      />
      <Body2 siteData={siteData} theme={theme} heroType={heroType} isCenter={isCenter} />
    </div>
  )
}

export default Hero
