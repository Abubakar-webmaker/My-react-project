import { useState } from 'react'

import './App.css';

import './components/navbar/Navbar'
import './components/feature/Feature'
import './components/cta/CTA'
import './components/brand/Brand'
import './components/article/Article'

import './containers/blog/Blog'
import './containers/features/Features'
import './containers/footer/Footer'
import './containers/header/Header'
import './containers/possibility/Possibility'
import './containers/whatGPT3/WhatGPT'
import Navbar from './components/navbar/Navbar';
import Header from './containers/header/Header';
import Brand from './components/brand/Brand';
import WhatGPT from './containers/whatGPT3/WhatGPT';
import Features from './containers/features/Features';
import Possibility from './containers/possibility/Possibility';
import CTA from './components/cta/CTA';
import Blog from './containers/blog/Blog';
import Footer from './containers/footer/Footer';

import './App.css'


const App = () => (
  <div className='App'>
    <div className='gradient__bg'>
      
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPT />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
)

export default App
