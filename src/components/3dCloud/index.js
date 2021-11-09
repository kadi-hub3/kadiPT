import React, {useEffect} from 'react';
import $ from 'jquery';
import SVG3DTagCloud from '3d-word-cloud'

const Cloud3D = () => {
      useEffect(()=>{
        $(document).ready(function () {
            var entries = [
              { label: "HTML5" },
              { label: "CSS3" },
              { label: "JavaScript" },
              { label: "Tailwind CSS" },
              { label: "Styled Components" },
              { label: "SASS" },
              { label: "React" },
              { label: "NodeJS" },
              { label: "NPM" },
              { label: "TypeScript" },
              { label: "Git" },
              { label: "Figma" },
              { label: "Jest" },
              { label: "Enzyme" },
              { label: "MongoDB" },
              { label: "Docker" },
            ];
          
            var settings = {
              entries: entries,
              radius: "70%",
              radiusMin: 75,
              width: '100%',
              bgColor: "transparent",
              opacityOver: 1.0,
              opacityOut: 0.05,
              OpacitySpeed: 2,
              fov: 500,
              speed: 1,
              fontFamily: "Courier, Arial, sas-serif",
              fontColor: "#369f93",
              fontWeight: "bold",
              fontStyle: "normal",
              fontStretch: "normal",
              fontToUpperCase: true,
            };
            var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'scroll-zoom'), settings );

          });
      })
    return (
        <div id="scroll-zoom">
        
      </div>
    )
}

export default Cloud3D

