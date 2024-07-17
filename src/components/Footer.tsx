import React from 'react'
import { GithubSVG } from '../assets/ToolsSVG';

const Footer = () => {
    return (
        <div className='h-full w-full'>
            <footer className="bg-base-200 items-center justify-center my-4 flex flex-col gap-3">
                {/* <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end flex">
                    <div className="flex sm:justify-center space-x-6">
                        <a href="#" className="text-gray-500 hover:text-gray-900">
                            <FacebookSVG />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900">
                            <InstagramSVG />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900">
                            <GithubSVG />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900">
                            <LinkedinSVG />
                        </a>
                    </div>
                </nav> */}
                <div className="flex justify-center space-x-5">
                    <a href="" className='w-8 h-8'>
                        <GithubSVG />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='w-8 h-8'>
                        <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" alt='linkedin link' />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='w-8 h-8'>
                        <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" alt='instagram link' />
                    </a>
                    <a href="https://messenger.com" target="_blank" rel="noopener noreferrer" className='w-8 h-8'>
                        <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" alt='messenger link' />
                    </a>
                </div>
                <p>Copyright © {new Date().getFullYear()} - Shernan Jenesis Mateo</p>
            </footer>
        </div>

    )
}

export default Footer;
