import React from 'react'
import { Collection } from '../components/common/content/Collection';
import Header from '../components/common/header/Header';
import { Categories } from '../components/common/category/Categories';
import Trending from '../components/common/trending/Trending';
import Footer from '../components/common/footer/Footer';

const Home = () => {
  return (
    <div>
      <Header/>
      <Collection/>
      <Categories />
      <Trending/>
      <Footer/>
    </div>
  )
}

export default Home;