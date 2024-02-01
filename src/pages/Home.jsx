import React from 'react'
import { Collection } from '../components/common/content/Collection';
import Header from '../components/common/header/Header';
import Footer from '../components/common/footer/Footer'
import { Categories } from '../components/common/category/Categories';

const Home = () => {
  return (
    <div>
      <Header/>
      <Collection/>
      <Categories />
      <Footer/>
    </div>
  )
}

export default Home;