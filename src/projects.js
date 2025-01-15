import {React, useState} from 'react'

import reactbank1 from "./assets/react-bank1.png"
import reactbank2 from "./assets/react-bank2.png"
import basket1 from "./assets/basket1.png"
import gemini1 from "./assets/gemini1.png"
import basket2 from "./assets/basket2.png"
import dummy from "./assets/dummy.jpg"

import linkimage from "./assets/link.png"

export default function Projects() {
  return (
    <div class="projectsComponent animated">
        <div class="projectBox">
            <div className="projectBoxCenter">
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
                    <div class="badgeContainer">
                        <p class="badgeBox nodeBadge">Node</p>
                        <p class="badgeBox reactBadge">React</p>
                    </div>
            </div>
        </div>
        <div class="projectBox">
            <div class="projectBoxCenter">
                <div class="imageBox2">
                    <img src={basket1} class="projectImageLand"></img>
                </div>
                <h2 class="projectTitle">PHP Shopping Basket</h2>
                <a href="http://scandiwebtest-sava-opikovs.kesug.com/" target="_blank" rel="noopener noreferrer">
                    <div  class="projectLinkBox">
                        <img src={linkimage} class="linkImage" alt=""/>
                        <p class="projectLink">http://scandiwebtest-sava-opikovs.kesug.com/</p>
                    </div>
                </a>
                <p class="projectDetail">PHP Back-end exercise - Shopping Basket Page</p>
                <div class="badgeContainer">
                    <p class="badgeBox phpBadge">PHP</p>
                    <p class="badgeBox jsBadge">JS</p>
                </div>
            </div>
        </div>
        <div class="projectBox">
            <div class="projectBoxCenter">
                <div class="imageBox2">
                    <img src={gemini1} class="projectImageLand"></img>
                </div>
                <h2 class="projectTitle">Gemini API Interface</h2>
                <a href="https://gemini-api-test-three.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <div  class="projectLinkBox">
                        <img src={linkimage} class="linkImage" alt=""/>
                        <p class="projectLink">https://gemini-api-test-three.vercel.app/</p>
                    </div>
                </a>
                <p class="projectDetail">React/Node Exercise - Gemini 1.5 API Test</p>
                <div class="badgeContainer">
                    <p class="badgeBox nodeBadge">Node</p>
                    <p class="badgeBox reactBadge">React</p>
                </div>
            </div>
        </div>
    </div>
  )
}
