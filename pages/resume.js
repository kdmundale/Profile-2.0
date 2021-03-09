import StarField from '../componenets/star_field'
import Header from '../componenets/header'
import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from '../styles/Resume.module.css'

const relSkills =['Python3', 'PHP', 'JavaScript', 'Java', 'OOP & Data Structures', 'REACT', 'NEXT.js', 'REST APIs', 'Flutter', 'HTML/CSS', 'Automation Testing', 'Selenium Java', 'SQL Database', 'MySQL', 'PostgreSQL', 'SQLite', 'PgAdmin', 'phpMyAdmin', 'Version Control-Git']

const relProjects=[{name:'CLT- The CSET Supplemental Learning Tool React/Next.js Application', source:'Semester Final',details:'Plan and build supplemental web application to be used as a learning support tool for the Computer Software Engineering students at Thaddeus Stevens College of Technology\n \nIdentified web-based user interactions and design responsive user interface using React concepts\n \nOptimize components for maximum efficiency and use over multiple devices\n \nDesign front end architecture to support user-interface with complete accuracy, integrate application with 3rd party services\n \nImplement SQL database and security for sustained use and ease of administration, troubleshooting software bugs, manage data efficiently maintain data integrity'},
{name:'Lancaster City Nutrition Website & Web Application', source:'Personal Project/ In Development', details:'Design, model, and launch website and web application for Lancaster City Nutrition. Gather and refine specifications and requirements based on technical needs, collaborate with customer to establish and prioritize user stories, maintain project integrity with git version control\n \nWrite well designed, testable, efficient Python 3 code for Flask application by using best software development practices. Create website layout/user interfaces by using standard HTML/CSS practices and templating, keep theme to customer’s desired esthetic \n \nBuild/test SQL database using pgAdmin, integrate data into user friendly UI for both registered users and admin services through web application'},
{name:'Tribute to Torchy Togs: Paper Doll Web Application', source:'Personal Project', details:'Begin online, interactive, vintage paper-doll website using raw JavaScript, including responsive design and touch technology for desktop and mobile devices\n \nCurate, edit, and remaster images and modify files to improve website loading by 75%, implement improved JS functions to raise performance by 60%'},
{name:'Dad Joke App', source:'Personal Project', details:'Develop and deploy random dad-joke generating app using JavaScript/REST API with responsive design features, code with Flutter for mobile Android and iOS deployment'},
{name:'Nursing Home Portal', source:'Project manager - Semester Final',details:'Instantiate mock web portal for inpatient nursing home in raw PHP/JavaScript, prepare login roles and access levels according to customer specifications, include forms to submit and tables to display data\n \nGenerate user stories and set weekly sprint goals to maintain progress, maintain project integrity using git version control and testing\n \nConstruct secure MySQL database, use phpMyAdmin for database administration, encrypt sensitive data'},
{name:'TSCT Portal: Learning Portal for Thaddeus Stevens', source:'Project manager - Semester Final',details:'Lead team of 4 in design/build/implementation of online web portal Python 3 Flask application for college students and instructors\n \nDelegate tasks based on member’s strengths, mediate discussions and provide resources, lead daily stand-ups to discuss progress and achieve sprint goals\n \nEnsure code meets industry standards and test each feature before implementation'},
{name:'Downtown Lancaster: JavaScript Driving Game', source:'Project manager - Semester Final',details:'Design and launch JavaScript driving game for desktop, later developed for touch devices'}]

const resumeJobs =[{name:'Lancaster City Alliance & Block by Block', title:'City Ambassador', local:'Lancaster, PA', from:'Aug 2020 - Present',
duties:'Deliver customer service/hospitality, community relations for City of Lancaster. Represent city in everyday interactions with the community, provide assistance to citizens and visitors\n \nIdentify issues within city zones regarding maintenance and public safety according to city guidelines, assess situations involving businesses and citizens to execute best course of action\n \nInitiate contact with appropriate authorities when warranted, gather information draft detailed incident reports, and complete city maintenance requests\n \nMeet or exceed daily goals for zone map coverage, reporting, business checks, resident contacts'},
{name:"Molly's Pub &Carryout", title:'Shift Manager/Bartender', local:'Lancaster, PA', from:'Feb 2017 - Jul 2020',
duties:'Lead front of house staff of 3-4 people, delegate assignments, enforce business policies with co-workers/customers, write SOP guidelines for all front-of-house tasks. Take charge in high-stress/high-demand situations, implement well thought out solutions to resolve conflicts, direct and organize staff to enact best course of action\n \nCreate content for and manage social media accounts, photograph products, edit photos, post for marketing, escalate Facebook & Instagram following by 500%\n \nRebuild customer base, eliminate issues with neighboring residents/law enforcement, foster safe environment for employees/patrons within the first month and develop strategies in rebranding business, including marketing campaigns and events, increase patronage and bar revenue'}]

const eds = {name:'Thaddeus Stevens College of Technology, Lancaster PA', degree:'Associate of Applied Science in Software Engineering', grad:'May 2021', details:['GPA: 3.8\n \nLeadership Workshop Nomination\n \nACM ICPC Programming Competition']}

function NewlineText(props) {
const text = props.text;
return (<p>{text}</p>)
};

export default function ResumePage(){
  let blah= "resume"

  const skills = relSkills.map((s, index) =>
      <div key={index}>{s}</div>
  )
  const projects = relProjects.map((c) =>
      <div key={c.name}><h2>{c.name}</h2><h3>{c.source}</h3><NewlineText text={c.details}/></div>
  )

  const jobItems = resumeJobs.map((c) =>
      <div key={c.name}><h2>{c.name}</h2><h3>{c.title}</h3><h3>{c.local}</h3><h3>{c.from}</h3><NewlineText text={c.duties}/></div>
  )

  const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
    console.log("flip");
  }

  const [isShown, setIsShown] = useState(false);

  return (
    <StarField>
      <Header>
      {blah}
      </Header>
      <button id={styles.navButton} onClick={toggle}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        type="button" name="button">
        quick nav
      </button>
      {isShown && (
      <nav className={styles.resumeNav}>

        <div
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
          style={{
            display: showMe?"flex":"none",
            zindex:40
          }}>
          <Link href="#skill_section">
            <a>skills</a>
          </Link>
          <Link href="#project_section">
            <a>projects</a>
          </Link>
          <Link href="#employment_section">
            <a>jobs</a>
          </Link>
          <Link href="#education_section">
            <a>education</a>
          </Link>
        </div>

      </nav>
      )}
      <article className={styles.main}>
        <div className={styles.anchor} id="skill_section"/>
        <h2 className={styles.resTitle}>skills</h2>
        <section className={styles.skillContainer}>
        {skills}
        </section>
        <div className={styles.anchor} id="project_section"/>
        <h2 className={styles.resTitle}>projects</h2>
      {projects}
        <div className={styles.anchor} id="employment_section"/>
        <h2 className={styles.resTitle}>employment</h2>
      {jobItems}
      <div className={styles.anchor} id="education_section"/>
      <h2 className={styles.resTitle}>education</h2>
      <div><h2>{eds.degree}</h2><h3>{eds.name}</h3><h3>{eds.grad}</h3><NewlineText text={eds.details}/></div>
      </article>

    </StarField>
  )
}
