import React from 'react';
import weather from '../../assets/weather1.png';
import ToDoList from '../../assets/ToDoList.png';
import styles from './projectsStyle.module.css';
import ProjectCard from '../../common/ProjectCard';
import  port from '../../assets/port.png'

function projects() {
  return(
    <section d="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>

        <ProjectCard src={weather} link='https://github.com/Blackshadow45/JavaScript-Code/tree/main/Weather%20Application' h3="Weather Application"/>

         <ProjectCard src={ToDoList} link='https://github.com/Blackshadow45/JavaScript-Code/tree/main/Weather%20Application' h3="To-Do List"/>

         <ProjectCard src={port} link='https://github.com/Blackshadow45/JavaScript-Code/tree/main/Weather%20Application' h3="Portfolio"/>

      </div>

    </section>
  ); 
}

export default projects;
