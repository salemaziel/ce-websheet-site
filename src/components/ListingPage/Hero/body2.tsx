import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import { SiteData, Theme, HeroType } from '../../../utils/models'
import ShareButton from './share-button'
import { gtagEventClick } from '../../../utils/gtag'
import LazyHero from "react-lazy-hero";

interface Props {
  siteData: SiteData
  theme: Theme
  heroType: HeroType
  isCenter: boolean
}

const Body2: React.FC<Props> = ({ siteData, theme, heroType, isCenter }) => {
  const { primary, background, text, subtext } = theme
  const { heroTitle, heroDescription, heroButtonLabel, heroButtonUrl, socialShareButton } = siteData

  const heroTypeStyles = () => {
    if (heroType === HeroType.MINIMAL || heroType === HeroType.MINIMAL_CENTER) {
      return {
        actionButtonColors: `bg-${primary} text-gray-100`,
        shareButtonOutlineColor: primary,
        headerTextColor: text,
        paragraphTextColor: subtext,
      }
    }
    return {
      actionButtonColors: `${background} ${text}`,
      shareButtonOutlineColor: 'gray-100',
      headerTextColor: 'text-gray-100',
      paragraphTextColor: 'text-gray-100',
    }
  }

  const { actionButtonColors, shareButtonOutlineColor, headerTextColor, paragraphTextColor } = heroTypeStyles()

  const renderActionButton = () => {
    if (!!heroButtonUrl) {
      return (
        <OutboundLink
          className={`${actionButtonColors} py-3 px-6 rounded-lg md:mr-4`}
          href={heroButtonUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => gtagEventClick('click_hero_action', `${heroButtonLabel}: ${heroButtonUrl}`)}
        >
          {heroButtonLabel}
          <i className="ml-2 fas fa-share"></i>
        </OutboundLink>
      )
    }
  }

  const renderShareButton = () => {
    if (socialShareButton) {
      return <ShareButton siteData={siteData} theme={theme} outlineColor={shareButtonOutlineColor} />
    }
    return <></>
  }

  return (
<section className="relative">
    {/*<section>
    <LazyHero
    /*imageSrc={props.bgImage}* /
    imageSrc="https://res.cloudinary.com/dexdumfqy/image/upload/v1632162071/C.E-Websheets-site/cropped-cropped-cropped-img_3878_16-1-1024x614-1920x1154_usalwx.jpg"
    /*</section>imageSrc={HeroImage}* /
    isCentered={true}
    isFixed={true}
    minHeight="100vh"
    opacity={0.2}
    color="#000"
  >
    <div className={`container h-screen mx-auto px-4 py-8 ${isCenter && 'text-center'}`}>
      <h1 className={`text-4xl font-bold ${headerTextColor}`}>{heroTitle}</h1>
      <p className={`font-thin text-xl ${paragraphTextColor}`}>{heroDescription}</p>
      {/*<div className="my-12">
        {renderActionButton()}
        {renderShareButton()}
  </div>* /}
    </div>
    </LazyHero>
    </section>*/}

  {/*<div className="py-1 text-sm text-center border-b border-gray-100">
    <p className="font-medium leading-10 text-darkBlueGray-300">
      <span>Hello, you are new here.</span>
      <span className="text-darkBlueGray-900">Get 20% off card!</span>
    </p>
  </div>*/}

  <div className="pb-10 xl:pb-20">
    <div className="flex flex-wrap items-stretch" /*className="flex flex-wrap items-stretch -mx-1"*/>
      <div className="w-full px-1 mb-2 lg:w-3/5 lg:mb-0">
        <div className="relative flex items-end h-full px-8 py-16 overflow-hidden md:px-16 xl:pb-36 xl:pt-80 rounded-5xl">
          <img className="absolute top-0 left-0 object-cover w-full h-full" src="https://res.cloudinary.com/dexdumfqy/image/upload/v1640492522/C.E-Websheets-site/_DSC9920_apzbku.jpg" alt=""/>
          <div className="relative">
            <span className="block text-xs font-medium tracking-widest text-gray-200 uppercase mb-9">Get 20% off card</span>
            <h1 className="mb-16 font-medium leading-tight text-white font-heading text-9xl md:text-10xl xl:text-13xl">Dab Rigs</h1>
            <a className="inline-block w-full px-10 py-4 mb-2 text-xl font-medium leading-8 tracking-tighter text-center text-white bg-blue-500 md:w-auto md:mr-6 md:mb-0 font-heading focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-600 rounded-xl" href="#">Shop now</a><a className="inline-block w-full px-10 py-4 text-xl font-medium leading-8 tracking-tighter text-center bg-white md:w-auto font-heading focus:ring-2 focus:ring-gray-100 focus:ring-opacity-50 hover:bg-gray-100 rounded-xl" href="#">More</a>
          </div>
        </div>
      </div>
      <div className="w-full px-1 lg:w-2/5">
        <div className="relative flex items-end px-8 py-16 mb-2 overflow-hidden md:px-16 xl:pb-16 xl:h-1/2 rounded-5xl">
          <img className="absolute top-0 left-0 object-cover w-full h-full" src="https://res.cloudinary.com/dexdumfqy/image/upload/v1640492580/C.E-Websheets-site/IMG_20180906_173050_IMGP_d9bqpa.jpg" alt=""/>
          <div className="relative w-full">
            <span className="block mb-2 text-xs font-medium tracking-widest text-gray-200 uppercase">Bestseller</span>
            <h2 className="mb-8 text-6xl font-medium leading-tight text-white font-heading md:text-8xl">The Ultimate Smoking Experience</h2>
            <a className="inline-block w-full px-10 py-4 text-xl font-medium leading-8 tracking-tighter text-center bg-white md:w-auto font-heading focus:ring-2 focus:ring-gray-100 focus:ring-opacity-50 hover:bg-gray-100 rounded-xl" href="#">Shop</a>
          </div>
        </div>
        <div className="relative flex items-end px-8 py-16 overflow-hidden md:px-16 xl:pb-16 xl:h-1/2 rounded-5xl">
          <img className="absolute top-0 left-0 object-cover w-full h-full transform scale-150" src="https://res.cloudinary.com/dexdumfqy/image/upload/v1640492531/C.E-Websheets-site/_DSC9917_kfnxdk.jpg" alt=""/>
          <div className="relative w-full">
            <span className="block mb-2 text-xs font-medium tracking-widest text-white uppercase">New</span>
            <h2 className="mb-8 text-6xl font-medium leading-tight text-white font-heading md:text-8xl">Spoon Pipes</h2>
            <a className="inline-block w-full px-10 py-4 text-xl font-medium leading-8 tracking-tighter text-center bg-white md:w-auto font-heading focus:ring-2 focus:ring-gray-100 focus:ring-opacity-50 hover:bg-gray-100 rounded-xl" href="#">Shop</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Body2
