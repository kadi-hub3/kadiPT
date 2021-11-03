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
import Form from '../Form'

const ContactSection = ({imgStart, img, alt}) => {
    return (
        <InfoContainer>
        <InfoRow  imgStart={imgStart}>
          <Column1>
            <TextWrapper>
                <TextTitle>
                <svg viewBox="10 30 2000 700">
                  <text x="0%" y="60%" fill="transparent" text-anchor="start">
                    Contact Me
                  </text>
                </svg>
                </TextTitle>
                <TextContent>
                I'm interested in web developement, especially front-end development. If you have any request or question, dont't hesitate to contact me using form below.
            </TextContent>
            </TextWrapper>
            <Form/>
          </Column1>
          <Column2>
            <ImgWrap>
            <Img src={img} alt={alt}/>
            </ImgWrap>
          </Column2>
          </InfoRow>
    </InfoContainer>
    )
}

export default ContactSection
