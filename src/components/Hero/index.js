import {
    InfoContainer,
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
  } from './Hero.styles'
import Title from '../StyledTitle'
import{ Button }from '../Button'
const InfoSection = ({
  img,
  imgStart,
  alt,
  buttonLabel,
  id

}) => {
    return (
        <InfoContainer id={id}>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Title/>
                <BtnWrap>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary='true'
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
      </InfoContainer>
    )
}

export default InfoSection
