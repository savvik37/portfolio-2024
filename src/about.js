import {React, useState} from 'react'

export default function About() {
  return (
    <div class="aboutComponent animated">
        <div class="aboutBox">
            <h2 class="">contact me!</h2>
            <a href="mailto:savvikopikovs@yahoo.com" target="_blank" rel="noopener noreferrer" class="contactLink">
                <p class="clp" >email: savvikopikovs@yahoo.com</p>
            </a>
            <a href="https://github.com/savvik37" target="_blank" rel="noopener noreferrer" class="contactLink">
                <p class="clp">Github</p>
            </a>
            <a href="https://www.linkedin.com/in/savvik-opikovs-bsc-68b069151/" target="_blank" rel="noopener noreferrer" class="contactLink">
                <p class="clp">Linked In</p>
            </a>
        </div>
    </div>
  )
}
