import './App.scss'
import EmailSvg from './email.svg'
import GithubSvg from './github.svg'
import LinkedInSvg from './linkedin.svg'

function App() {
  return (
    <div className="app">
      <h1 className="full-name">
        <span className="xav">XAV</span>IER LACEY
      </h1>
      <div className="content">
        <p>
          Hi I'm Xav, a software engineer living in London with five years' experience building
          great products specialising in Node.js, TypeScript and React.
        </p>
        <div className="links">
          {/* <div className="icons"> */}
          <a href="mailto:x@vierlacey.com" target="_blank" rel="noreferrer">
            <img src={EmailSvg} alt="email" />
          </a>
          <a href="https://github.com/xavlacey/" target="_blank" rel="noreferrer">
            <img src={GithubSvg} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/xlacey/" target="_blank" rel="noreferrer">
            <img src={LinkedInSvg} alt="linkedin" />
          </a>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default App
