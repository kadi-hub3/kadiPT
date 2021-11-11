import React, {useRef, useEffect} from 'react'
import {ProjectsContainer,ProjectsWrapper, ProjBox} from './Project.styles'
import ProjectBox from '../ProjBox'
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectSection = ({id,headline,img1,title1,link1, description1,img2,title2,link2, description2,img3,title3,link3, description3,img4,title4,link4, description4,img5,title5,link5, description5,img6,title6,link6, description6}) => {
    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
   
  
    useEffect(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: [box1,box2,box3,box4,box5,box6],
          toggleActions: "restart complete pause none",
        },
      });
      tl.from(
        [box1,box2,box3],
        1.2,
        { y: 10, opacity: 0, ease: Power3.easeOut, delay: 0.8 },
        0.85
      );
      tl.from(
        [box4,box5,box6],
        1.2,
        { y: -10, opacity: 0, ease: Power3.easeOut, delay: 0.7 },
        0.75
      );
   
    });
    return (
        <ProjectsContainer id={id}>
            <ProjectsWrapper>
            <ProjBox ref={(el) => (box1 = el)}>
                <ProjectBox img={img1} title={title1} description={description1} link={link1}/>
            </ProjBox>
            <ProjBox ref={(el) => (box2 = el)}>
                 <ProjectBox img={img2} title={title2} description={description2} link={link2}/>
            </ProjBox>
            <ProjBox ref={(el) => (box3 = el)}>
                 <ProjectBox img={img3} title={title3} description={description3} link={link3}/>
            </ProjBox>
            <ProjBox ref={(el) => (box4 = el)}>
                <ProjectBox img={img4} title={title4} description={description4} link={link4}/>
            </ProjBox>
            <ProjBox ref={(el) => (box5 = el)}>
                <ProjectBox img={img5} title={title5} description={description5} link={link5}/>
            </ProjBox>
            <ProjBox ref={(el) => (box6 = el)}>
                <ProjectBox img={img6} title={title6} description={description6} link={link6}/>  
            </ProjBox>
           </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default ProjectSection
