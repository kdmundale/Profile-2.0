import Link from 'next/link'
import React, { useState } from 'react';

//function to create header for pages in profile
export default function Header({children}){

//toggle quick links menu
  const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
    console.log("flip");
  }

  return(
    <header>
      <Link href="/"><a><h1>KD Mundale</h1></a></Link>
      <h2>{children}</h2>
      <button onClick={toggle}
        type="button" name="button" alt="Site Links"></button>
      <div style={{
          display: showMe?"flex":"none",
          zindex:40
        }}>
          <Link href="/strengths"><a>strengths</a></Link>
          <Link href="/projects"><a>builds</a></Link>
          <Link href="/resume"><a>resume</a></Link>
          <Link href="/contact"><a>contact</a></Link>
          <Link href="/"><a>main</a></Link>
        </div>
        <nav>
          <Link href="/strengths"><a>strengths</a></Link>
          <Link href="/projects"><a>builds</a></Link>
          <Link href="/resume"><a>resume</a></Link>
          <Link href="/contact"><a>contact</a></Link>
          <Link href="/"><a>main</a></Link>
        </nav>
    </header>
  )
}
