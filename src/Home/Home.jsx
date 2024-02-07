import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import CategoryShowCase from './CategoryShowCase'
import AppStore from './AppStore'

const Home = () => {
  return (
    <div>
        <Banner />
        <HomeCategory />
        <CategoryShowCase />
        <AppStore/>
    </div>
  )
}

export default Home