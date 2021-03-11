import Link from 'next/link'

export default function MyFooter(){

  return(

    <footer>
    <div>
    <Link href="/strengths"><a>strengths</a></Link>
    <Link href="/projects"><a>projects</a></Link>
    <Link href="/resume"><a>resume</a></Link>
    <Link href="/contact"><a>contact</a></Link>
    <Link href="/"><a>main</a></Link>
    </div>
    <p>KDM 2021</p>
    </footer>
    
  )
}
