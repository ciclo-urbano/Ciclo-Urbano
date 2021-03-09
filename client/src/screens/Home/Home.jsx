import React from 'react'
import './Home.css'
import Layout from '../../components/Shared/Layout/Layout'

const Home = (props) => {
  return (
    <Layout user={props.user}>
      <div className="home">
        Test test
      </div>
      </Layout>
  )
}

export default Home