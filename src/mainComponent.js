import React from 'react'
import { NavLink } from "react-router";


export default function MainComponent() {
  return (
    <div class="mainComponent animated">
      <div class="mainContainer1">
        <div class="mainDetails">
          <h2 class="mainH2 color35 h2Smaller">Hi, I'm Sava Opikovs</h2>    
          <h2 class="mainH2 color4 h2Larger">Web Developer</h2>
          <h2 class="mainH2 color4 h2Larger"> + Designer</h2>     
          <p class="pee color4">I specilize in providing industry standard web experiences :)</p>
        </div>
          <div class="mainButtons">
            <NavLink to="/about" end>
              <button type="button" class="mybutton mr-10">Hire Me</button>
            </NavLink>
            <NavLink to="/about" end>
              <button type="button" class="mybutton ml-10">Contact Me</button>
            </NavLink>
          </div>
      </div>
      <div class="imageDiv">
        <img src="https://media.licdn.com/dms/image/v2/D4D03AQEt2uMvz-5_QQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725369802012?e=1740009600&v=beta&t=5JoDu8sXMiS81qaE5CbK0tpgKEAHnRj09X-AGmHyXCM" alt='image of my face' class="profileimage"></img>
      </div>
    </div>
  )
}
