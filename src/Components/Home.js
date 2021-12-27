import React from 'react'
import ActionList from './ActionList'
import Culture from './Culture'
import Hero from './Hero'
import Services from './Services'

export default function Home() {
    return (
        <>
            <Hero/>
            <ActionList/>
            <Services/>
            <Culture/>
        </>
    )
}
