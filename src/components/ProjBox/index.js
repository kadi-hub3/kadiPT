import React from 'react'
import { Card } from './Box.styles'
import {ButtonA} from '../Button'

const ProjBox = ({image,title,description, link}) => {
    return (
        <Card>
        <div className='imgBx'>
            <img src={image} alt='' />
        </div>
        <div className='contentBx'>
            <div className='content'>
                <h3>{title}</h3>
                <p>{description}</p>
                <ButtonA primary='true' href={link} target='_blank'>View Project</ButtonA>
            </div>
        </div>
    </Card>
    )
}

export default ProjBox
