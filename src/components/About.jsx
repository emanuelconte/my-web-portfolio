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
          With over 4 years of experience in full-stack development, I specialize in building modern web applications using Java/Spring Boot and Python 
          for robust backend systems and React/TypeScript for dynamic frontend experiences. With expertise across the entire development stack, 
          I architect solutions that are scalable, secure, and maintainable - from RESTful APIs and microservices to responsive user interfaces.
          My technical toolkit includes cloud technologies (AWS, Docker) and DevOps practices to streamline deployment, along with a strong focus 
          on clean code principles and performance optimization. I thrive in collaborative environments where I can solve complex problems 
          while delivering tangible value through technology. You can explore my projects and contributions on
          <a 
            href='https://github.com/emanuelconte' 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#915eff] hover:text-white transition-colors duration-300 font-semibold mx-1"
          > 
            GitHub 
          </a> 
          and view my professional credentials on 
          <a 
            href='https://www.linkedin.com/in/emanuel-conte-cardoso/' 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#915eff] hover:text-white transition-colors duration-300 font-semibold mx-1"
          > 
            LinkedIn
          </a>. 
          I bring both technical excellence and business acumen to every project, delivering solutions that are not just functional but truly impactful.
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