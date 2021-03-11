import React from 'react'
import SimpleSlider from '../../components/SimpleSlider/SimpleSlider'
import './Home.css'
import Layout from '../../components/Shared/Layout/Layout'

const Home = (props) => {
  return (
    <Layout user={props.user}>
     <div className="welcome-container">
      <div className="welcome-picture">
        <img src="https://images.unsplash.com/photo-1596805827513-33a7b2523abf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" />
      </div>
      <div className="welcome-header">
          <p>BIKES MADE WITH 💕</p>
          <span className="community">For our community, by the community🚲</span>
        </div>
      </div>  
      <p className="featured-header">Featured Bikes</p>
      <SimpleSlider />
    </Layout>
  )
}

export default Home