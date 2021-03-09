import StarField from '../componenets/star_field'
import Header from '../componenets/header'
import Head from 'next/head'
import styles from '../styles/Strengths.module.css'
// import FadeInSection from '../componenets/effects'

const strengths = [{title:'I listen.', section:"Patient, attentive listening reveals what is needed to resolve any situation. Remaining open and engaged in every discussion not only reinforces confidence between collaborators and clients, but saves time and resources as well."},
{title:'I communicate.', section:'Coinciding with effective listening: clear and cogent communication. Be it written or verbal, formal or informal, external or internal, conveying ideas and issues thoroughly and professionally effects relationships and productivity in a beneficial way.'},
{title:'I find solutions.', section:"....even if they're not my own. As a creative thinker and someone who approaches problems from new directions, sometimes the tried and true solution is still the best. Research, experimentation, peer review, testing; finding the most effective solution is always a priority."},
{title:'I work.',section:'A strong work ethic has carried me through life. The NMW Club: No matter what, show up and do the best you can.'},
{title:'I genuinely care.',section:"About everything. About everybody. In a world with a divisive climate full of polarizing issues, my personal ethos is one of equality, inclusion, and openness."}];

export default function StrengthsPage(){

  const strengthItem = strengths.map((c) =>
      <div key={c.title}><h2>{c.title}</h2><p>{c.section}</p></div>
  )

  let blah = "strengths"
  return (
    <StarField>
      <Header>
      {blah}
      </Header>
      <section className={styles.main}>
      {strengthItem}
      </section>

    </StarField>
  )
}
