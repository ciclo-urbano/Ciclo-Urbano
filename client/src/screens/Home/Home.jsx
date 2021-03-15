import React from 'react'
import SimpleSlider from '../../components/SimpleSlider/SimpleSlider'
import './Home.css'
import Layout from '../../components/Shared/Layout/Layout'
import {useSpring, animated} from 'react-spring'

const Home = (props) => {
  const animate = useSpring({ opacity: 1, from: { opacity: 0 } })
  
  return (
    <Layout user={props.user}>
     <div className="welcome-container">
      <div className="welcome-picture">
        <img src="https://images.unsplash.com/photo-1596805827513-33a7b2523abf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" alt="bike-shop-dog"/>
      </div>
        <div className="welcome-header">
          <animated.p style={animate}>
            BIKES MADE WITH 💕
            <span className="community">For our community, by the community🚲</span>
          </animated.p>
        </div>
      </div>
      <p className="featured-header">Ready for a loving home:</p>
      <SimpleSlider />
    </Layout>
  )
}

export default Home