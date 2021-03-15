import styles from '../styles/stars.module.css'
import Stars from './stars'
import Head from 'next/head'

//function to export star field as function for different pages in profile
export default function StarField({ children, home }){

//create array of star objects
  const allStars = Stars()

//function to assign class to star based on index in array
  function whichStar(d, idx){
    if(idx <8){
    return (<div key={idx} id={d.id} className={styles.star_1}></div>)
    } else if (idx>7 && idx<17) {
    return (<div key={idx} id={d.id} className={styles.star_2}></div>)
    } else if (idx >16 && idx<25) {
    return (<div key={idx} id={d.id} className={styles.star_3}></div>)
    } else {
    return (<div key={idx} id={d.id} className={styles.star_4}></div>)
    }
  }

  return(
    <div className={styles.container}>
    <Head>
      <link rel="icon" href="favicon.ico"/>
      <meta name="google-site-verification" content="VqmpJbz5zCentQ8icRG2Icf8L0yci6lz8f69JkxvFW0"/>
      <meta
        name="KDM profile"
        content="KDM's online profile and portfolio"/>
      <title>KDMundale</title>
      <!-- Global site tag (gtag.js) - Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-PVBK066173"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-PVBK066173');
      </script>
    </Head>
    {allStars.map(function(d, idx){
       return whichStar(d,idx)
     })}
    <main>{children}</main>
    </div>
  )
}
