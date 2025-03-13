import React, { lazy, Suspense } from 'react';

const GithubSVG = lazy(() => import('./SVGComponents').then(module => ({ default: module.GithubSVG })));
const LinkedinSVG = lazy(() => import('./SVGComponents').then(module => ({ default: module.LinkedinSVG })));
const MessengerSVG = lazy(() => import('./SVGComponents').then(module => ({ default: module.MessengerSVG })));
const GmailSVG = lazy(() => import('./SVGComponents').then(module => ({ default: module.GmailSVG })));

export const contactsSVG = [
    { Component: GithubSVG, link:'https://github.com/ShernanJenesisMateo'},
    { Component: LinkedinSVG, link:'https://www.linkedin.com/in/sjmateo/' },
    { Component: MessengerSVG, link: 'https://m.me/shernanjenesis.mateo' },
    { Component: GmailSVG, link: 'mailto:everydayf2@gmail.com' },
];