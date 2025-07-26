import React from 'react';
import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
function Skills() {
  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>

            <SkillList src={checkMarkIcon} skill="HTML"/>
            <SkillList src={checkMarkIcon} skill="CSS"/>
            <SkillList src={checkMarkIcon} skill="JavaScript"/>
            <SkillList src={checkMarkIcon} skill="React"/>
            <SkillList src={checkMarkIcon} skill="Angular"/>
            <SkillList src={checkMarkIcon} skill="TypeScript"/>

        </div>
      <hr/>
        <div className={styles.skillList}>
           <SkillList src={checkMarkIcon} skill="c"/>
           <SkillList src={checkMarkIcon} skill="Core Java"/>
            <SkillList src={checkMarkIcon} skill="Advanced Java"/>
            <SkillList src={checkMarkIcon} skill="Hibernate"/>
            <SkillList src={checkMarkIcon} skill="Spring Framework"/>
            <SkillList src={checkMarkIcon} skill="Spring Boot"/>
            <SkillList src={checkMarkIcon} skill="Microservices"/>

        </div>
     

    </section>
  )
}

export default Skills;
