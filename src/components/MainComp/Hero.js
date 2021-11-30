import {
    InfoContainer,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    BtnWrap,
    ImgWrap,
    Img,
  } from './MainComp.styles'
import Title from '../MainTitle'
import{ StyledButton }from '../Button'

const InfoSection = ({
  img,
  imgStart,
  alt,
  buttonLabel,
  id,
  lightBg,
  darkBg, 
  lightText
}) => {
    return (
        <InfoContainer id={id} lightBg={lightBg} darkBg={darkBg}>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Title lightText={lightText}/>
                <BtnWrap>
                  <StyledButton
                    to="about"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    primary='true'
                    lightText={lightText}
                  >
                    {buttonLabel}
                  </StyledButton>
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
