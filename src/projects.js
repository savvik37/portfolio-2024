import {React, useState} from 'react'

import reactbank1 from "./assets/react-bank1.png"
import reactbank2 from "./assets/react-bank2.png"

import linkimage from "./assets/link.png"

export default function Projects() {
  return (
    <div class="projectsComponent animated">
        <div class="projectBox">
            <div class="imageBox">
                <img src={reactbank1} class="projectImage"></img>
                <img src={reactbank2} class="projectImage"></img>
            </div>
            <h2 class="projectTitle">React Bank (WIP)</h2>
            <a href="https://react-bank-two.vercel.app/" target="_blank" rel="noopener noreferrer">
                <div  class="projectLinkBox">
                    <img src={linkimage} class="linkImage" alt=""/>
                    <p class="projectLink">https://react-bank-two.vercel.app/</p>
                </div>
            </a>
            <p class="projectDetail">Mainly front-end project of a simple banking web app</p>
        </div>
    </div>
  )
}
