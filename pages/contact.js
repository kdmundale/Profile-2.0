import StarField from '../componenets/star_field'
import Header from '../componenets/header'
import MyFooter from "../componenets/footer"
import Head from 'next/head'
import styles from '../styles/Contact.module.css'
export default function StrengthsPsge(){
  let blah="contact"
  return (
    <StarField>
      <Header>
      {blah}
      </Header>

      <section className={styles.main}>

      <p>I am located in Lancaster, PA.</p>
      <p>Let's chat.</p>
      <div>
        <a id={styles.li_icon} target="blank" alt="link to LinkeddIn" href="https://www.linkedin.com/in/katherine-mundale/"> </a>
        <a id={styles.email_icon} target="blank" alt="link to Email" href="mailto:katherine.doris.mundale@gmail.com"> </a>
        <a id={styles.fb_icon} target="blank" alt="link to Facebook" href="https://www.facebook.com/katherine.d.mundale"> </a>
        <a id={styles.ig_icon} target="blank" alt="link to Instagram" href="https://www.instagram.com/katherine.doris/"> </a>
      </div>
    </section>
    <MyFooter/>
    </StarField>
  )
}
