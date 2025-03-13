import { lazy } from 'react';

// Lazy load each SVG component
const JavaSVG = lazy(() => import('./SVGComponents').then(module => ({ default: module.JavaSVG })));
const PythonSVG = lazy(() => import('./SVGComponents').then(module => ({ default: module.PythonSVG })));
const JavaScriptSVG = lazy(() => import('./SVGComponents').then(module => ({ default: module.JavaScriptSVG })));
const TypeScriptSVG = lazy(() => import('./SVGComponents').then(module => ({ default: module.TypeScriptSVG })));
const HtmlSVG = lazy(() => import('./SVGComponents').then(module => ({ default: module.HtmlSVG })));
const CssSVG = lazy(() => import('./SVGComponents').then(module => ({ default: module.CssSVG })));
const TailwindSVG = lazy(() => import('./SVGComponents').then(module => ({ default: module.TailwindSVG })));
const BootstrapSVG = lazy(() => import('./SVGComponents').then(module => ({ default: module.BootstrapSVG })));
const ReactSVG = lazy(() => import('./SVGComponents').then(module => ({ default: module.ReactSVG })));
const SpringbootSVG = lazy(() => import('./SVGComponents').then(module => ({ default: module.SpringbootSVG })));
const GitSVG = lazy(() => import('./SVGComponents').then(module => ({ default: module.GitSVG })));
const GithubSVG = lazy(() => import('./SVGComponents').then(module => ({ default: module.GithubSVG })));
const PostgreSqlSVG = lazy(() => import('./SVGComponents').then(module => ({ default: module.PostgreSqlSVG })));
const MySqlSVG = lazy(() => import('./SVGComponents').then(module => ({ default: module.MySqlSVG })));
const PostmanSVG = lazy(() => import('./SVGComponents').then(module => ({ default: module.PostmanSVG })));

export const toolsSVG = [
    { Component: JavaSVG, name: 'Java' },
    { Component: PythonSVG, name: 'Python' },
    { Component: JavaScriptSVG, name: 'JavaScript' },
    { Component: TypeScriptSVG, name: 'Typescript' },
    { Component: HtmlSVG, name: 'Html' },
    { Component: CssSVG, name: 'Css' },
    { Component: TailwindSVG, name: 'Tailwind' },
    { Component: BootstrapSVG, name: 'Bootstrap' },
    { Component: ReactSVG, name: 'React' },
    { Component: SpringbootSVG, name: 'Springboot' },
    { Component: GitSVG, name: 'Git' },
    { Component: GithubSVG, name: 'Github' },
    { Component: PostgreSqlSVG, name: 'PostgreSql' },
    { Component: MySqlSVG, name: 'MySql' },
    { Component: PostmanSVG, name: 'Postman' },
];