import React from 'react';
import { motion } from "framer-motion";
import './feature.css';
import Feature from '../../components/feature/Feature';

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'From they fine john he give of rich he. They age and draw mrs like.',
  },
  {
    title: 'Become the tended active',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not.',
  },
  {
    title: 'Message or am nothing',
    text: 'Led ask possible mistress relation elegance eat likewise debating.',
  },
  {
    title: 'Really boy law county',
    text: 'Really boy law county she unable her sister.',
  },
];

const Features = () => (
  <div className='gpt3__features section__padding' id='features'>
    
    {/* Heading Animation */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className='gpt3__features-heading'
    >
      <h1 className='gradient__text'>
        The Future is Now and You Just Need to Realize It.
      </h1>
      <p>Request Early Access to Get Started</p>
    </motion.div>

    {/* Features Cards */}
    <div className='gpt3__features-container'>
      {featuresData.map((item, index) => (
        <motion.div
          key={item.title + index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        >
          <Feature title={item.title} text={item.text} />
        </motion.div>
      ))}
    </div>

  </div>
);

export default Features;

