import StarField from '../componenets/star_field'
import Header from '../componenets/header'
import MyFooter from "../componenets/footer"
import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home(){

  let blah="bringing unique perspective to programming and development"

  let content = "I have spent the last two decades building relationships.\nCultivating positive spaces for discussions and elevating experiences is my passion.\nI know people.\nNow, I want to build systems that make their lives better.\n \n-I offer a unique perspective-\n \nand that makes me an asset."

  function NewlineText(props) {
  const text = props.text;
  return (<p>{text}</p>)
  }

  function ProfilePic(){
    return (<Image
        src="/images/me.jpg"
        layout='intrinsic'
        height={1679}
        width={1261}
        alt="Photo of KDM posing next to bicycle on trail ride"
        rel="preload"
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
    <MyFooter/>
  </StarField>
  )
}
