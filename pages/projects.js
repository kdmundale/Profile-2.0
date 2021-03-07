import StarField from '../componenets/star_field'
import Header from '../componenets/header'
import Head from 'next/head'

export default function ProjectsPage(){
  let blah = "Projects";

  return (
    <StarField>
      <Header>
      {blah}
      </Header>

    </StarField>
  )
}
