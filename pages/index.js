import StarField from '../componenets/star_field'
import Header from '../componenets/header'
import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home(){

  let blah="Bringing Unique Perspective to Web/App Design & Development"

  let content = "I have spent the last two decades building relationships.\nCultivating positive spaces for discussions and elevating experiences is my passion.\nI know people.\nNow, I want to build things that make their lives better.\nI offer a unique perspective\n-I'm not your typical programmer-\nand that makes me an asset."

  function NewlineText(props) {
  const text = props.text;
  return (<p>{text}</p>)
  }

  function ProfilePic(){
    return (<Image
        priority
        src="/../public/me.webp"
        layout='intrinsic'
        height={1179}
        width={861}
        alt="Photo of KDM posing next to bicycle on trail ride"
      />)
  }

  return (
  <StarField>
    <Header>
    {blah}
    </Header>
    <section className={styles.blurb}>
    <div>
    <NewlineText text={content} />
    </div>
    <ProfilePic/>
    </section>
  </StarField>
  )
}
