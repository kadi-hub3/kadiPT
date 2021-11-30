import React from 'react'
import {BottomLine, MainTitle} from './Title.styles'
import {homeData} from '../MainComp/Data'

const Title = ({lightText}) => {
    const title= homeData.headline.split('')
    return (
        <>
        <MainTitle lightText={lightText}>
            {title.map((letter, id)=><span key={id}>{letter}</span>)}
        </MainTitle>
        <BottomLine lightText={lightText}>{homeData.topLine}</BottomLine>
        </>
    )
}

export default Title
