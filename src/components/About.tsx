
import { svgComponents } from "../assets/SVGComponents"

const About = () => {
    return (
        <div className='w-10/12 h-full'>
            <div className="h-full flex-col lg:flex-row-reverse">
                <div className="h-full w-full">
                    <h3 className='text-4xl py-2 font-bold'>About me</h3>
                    <div className="card card-side bg-base-100 items-center">
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
                 <div className="w-1/4 h-3/4 flex items-center justify-center ">
                     <img className="" 
                     src="/assets/images/myPic_withoutBG.png" 
                     alt="Shernan Jenesis Mateo" />
                 </div>
             </div>
                    <br />
                    <br />
                    <div className="m-2 font-semibold text-xl w-full">
                        <p>I've been using these awesome tools and technologies to bring my projects to life!</p>
                    </div>
                    <br />
                    <div className="flex flex-wrap gap-5 justify-center items-center">
                        {svgComponents.map(({ Component, name }) => (
                            <div key={name} className="flex flex-col items-center justify-center">
                                <div className="w-10 h-10"> {/* Adjust width and height to desired size */}
                                    <Component className="w-full h-full" /> {/* Ensure SVG fills its container */}
                                </div>
                                <p>{name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
