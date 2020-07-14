import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'
// Use the following to support legacy browsers like IE11:
// import BackgroundImage from 'gatsby-background-image-es5'
import { generateMedia } from 'styled-media-query'
import { StyledFullScreenWrapper } from './SharedStyledComponents'

const media = generateMedia()

/**
 * In this functional component a <BackgroundImage />  is compared to an <Img />.
 * @param className   string    className(s) from styled-components.
 * @param children    nodes     Child-components from index.js
 * @return {*}
 * @constructor
 */
const BackgroundSection = ({ className, children }) => {
  const { desktop } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "homeBG.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `
  )

  const imageData = desktop.childImageSharp.fluid
  return (
    
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
          fadeIn={`soft`}
          role="img"
        >
          {children}
        </BackgroundImage>
    
  )
}


const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100vw;
  
  // These three crucial styles (if existing) are directly parsed and added to 
  // the pseudo-elements without further ado (except when overwritten).
  //background-repeat: repeat-y;
  //background-position: left center;
  //background-size: cover;
  
  // With media-queries you have to overwrite the default options (see style={{}} above).
  // ${media.lessThan('large')`
  //   background-size: cover;
  //   &:after, &:before {
  //     background-size: contain;
  //   }
  // `}
  
  // For pseudo-elements you have to overwrite the default options (see style={{}} above).
  // See: https://github.com/timhagn/gatsby-background-image/#styling--passed-through-styles 
  //&:after, &:before {
  //   background-clip: content-box;
  //   background-size: contain;
  //}
`

export default StyledBackgroundSection