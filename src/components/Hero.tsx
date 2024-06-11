import React from 'react'
import { author } from '../utilities/profile'

const Hero = () => {
    return (
        <div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <h4>Hello there!</h4>
                    <h1 className="text-5xl">I'm <span className='font-bold'>{author.name}</span></h1>
                    <h6 className="text-2xl py-6">Full stack developer, building bridges between Ideas and Interfaces</h6>
                    <button className="btn">Resume</button>
                </div>
            </div>
        </div>
    )
}

export default Hero
