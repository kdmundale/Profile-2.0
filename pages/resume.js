import StarField from '../componenets/star_field'
import Header from '../componenets/header'
import Head from 'next/head'

export default function ResumePage(){
  let blah= "Resume"
  return (
    <StarField>
      <Header>
      {blah}
      </Header>

    </StarField>
  )
}
