import React from 'react';

import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'


const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h3 className="text-white text-20[px] font-bold text-center">{title}</h3>
        </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          I am a skilled full-stack software engineer with a strong background in software development specialised in Java, Javascript and experience in frameworks like Spring, React and Node.js. 
          Through three years of hands-on software development, I have honed my expertise and problem-solving abilities to deliver efficient and reliable solutions.<br />
          My software engineering skills are well-versed, and I continuously strive to enhance my skills and stay up-to-date with the latest technologies, 
          as showcased by certifications on my 
          <a href='https://www.linkedin.com/in/emanuel-conte-cardoso-20b75614b/' target="_blank"> LinkedIn </a> 
          profile. With strong organizational and time management abilities, I bring expertise and enthusiasm 
          to drive positive outcomes for the teams I work with.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")