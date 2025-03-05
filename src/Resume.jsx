import "./css/resume.css";

export default function Resume({ formData }) {
  const skill = formData.skill.map((element, index) => (
    <li key={index}>{element}</li>
  ));
  return (
    <div className="resume-body">
      <div className="header">
        <h1>{formData.name || "Your name here"}</h1>
        <div className="contact">
          <p>{formData.number || "contact number"}</p>
          <p>{formData.email || "email"}</p>
        </div>
      </div>

      <div className="line-design"></div>
      <h2>Skils:</h2>
      <div>
        <ul className="skill-list">{skill}</ul>
      </div>

      <div className="line-design"></div>
      <h2>Experience:</h2>
      <div className="experience-list">
        <div className="exp-container">
          <p className="job-company">
            Google <span className="date"> &bull; 2020 - now</span>
          </p>
          <p>Senior Developer</p>
        </div>
        <div className="exp-container">
          <p className="job-company">
            Facebook <span className="date"> &bull; 2015 - 2020</span>
          </p>
          <p>Devops</p>
        </div>
      </div>
      <div className="experience-list">
        <div className="exp-container">
          <p className="job-company">
            Google <span className="date"> &bull; 2012 - 2014</span>
          </p>
          <p>Software Engineer</p>
        </div>
        <div className="exp-container">
          <p className="job-company">
            Telus <span className="date"> &bull; 2009 - 2012</span>
          </p>
          <p>Junior Developer</p>
        </div>
      </div>

      <div className="line-design"></div>
      <h2>Education:</h2>
      <div className="education">
        <div className="education-list">
          <div className="edu-container">
            <p className="school">
              Ateneo<span className="date"> &bull; 2007 - 2009</span>
            </p>
            <p>Software Engineer</p>
          </div>
          <div className="education-list">
            <p className="school">
              University of Iloilo{" "}
              <span className="date"> &bull; 2003 - 2007</span>
            </p>
            <p>Information Technology</p>
          </div>
        </div>
      </div>
    </div>
  );
}
