import { milestones } from "../utilities/profile"

const Journey = () => {
    return (
        <div className='w-10/12 my-20'>
            <div className="card-body p-0">
                <div>
                    <p className="text-2xl py-2 font-bold">
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

    )
}

export default Journey
