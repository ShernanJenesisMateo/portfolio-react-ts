import { milestones } from "../utilities/profile"

const About = () => {
    return (
        <div className='w-10/12 p-5'>
            <h2 className="card-title font-bold text-4xl ml-5">
                About me
            </h2>
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
                    <img className="rounded-tl-2xl rounded-br-2xl" src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" />
                </div>
            </div>
            <br />
            <div className="card card-side bg-base-100 items-center">
                <div className="card-body">
                    <div>
                        <p className="font-bold text-lg">
                            Here’s a little timeline of my journey :
                        </p>
                    </div>
                    <br />
                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                        {milestones.map((milestone, index) => (
                            <li key={index}>
                                {index !== 0 && <hr />}
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className={`${milestone.position} mb-10`}>
                                    <time className="font-mono italic">{milestone.date}</time>
                                    <div className="text-lg font-black">{milestone.title}</div>
                                    <div>{milestone.description}</div>
                                </div>
                                <hr />
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default About
