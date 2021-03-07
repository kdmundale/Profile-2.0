import StarField from '../componenets/star_field'
import Header from '../componenets/header'
import Head from 'next/head'

export default function StrengthsPage(){

  let blah = "Strengths"
  return (
    <StarField>
      <Header>
      {blah}
      </Header>

    </StarField>
  )
}
