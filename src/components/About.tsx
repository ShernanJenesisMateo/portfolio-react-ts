
import { Suspense } from "react"
import { toolsSVG } from "../assets/ToolsSVG"

const About = () => {
    return (
        <div className='w-10/12 h-full'>
            <div className="h-full flex-col lg:flex-row-reverse">
                <div className="h-full w-full">
                    <h3 className='text-4xl py-2 font-bold'>About me</h3>
                    <div className="card card-side items-center">
                        <div className="card-body w-3/4 p-0">
                            <div className="p-0 font-semibold text-xl w-full text-pretty">
                                <p className="m-2">
                                    Hi! I'm Shernan Jenesis Mateo. I love creating web applications and exploring new technologies.
                                </p>
                                <p className="m-2 pt-4">
                                    From front-end design to back-end development, I'm passionate about bringing creative ideas to life through code.
                                </p>
                                <p className="m-2 pt-4">
                                    I'm always excited about the next challenge.
                                </p>
                            </div>
                        </div>
                        {/* <div className="-translate-x-20 w-1/4 h-3/4 flex items-center justify-center">
                            <img className="-translate-x-20 scale-125"
                                src="/assets/images/myPic_withoutBG.png"
                                alt="Shernan Jenesis Mateo" />
                        </div> */}
                    </div>
                    <div className="mt-20 font-semibold text-xl w-full" id="SkillsSectionId">
                        <p>I've been using these awesome tools and technologies to bring my projects to life!</p>
                    </div>
                    <br />
                    <div className="flex flex-wrap gap-5 justify-center items-center">
                        <Suspense fallback={<div>Loading...</div>}>
                            {toolsSVG.map(({ Component, name }) => (
                                <div key={name} className="flex flex-col items-center justify-center">
                                    <div className="w-10 h-10">
                                        <Component className="w-full h-full" />
                                    </div>
                                    <p>{name}</p>
                                </div>
                            ))}
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
