import React from 'react'
import {BottomLine, MainTitle} from './Title.styles'
import {homeData} from '../Data'

const Title = () => {

    const title= homeData.headline.split('')

    return (
        <>
        <MainTitle>
            {title.map((letter)=><span>{letter}</span>)}
        </MainTitle>
        <BottomLine>{homeData.topLine}</BottomLine>
        </>
    )
}

export default Title
