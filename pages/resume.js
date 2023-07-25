import StarField from '../componenets/star_field'
import Header from '../componenets/header'
import MyFooter from "../componenets/footer"
import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from '../styles/Resume.module.css'

const softSkills =['Inclusion advocate', 'Continuous self-motivated learner', 'Honest and sincere communicator', 'Cultivates supportive learning environment', 'Trauma-informed conflict resolution', 'Creative thinker and problem solver']
const hardSkills =['Microsoft Office Suite / Microsoft Exchange', 'PHP / JavaScript / HTML / CSS', 'REACT / NEXTJS', 'OOP / Data Structures', 'SQL / MySQL / PostgreSQL Database', 'Version Control / Git / GitHub']

const relProjects=[{name:'Lancaster City Nutrition Website & Web Application', source:'Personal Project/ In Development', details:'Design, model, and launch website and web application for Lancaster City Nutrition. Gather and refine specifications and requirements based on technical needs, collaborate with customer to establish and prioritize user stories, maintain project integrity with git version control\n \nWrite well designed, testable, efficient Python 3 code for Flask application by using best software development practices. Create website layout/user interfaces by using standard HTML/CSS practices and templating, keep theme to customer’s desired esthetic \n \nBuild/test SQL database using pgAdmin, integrate data into user friendly UI for both registered users and admin services through web application'},
{name:'Tribute to Torchy Togs: Paper Doll Web Application', source:'Personal Project', details:'Begin online, interactive, vintage paper-doll website using raw JavaScript, including responsive design and touch technology for desktop and mobile devices\n \nCurate, edit, and remaster images and modify files to improve website loading by 75%, implement improved JS functions to raise performance by 60%'},
{name:'Dad Joke App', source:'Personal Project', details:'Develop and deploy random dad-joke generating app using JavaScript/REST API with responsive design features, code with Flutter for mobile Android and iOS deployment'},
{name:'CLT- The CSET Supplemental Learning Tool React/Next.js Application', source:'Semester Final',details:'Plan and build supplemental web application to be used as a learning support tool for the Computer Software Engineering students at Thaddeus Stevens College of Technology\n \nIdentified web-based user interactions and design responsive user interface using React concepts\n \nOptimize components for maximum efficiency and use over multiple devices\n \nDesign front end architecture to support user-interface with complete accuracy, integrate application with 3rd party services\n \nImplement SQL database and security for sustained use and ease of administration, troubleshooting software bugs, manage data efficiently maintain data integrity'},
{name:'Nursing Home Portal', source:'Project manager - Semester Final',details:'Instantiate mock web portal for inpatient nursing home in raw PHP/JavaScript, prepare login roles and access levels according to customer specifications, include forms to submit and tables to display data\n \nGenerate user stories and set weekly sprint goals to maintain progress, maintain project integrity using git version control and testing\n \nConstruct secure MySQL database, use phpMyAdmin for database administration, encrypt sensitive data'},
{name:'TSCT Portal: Learning Portal for Thaddeus Stevens', source:'Project manager - Semester Final',details:'Lead team of 4 in design/build/implementation of online web portal Python 3 Flask application for college students and instructors\n \nDelegate tasks based on member’s strengths, mediate discussions and provide resources, lead daily stand-ups to discuss progress and achieve sprint goals\n \nEnsure code meets industry standards and test each feature before implementation'},
{name:'Downtown Lancaster: JavaScript Driving Game', source:'Project manager - Semester Final',details:'Design and launch JavaScript driving game for desktop, later developed for touch devices'}]

const resumeJobs =[{name:'Southern Airways Express', title:'IT Manager / System Administrator', local:'Lancaster, PA (remote)', from:'April 2021-Present', duties:'Logistical management of all IT equipment in continental US. Plan, provision, deploy, orchestrate installation, and provide ongoing management for all tech-related equipment including onsite infrastructure for 19 new stations and 65 global remote staff as footprint grew by 125% from 2021-2022. Maintain budget and schedule. Create complete tech deployment ‘kits’ for individuals and stations for easy drop-shipment. Coordinate movement of equipment for repair/replacement/n/nCreate documentation and SOPs for deployment and destruction of equipment. Facilitate updates and device replacement to maintain technical integrity, including hardware and software upgrades, in over 27 facilities. Improve security and performance. Spearhead company-wide migration of all devices to Windows 10/11/n/nMaintain accurate inventory and status of all devices through IT management systems, including Kaseya VSA, SnipeIT, TeamViewer, and IBM Maas360. Facilitate company-wide mobile migration of 150+ devices to new mobile provider, including initial deployment of new MDM. Create, adjust, and maintain user group policy, monitor application deployment, and secure missing devices within Maas360/n/nDesign, build, maintain, and provide user instruction of master digital library for pilots and ground crew for cross-use over iOS and Windows devices. Expedite deployment of mobile aeronautical chart system in the continental US for flight crew use in accordance with FAA and DOT standards. Assist with technical manual access with the addition of 5 new aircraft types to fleet. Coordinate with outside vendors to resolve issues for users and optimize the use of products/n/nWrite and deploy testing package for in-house Laravel PHP web application and implement PHPUnit tests. Isolate and fix internal bugs. Optimize and add features for ease of use. Perform user testing prior to deployment and implement web application for company use/n/nAdminister technical support for multiple end users, including proprietary software, reservation and flight management software, web applications, hardware issues, and Microsoft Office Online/Microsoft Office Exchange. Escalate issues appropriately with third-party vendors, maintain accurate records, and document progress to follow through on all pending tickets/n'},
{name:'Lancaster City Alliance', title:'City Ambassador', local:'Lancaster, PA', from:'Jul 2020 - Present',
duties:'Deliver customer service, hospitality, and act as community relations liaison for the City of Lancaster. Represent the city in everyday interactions with the community, provide assistance to citizens, business owners, and visitors\n \nIdentify issues within city zones regarding maintenance and public safety in accordance with mandated city guidelines, assess situations/incidents, and assist any parties by providing direction on an appropriate course of action. Gather information, draft detailed incident reports, and complete and submit city maintenance requests\n \nInitiate contact with city authorities/law enforcement when warranted\n'},
{name:"Molly's", title:'Manager', local:'Lancaster, PA', from:'Feb 2017 - Jul 2020',
duties:'Lead front-of-house staff of 10 people, delegate assignments, enforce business policies with co-workers/customers, and create SOP guidelines for all front-of-house tasks. Mitigate high-stress/high-demand situations, implement well-thought-out solutions to resolve conflicts, direct and organize staff to enact the best course of action\n \nCreate content for and manage social media accounts, photograph products, edit photos, post for marketing, and increase Facebook & Instagram following by 500%\n \nRebuild customer base, eliminate issues with neighboring residents/law enforcement, foster safe environment for employees/patrons within the first month and develop strategies in rebranding business, including marketing campaigns and events, increase patronage and bar revenue\n \nMitigate the impact of Covid-19 Shutdown by assisting in pivoting business plan from in-house to carry-out service'},
{name:'Hunger-N-Thirst',title:'Bartender',local:'Lancaster, PA',from:'May 2013 - Apr 2016',duties:'Satisfy goals for product sales and totals, brainstorm creative ideas for products and develop with peers\n \nEnsure customers receive quality product and experience through multi-tasking and assisting in all aspects of service\n \nAttend seminars/meetings for continued education in product knowledge including yearly RAMP & Cicerone Certifications'},
{name:"Chancey's Pub",title:'Bartender/Server',local:'East Petersburg, PA',from:'Oct 2007 - Sept 2011',duties:''},
{name:'Cafe Chuckles',title:'Server/Bartender',local:'Lancaster,PA',from:'Feb 2005 - Oct 2007', duties:''},
{name:'Sterling Custom Cabinetry', title:'Manager, Rough Lumber Department', local:'Lancaster, PA', from:'Sept 2003 - Sept 2006', duties:'Analyze and interpret conceptual drawings and blueprints to create custom moldings, define needs for material selection by understanding build requirements and paint/stain finishes\n \nSolve problems by troubleshooting machinery and equipment, adjust calibration and replacing/repairing parts as needed\n \nConsistently deliver weekly product goals by supplying needed material to cabinetmakers, ensuring production continues on schedule'}]

const eds = [{name:'Thaddeus Stevens College of Technology, Lancaster PA', degree:'Associate of Applied Science in Software Engineering', grad:'May 2021', details:['Leadership Workshop Nomination\n \nACM ICPC Programming Competition']},{name:'Southern New Hampshire University', degree:'Bachelor of Science in Computer Science', grad:'Ongoing', details:['']}]

function NewlineText(props) {
const text = props.text;
return (<p>{text}</p>)
};

export default function ResumePage(){
  let blah= "resume"

  const soft = softSkills.map((s, index) =>
      <div key={index}>{s}</div>
  )
  const hard = hardSkills.map((s, index) =>
      <div key={index}>{s}</div>
  )
  // const projects = relProjects.map((c) =>
  //     <div key={c.name}><h2>{c.name}</h2><h3>{c.source}</h3><NewlineText text={c.details}/></div>
  // )

  const jobItems = resumeJobs.map((c) =>
      <div key={c.name}><h2>{c.name}</h2><h3>{c.title}</h3><h3>{c.local}</h3><h3>{c.from}</h3><NewlineText text={c.duties}/></div>
  )

  const schools = eds.map((c) =>
      <div key={c.name}><h2>{c.degree}</h2><h3>{c.name}</h3><h3>{c.grad}</h3><NewlineText text={c.details}/></div>
  )

  const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
    console.log("flip");
  }

  return (
    <StarField>
      <Header>
      {blah}
      </Header>
      <button id={styles.navButton}
        onClick={toggle}
        type="button" name="button">
        quick nav
      </button>
      <nav className={styles.resumeNav}
          style={{
            display: showMe?"flex":"none",
            zindex:40
          }}>
          <ul>
          <li><Link href="#skill_section">
            <a>skills</a>
          </Link></li>
          <li><Link href="#project_section">
            <a>projects</a>
          </Link></li>
          <li><Link href="#employment_section">
            <a>jobs</a>
          </Link></li>
          <li><Link href="#education_section">
            <a>education</a>
          </Link></li>
          </ul>
      </nav>

      <article className={styles.main}>
        <div className={styles.anchor} id="skill_section"/>
        <h4>skills</h4>
        <section className={styles.skillContainer}>
        {soft}
        <section className={styles.skillContainer}>
        {hard}
        </section>

        <div className={styles.anchor} id="employment_section"/>
        <h4>employment</h4>
      {jobItems}
      <div className={styles.anchor} id="education_section"/>
      <h4>education</h4>
      {schools}
      </article>

    <MyFooter/>
    </StarField>
  )
}
