import React from 'react'
import {ProjectsContainer,ProjectsWrapper, ProjBox, TextTitle} from './Project.styles'
import ProjectBox from '../ProjBox'

const ProjectSection = ({id,headline,img1,title1,link1, description1,img2,title2,link2, description2,img3,title3,link3, description3,img4,title4,link4, description4,img5,title5,link5, description5,img6,title6,link6, description6}) => {
    return (
        <ProjectsContainer id={id}>
            <TextTitle>
              <svg width='3000' height='60' viewBox="0 0 3000 60">
                  <text x="0%" y="0%" fill="transparent">
                    {headline}
                  </text>
                </svg>
            </TextTitle>
            <ProjectsWrapper>
            <ProjBox>
                <ProjectBox img={img1} title={title1} description={description1} link={link1}/>
            </ProjBox>
            <ProjBox>
                 <ProjectBox img={img2} title={title2} description={description2} link={link2}/>
            </ProjBox>
            <ProjBox>
                 <ProjectBox img={img3} title={title3} description={description3} link={link3}/>
            </ProjBox>
            <ProjBox>
                <ProjectBox img={img4} title={title4} description={description4} link={link4}/>
            </ProjBox>
            <ProjBox>
                <ProjectBox img={img5} title={title5} description={description5} link={link5}/>
            </ProjBox>
            <ProjBox>
                <ProjectBox img={img6} title={title6} description={description6} link={link6}/>  
            </ProjBox>
           </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default ProjectSection
