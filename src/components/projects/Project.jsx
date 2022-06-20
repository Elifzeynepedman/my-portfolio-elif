import React from 'react'
import './project.css'
function project() {
  return (
   <section id='project'>
      <p id='project__header'>My Projects</p>
      <div className='my__projects'>
        <article className='my__project'>
          <h2>Otokoç İkinci El Clone</h2>
          <p>Clone of the turkish website used for viewing 2nd Hand Car Prices and their Technical Features
            <br/> <br/> Written with Php, Html, and css</p>
        </article>
        <article className='my__project'>
          <h2>Homework Agenda</h2>
          <p>Allows the users to not forher about their homework and complete it before it’s deadline
            <br/> <br/>Written using Kotlin on android Studio</p>
        </article>
        <article className='my__project'>
          <h2>Jotform Enterprise Web Design</h2>
          <p>Feature management allows the selection of a specific feature and enables the selected servers to use the feature.
            <br/> <br/>Written using Php and MySQL</p>
        </article>
        <article className='my__project'>
          <h2>Moodly</h2>
          <p>A music streaming application where users can listen to playlists depending on their mood using their facial expressions.
            <br/> <br/>Developed using Java, Firebase, and Tensorflow</p>
        </article>
      </div>
   </section>
  )
}

export default project
