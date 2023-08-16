import React, {useRef, useEffect} from 'react'
import {ProjectsContainer,ProjectsWrapper, ProjBox} from './Project.styles'
import ProjectBox from '../ProjBox'
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectSection = ({projectsData}) => {
    let box = useRef(null);
    const id = projectsData[0].id;
  
    useEffect(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: [box],
          toggleActions: "restart complete pause none",
        },
      });
      tl.from(
        [box],
        1.2,
        { y: 10, opacity: 1, ease: Power3.easeOut, delay: 0.5 },
        0.55
      );
   
    });
    return (
        <ProjectsContainer id={id}>
            <ProjectsWrapper>
              {projectsData.map((item, key)=>{
                return(
                  <ProjBox key={key} ref={(el) => (box = el)}>
                    <ProjectBox image={item.img} title={item.title} description={item.description} link={item.link}/>
                  </ProjBox>
                )
              })}
           </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default ProjectSection
