import Link from 'next/link'
import QuoteGenerator from './quotes'


export default function MyFooter(){

  let q = QuoteGenerator();

  return(

    <footer>
    <q>{q.quote}</q><p>-{q.auth}</p>
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
