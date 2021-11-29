import {TextTitle} from './Subtitle.styles'
const SubTitle = ({headline}) => {
    return (
        <TextTitle>
              <svg width='3000' height='60' viewBox="0 0 3000 60">
                  <text x="0%" y="60%" fill="transparent" textAnchor="start">
                    {headline}
                  </text>
                </svg>
         </TextTitle>
    )
}

export default SubTitle
