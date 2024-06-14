import { author } from '../utilities/profile'

const Hero = () => {
    return (
        <div className='w-10/12'>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <h3 className='text-3xl py-2'>Hello there!</h3>
                    <h1 className="text-7xl py-2">I'm <span className='font-bold'>{author.name}</span></h1>
                    <h4 className="text-4xl font-normal py-2">Full stack developer, building bridges between Ideas and Interfaces</h4>
                    <button className="btn mr-3 my-4 px-5">Message</button>
                    <button className="btn m-3 px-5">Resume</button>
                </div>
            </div>
        </div>
    )
}

export default Hero
