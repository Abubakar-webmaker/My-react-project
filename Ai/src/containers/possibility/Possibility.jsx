import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png';
import { motion } from "framer-motion";

const Possibility = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="py-20 flex justify-center"
    >
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="" />
      </div>

      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
    </motion.section>
  )
}

export default Possibility
