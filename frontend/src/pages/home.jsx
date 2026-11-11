import React from 'react'
import Hero from '../components/hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/bestseller'
import OurPolicy from '../components/OurPolicy'
import Newsletterbox from '../components/newsletterbox'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller/>
      <OurPolicy/>
      <Newsletterbox/>
    </div>
  )
}

export default Home
