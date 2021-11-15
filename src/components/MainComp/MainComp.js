import React, {useRef, useEffect} from 'react'
import { InfoContainer,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TextTitle,
    TextContent,
    ImgWrap,
   } from './MainComp.styles'
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = ({imgStart, id, headline, description, lightBg, img, plus}) => {
  let title = useRef(null);
  let p = useRef(null);
  let imgsap = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: [title, p, imgsap],
        toggleActions: "restart complete pause none",
      },
    });
    tl.from(
      [title,p],
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
                  <text x="0%" y="60%" fill="transparent" textAnchor="start">
                    {headline}
                  </text>
                </svg>
                </TextTitle>
                <TextContent ref={(el) => (p = el)}>{description}</TextContent>
            </TextWrapper>
            {plus}
          </Column1>
          <Column2>
            <ImgWrap ref={(el) => (imgsap = el)}>
            {img}
            </ImgWrap>
          </Column2>
          </InfoRow>
    </InfoContainer>
    )
}

export default About
