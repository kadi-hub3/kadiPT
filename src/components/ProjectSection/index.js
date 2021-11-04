import React from 'react'
import {ProjectsContainer,ProjectsWrapper, ProjBox,Img,ProjContent,ProjP} from './Project.styles'
const ProjectSection = ({id,img1,content1,img2,content2,img3,content3,img4,content4,img5,content5,img6,content6}) => {
    return (
        <ProjectsContainer id={id}>
            <ProjectsWrapper>
            <ProjBox>
                <ProjContent>
                    <Img src={img1} />
                    <ProjP>{content1}</ProjP>
                </ProjContent>
            </ProjBox>
            <ProjBox>
                <ProjContent>
                    <Img src={img2} />
                    <ProjP>{content2}</ProjP>
                </ProjContent>
            </ProjBox>
            <ProjBox>
                <ProjContent>
                    <Img src={img3} />
                    <ProjP>{content3}</ProjP>
                </ProjContent>
            </ProjBox>
            <ProjBox>
                <ProjContent>
                    <Img src={img4} />
                    <ProjP>{content4}</ProjP>
                </ProjContent>
            </ProjBox>
            <ProjBox>
                <ProjContent>
                    <Img src={img5} />
                    <ProjP>{content5}</ProjP>
                </ProjContent>
            </ProjBox>
            <ProjBox>
                <ProjContent>
                    <Img src={img6} />
                    <ProjP>{content6}</ProjP>
                </ProjContent>
            </ProjBox>
            <ProjBox>
                <ProjContent>
                    <Img src={img6} />
                    <ProjP>{content6}</ProjP>
                </ProjContent>
            </ProjBox>
           </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default ProjectSection
