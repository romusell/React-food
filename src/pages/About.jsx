 import '../aboutStyle.css';
 import photo from '../images/photo.jpg';
 
 function About(){
         
    return <div className="container">
  <div className="foo">     
  <div className="main-container">
    <div className="main-content-section">
      
      <div className="about-me-section">
        <h2 className="about-me-profession">Front-End Developer</h2>
        <h1 className="about-me-name">Kovalchuk Roman</h1>
        <p className="about-me-description">Discipline,adherence to deadlines,analytic skills,focus on results
          desire to master new technologies and tools.. </p>
      </div>
      
      <div className="my-project-section">
        <h3 className="main-content-title">Projects</h3>
        <ol className="my-project-list">
          <li className="my-project-item">
            <span className="my-project-text">
              <a href="https://romusell.github.io/react-food-project/" className="my-project-link">https://romusell.github.io/react-food-project/</a>
              ..........
              <span className="my-project-bracket">[</span> React, HTML5, CSS3 <span className="my-project-bracket">]</span>
            </span>
          </li>
          <li className="my-project-item">
            <span className="my-project-text">
              <a href="https://romusell.github.io/react-movie/ "
                className="my-project-link">https://romusell.github.io/react-movie/ </a>
              ............
              <span className="my-project-bracket">[</span> React, JavaScript <span className="my-project-bracket">]</span>
            </span>
          </li>
          <li className="my-project-item">
            <span className="my-project-text">
              <a href="https://romusell.github.io/React-shop/"
                className="my-project-link">https://romusell.github.io/React-shop/</a>
              ..................
              <span className="my-project-bracket">[</span> React.js, Node.js <span className="my-project-bracket">]</span>
            </span>
          </li>
        </ol>
      </div>
      
      <div className="my-work-expirience-section">
        <h3 className="main-content-title">Work Experience</h3>
        
        <div className="my-work-expirience-company-block">
          <h4 className="my-work-expirience-position">Front-End Developer <span
              className="my-work-expirience-company">Freelance</span></h4>
          <p className="my-work-expirience-time">September 2019 - up to now <span
              className="my-work-expirience-divider">|</span> Country</p>
          <ul className="my-work-expirience-duties">
            <li className="my-work-expirience-duty">Layout of sites, promo pages, linking scripts.</li>
            <li className="my-work-expirience-duty">Designing websites, applications, services.</li>
            <li className="my-work-expirience-duty">Optimization and expansion of code functionality, etc. </li>
            <li className="my-work-expirience-duty">Writing and debugging modular texts.</li>
          </ul>
        </div>
        
        <div className="my-work-expirience-company-block">
          <h4 className="my-work-expirience-position">
            Inspector aviation security service <span className="my-work-expirience-company">Ukraine International
              Airlines</span></h4>
          <p className="my-work-expirience-time">March 2015 - October 2019 <span className="my-work-expirience-divider">|</span>
            Country</p>
          <ul className="my-work-expirience-duties">
            <li className="my-work-expirience-duty">Supervises compliance with aviation security requirements.</li>
            <li className="my-work-expirience-duty">Analyzes the results of inspections of compliance with aviation security
              standards, rules and procedures.</li>
            <li className="my-work-expirience-duty">Flight escort deportation.</li>
          </ul>
        </div>
        
        <div className="my-work-expirience-company-block">
          <h4 className="my-work-expirience-position">System Administrator<span className="my-work-expirience-company">
              InfoTechService
            </span></h4>
          <p className="my-work-expirience-time">June 2008 - February 2016 <span className="my-work-expirience-divider">|</span>
            Country</p>
          <ul className="my-work-expirience-duties">
            <li className="my-work-expirience-duty">Installation, configuration, optimization of system software at the
              enterprise</li>
            <li className="my-work-expirience-duty">Data backup, data recovery.</li>
            <li className="my-work-expirience-duty">Connection, testing, preventive maintenance PC. </li>
          </ul>
        </div>
      </div>
      
      <div className="my-education-section">
        <h3 className="my-education-title">Education</h3>
        <h4 className="my-ducation-title-color">Open University of Human Development "Ukraine"</h4>
        <h5 className="my-ducation-management">System Administrator</h5>
        <p className="my-ducation-time">September 2004 - June 2009 <span className="my-ducation-divider">|</span> Country</p>
      </div>
      
    </div>
    <aside className="aside-section">
     <img src={photo} alt="phot" />
      
      <div className="contact-section">
        <h3 className="aside-title">Contacts</h3>
        <div>
          <span className="contact-section-type">C:</span>
          <a className="contact-section-link" href="tel:380508183447">+38050 818 34 27</a>
        </div>
        <div>
          <span className="contact-section-type">E:</span>
          <a className="contact-section-link" href="mailto:romusell@gmail.com">romusell@gmail.com</a>
        </div>
      </div>
      
      <div className="tech-skills-section">
        <h3 className='aside-title'>Tech Skills</h3>
        <ul className="tech-skills-section-list">
          <li className="tech-skills-section-item"><span className="tech-skills-section-item-text">HTML5</span></li>
          <li className="tech-skills-section-item"><span className="tech-skills-section-item-text">CSS3</span></li>
          <li className="tech-skills-section-item"><span className="tech-skills-section-item-text">GIT</span></li>
          <li className="tech-skills-section-item"><span className="tech-skills-section-item-text">WebPack</span></li>
          <li className="tech-skills-section-item"><span className="tech-skills-section-item-text">JavaScript</span></li>
          <li className="tech-skills-section-item"><span className="tech-skills-section-item-text">React.js</span></li>
          <li className="tech-skills-section-item"><span className="tech-skills-section-item-text">Node.js</span></li>
        </ul>
      </div>
      
      <div className="soft-skills-section">
        <h3 className='aside-title'>Soft Skills</h3>
        <ul className="soft-skills-section-list">
          <li className="soft-skills-section-item"><span className="soft-skills-section-item-text">Scrum</span></li>
          <li className="soft-skills-section-item"><span className="soft-skills-section-item-text">Agile</span></li>
          <li className="soft-skills-section-item"><span className="soft-skills-section-item-text">GTD</span></li>
          <li className="soft-skills-section-item"><span className="soft-skills-section-item-text">Teamwork</span></li>
        </ul>
      </div>
    </aside>
  </div>
  </div>
</div>
}
export {About};