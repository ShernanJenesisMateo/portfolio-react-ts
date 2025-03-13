import React, { Suspense } from 'react'
import { contactsSVG } from '../assets/ContactsSVG';

const Footer = () => {
    return (
        <div className='h-full w-full'>
            <footer className="bg-base-200 items-center justify-center my-4 flex flex-col gap-3">
                <div className="flex justify-center space-x-5">
                    <Suspense fallback={<div>Loading...</div>}>
                        {contactsSVG.map(({ Component, link }) => (
                            <div className="flex flex-col items-center justify-center">
                                <a href={link} target="_blank">
                                    <div className="w-8 h-8">
                                    <Component className="w-full h-full" />
                                </div>
                                </a>
                            </div>
                        ))}
                    </Suspense>
                </div>
                <p>Copyright © {new Date().getFullYear()} - Shernan Jenesis Mateo</p>
            </footer>
        </div>

    )
}

export default Footer;
