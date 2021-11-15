import React from 'react'
import {BottomLine, MainTitle} from './Title.styles'
import {homeData} from '../MainComp/Data'

const Title = () => {
    const title= homeData.headline.split('')
    return (
        <>
        <MainTitle>
            {title.map((letter, id)=><span key={id}>{letter}</span>)}
        </MainTitle>
        <BottomLine>{homeData.topLine}</BottomLine>
        </>
    )
}

export default Title
