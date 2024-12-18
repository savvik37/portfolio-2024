import React from 'react'
import { NavLink } from "react-router";

export default function Nav() {
  return (
    <div class="navbar">
      <NavLink to="/" end>
        <div class="navbardivide">
          <p class="navp" id="navp1"><span>Home</span></p>
        </div>      
      </NavLink>
      <NavLink to="/projects" end>
        <div class="navbardivide">
          <p class="navp" id="navp2"><span>Projects</span></p>
        </div>  
      </NavLink>
      <NavLink to="/about" end>
        <div class="navbardivide">
          <p class="navp" id="navp3"><span>About</span></p>  
        </div>
      </NavLink>
    </div>
  )
}
