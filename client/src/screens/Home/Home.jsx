import React from 'react'
import SimpleSlider from '../../components/SimpleSlider/SimpleSlider'
import './Home.css'
import Layout from '../../components/Shared/Layout/Layout'

const Home = (props) => {
  return (
    <Layout user={props.user}>
      <SimpleSlider />
    </Layout>
  )
}

export default Home