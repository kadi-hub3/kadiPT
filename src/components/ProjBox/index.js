import React from 'react'
import { Card } from './Box.styles'
import {Button} from '../Button'

const ProjBox = ({img,title,description, link}) => {
    return (
        <Card>
        <div className='imgBx'>
            <img src={img} alt='' />
        </div>
        <div className='contentBx'>
            <div className='content'>
                <h3>{title}</h3>
                <p>{description}</p>
                <Button primary='true'>
                <a href={link} target='_blank'>View Project</a>
                </Button>
            </div>
        </div>
    </Card>
    )
}

export default ProjBox
