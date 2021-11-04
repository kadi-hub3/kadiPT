import React from 'react'
import Cloud3D from '../3dCloud'
import { InfoContainer,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TextTitle,
    TextContent,
    ImgWrap,
    Img,} from './About.styles'
import Title from '../StyledTitle'

const About = ({imgStart, id}) => {
    return (
        <InfoContainer id={id}>
        <InfoRow  imgStart={imgStart}>
          <Column1>
            <TextWrapper>
                <TextTitle>
                <svg viewBox="10 30 2000 700">
                  <text x="0%" y="60%" fill="transparent" text-anchor="start">
                    About Me
                  </text>
                </svg>
                </TextTitle>
                <TextContent>
            Self-taught front-end developer, fascinated by IT and curious about the full-spectrum of cybersecurity.<br/><br/>
            HTML, CSS, Sass, JS, building small and medium web apps with React, plugins, features, animations and coding interactive layouts.<br/><br/>
            Passionate eye for innovative, simplistic UI design and interested in the entire front-end spectrum.<br/><br/>
            Visit my <span>LinkedIn </span>for more details or just contact me.
                </TextContent>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
            <Cloud3D/>
            </ImgWrap>
          </Column2>
          </InfoRow>
    </InfoContainer>
    )
}

export default About
