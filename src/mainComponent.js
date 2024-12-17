import React from 'react'

export default function MainComponent() {
  return (
    <div class="mainComponent">
      <div class="mainContainer1">
        <div class="mainDetails">
          <h2 class="mainH2 color35 h2Smaller">Hi, I'm Sava Opikovs</h2>        
          <h2 class="mainH2 color4 h2Larger">Web Developer</h2>
          <h2 class="mainH2 color4 h2Larger"> +  Designer</h2>     
          <p class="pee color4">I specilize in providing industry standard web experiences :)</p>
        </div>
          <div class="mainButtons">
            <button type="button" class="mybutton mr-10">Hire Me</button>
            <button type="button" class="mybutton ml-10">Contact Me</button>
          </div>
      </div>
      <div class="imageDiv">
        <img src='https://media.licdn.com/dms/image/v2/D4D03AQEt2uMvz-5_QQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725369802030?e=1740009600&v=beta&t=FVnn8AEYFyA1ZQ9B4JNuR927IEVub7mu2-m-aNqrsFg' alt='image of my face' class="profileimage"></img>
      </div>
    </div>
  )
}
