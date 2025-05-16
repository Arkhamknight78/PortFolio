import { useState, useEffect } from "react"
import "../Skills/indexSk.scss"
import "../Projects/indexProject.scss"
// import "../Projects/projectCard.scss"
import AnimatedLetters from "../AnimatedLetters/indexAni"
import Loader from "react-loaders"

const projects = [
  {
    title: "Mega Blog",
    description:
      "Scalable blogging platform with React, Redux Toolkit, and Appwrite for backend services. Implemented JWT-based authentication and session management.",
    tools: [ "React", "Appwrite"],
    link: "https://github.com/Arkhamknight78/MegaBlog",
    live: "https://blog-site-xi-eight.vercel.app/",
  },
  {
    title: "TubeForge",
    description:
      "A video-sharing platform with features like video upload, playback, search, authentication, and comments.",
    tools: ["Node.js", "Express", "MongoDB"],
    link: "https://github.com/Arkhamknight78/TubeForge",
  },
  {
    title: "Journal App",
    description:
      "A secure journaling web app with full CRUD operations. Includes user authentication and session management.",
    tools: ["Java", "Spring Boot", "MongoDB"],
    link: "https://github.com/Arkhamknight78/Journaling_App",
  }
]

const Project = () => {
  const [letterClass, setletterClass] = useState("text-animate")

  useEffect(() => {
    // Set the timeout
    const timeoutId = setTimeout(() => {
      setletterClass("text-animate-hover")
    }, 3000)

    // Clear the timeout when the component is unmounted
    return () => clearTimeout(timeoutId)
  }, [])
  return (
    <>
      <Loader type="cube-transition" />
      <div className="container skill-page projects">
        <div className="text-zone">
          <h1>
            <u>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={["P", "r", "o", "j", "e", "c", "t", "s"]}
                idx={15}
              />
            </u>
          </h1>
          <div className="projects-grid">
            {projects.map((proj, index) => (
              <div className="project-card" key={index}>
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <div className="tools">
                  {proj.tools.map((tool, i) => (
                    <span key={i} className="tool">
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="links">
                  <a href={proj.link} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Project
