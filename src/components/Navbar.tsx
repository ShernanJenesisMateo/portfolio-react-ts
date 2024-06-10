import React from 'react'


const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1 px-5">
          <a className="btn btn-ghost text-xl">Shernan Jenesis Mateo</a>
        </div>
        <div className="flex-none px-5">
          <ul className="menu menu-horizontal px-5 items-center">
            <li><a>About</a></li>
            <li><a>Skills</a></li>
            <li><a>Experience</a></li>
            <li><a>Projects</a></li>
            <li><a>Contact</a></li>
            <li>
              <button className="btn btn-outline btn-info">Resume</button>
            </li>
          </ul>
        </div>
      </div>    </div>
  )
}

export default Navbar
