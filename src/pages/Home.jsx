import React from 'react'
import { Collection } from '../components/common/content/Collection';
import Header from '../components/common/header/Header';
import { Categories } from '../components/common/category/Categories';

const Home = () => {
  return (
    <div>
      <Header/>
      <Collection/>
      <Categories />
    </div>
  )
}

export default Home;