import "./css/resume.css";

export default function Resume({ formData }) {
  const skill = formData.skill.map((element, index) => (
    <li key={index}>{element}</li>
  ));

  const exp = formData.experience.map((element, index) => (
    <div className="exp-container" key={index}>
      <p className="job-company">
        {element.company} <span className="date"> &bull; {element.date}</span>
      </p>
      <p>{element.title}</p>
    </div>
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
      <div className="experience-list">{exp}</div>

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
