import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-center py-6"
    >
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content' >
        <h1 className='gradient__text' class="cursor typewriter-animation gradient__text">
          Let&apos;s Build Something amazing 
        </h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

         <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
         </div>

         <div className='gpt3__header-content__people'>
          <img src={people} alt="" />
          <p>1,600 people requested access a visit in last 24 hours</p>
         </div>
      </div>

      <div className='gpt3__header-image'>
        <img src={ai} alt="" />
      </div>
      
    </div>
    </motion.header>
  )
}

export default Header
