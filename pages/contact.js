import StarField from '../componenets/star_field'
import Header from '../componenets/header'
import Head from 'next/head'

export default function StrengthsPsge(){
  let blah="contact"
  return (
    <StarField>
      <Header>
      {blah}
      </Header>

    </StarField>
  )
}
