import StarField from '../componenets/star_field'
import Header from '../componenets/header'
import MyFooter from "../componenets/footer"
import styles from '../styles/Projects.module.css'
import Head from 'next/head'
import Image from 'next/image'


const my_builds = [{title:'Paper Dolls: Tribute to Torchy Togs',
status:'Working / In Development',
link:'https://kdmundale.github.io/paperdolls/', id:'torchy',key:1,
alt:'Screen shot of paper dolls in app', descript:'Online vintage paper dolls- where you can select, dress, and move your dolls on the screen.',
langs:'JavaScript, HTML & CSS, image editing/remastering, responsive format'},
{title:'Dad Joke App',status:'Published - Flutter mobile app in development',
link:'https://kdmundale.github.io/justCause/',id:'dad_joke',key:2,
alt:'Image of dad joke app- big red button that says push me',
descript:'When is it not a good time for a dad joke? Built for the dads in my life, so they neve stop making my eyes roll',
langs:'JavaScript, HTML, CSS, icanhazdadjoke public API'},
{title:'Downtown Lancaster',status:'Published',link:'https://kdmundale.github.io/DowntownLancaster-DrivingGame/',
id:'driving',key:3,alt:'Red 8-bit car driving down a laned road, swerving',
descript:'My very first build, later added touch screen capability and responsive design for all devices',
langs:'JavaScript, HTML, CSS'}]

// {title:'',status:'',link:'',id:'',alt:'',descript:'',langs:''}

export default function ProjectsPage(){
  let blah = "builds & experiments";

  const proj_items = my_builds.map((x) => {

    let style = x.id;
    if(x.id == "driving"){
      return(
        <section key={x.key}>
              <h2>{x.title}</h2>
              <h3>{x.status}</h3>
              <h4>click icon to view:</h4>
                <a target="blank" href={x.link} id={x.id} alt={x.alt}>
                <div className={styles.road}>
                <div id={styles.car}></div>
                  <div className={styles.line}></div>
                  <div className={styles.line2}></div>
                  <div className={styles.line3}></div>
                  <div className={styles.line4}></div>
                  </div></a>
              <p>{x.descript}</p><p>{x.langs}</p>
        </section>
      )
    } else {
      let s_id=x.id;
      console.log("!!!!!!!!!",s_id);
      return(
        <section key={x.key}>
              <h2>{x.title}</h2>
              <h3>{x.status}</h3>
              <h4>click icon to view:</h4>
                <a target="blank" href={x.link} className={s_id} alt={x.alt}></a>
              <p>{x.descript}</p><p>{x.langs}</p>
        </section>
      )
    }
});

  return (
    <StarField>
      <Header>
      {blah}
      </Header>
      <article className={styles.main}>
      <h2>Something</h2>
      {proj_items}
      </article>
    <MyFooter/>
    </StarField>
  )
}
