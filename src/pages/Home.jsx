import React from 'react'
import Footer from '../components/common/footer/Footer';
import Header from '../components/common/header/Header';
import { Collection } from '../components/common/content/Collection';

const Home = () => {
  return (
    <div>
      <Header/>
      <Collection/>
      <Footer/>
    </div>
  )
}

export default Home;