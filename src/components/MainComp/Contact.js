import React, {useEffect, useRef} from 'react'
import { InfoContainer,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TextTitle,
    TextContent,
    ImgWrap,
    Img,} from './MainComp.styles'
import Form from '../Form'
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = ({imgStart, img, alt,id, description, headline, lightBg}) => {
  let title = useRef(null);
  let form = useRef(null);
  let imgsap = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: [title, form, imgsap],
        toggleActions: "restart complete pause none",
      },
    });
    tl.from(
      [title,form],
      1.2,
      { y: 10, opacity: 0, ease: Power3.easeOut, delay: 0.3 },
      0.35
    );
    tl.from(
      [imgsap],
      1.2,
      { y: -10, opacity: 0, ease: Power3.easeOut, delay: 0.2 },
      0.35
    );
 
  });
    return (
        <InfoContainer id={id} lightBg={lightBg}>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
                <TextTitle ref={(el) => (title = el)}>
                <svg width='3000' height='60' viewBox="0 0 3000 60">
                  <text x="0%" y="60%" fill="transparent" text-anchor="start">
                    {headline}
                  </text>
                </svg>
                </TextTitle>
                <TextContent ref={(el) => (form = el)}>
                  {description}           
                 </TextContent>
            </TextWrapper>
            <Form/>
          </Column1>
          <Column2>
            <ImgWrap ref={(el) => (imgsap = el)}>
            <Img src={img} alt={alt}/>
            </ImgWrap>
          </Column2>
          </InfoRow>
    </InfoContainer>
    )
}

export default ContactSection
