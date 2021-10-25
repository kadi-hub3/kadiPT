import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    Topline,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img,
  } from './Info.styles'

const InfoSection = ({
  id,
  lightBg,
  lightText,
  darkText,
  description,
  buttonLabel,
  headline,
  topLine,
  img,
  imgStart,
  alt,
  primary,
  dark,
}) => {
    return (
        <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Topline>{topLine}</Topline>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  {/* <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button> */}
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    )
}

export default InfoSection
