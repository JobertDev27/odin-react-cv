import './css/index.css';
import './css/resume.css'
import './css/form.css'
import { useState } from "react";


// TODO

// Learn how to target element with onchange












function TextInput () {
    const [text, setText] = useState({value : "name"});
    
    return (
        <input type='text' onChange={(e) => {
            setText({text, value : e.target.value})
        }} />
    )
}

function Form () {
    return (
        <div className='form-input'>
            <div className='container'>
                <p>name</p>
                <TextInput />
            </div>
        </div>
    )
}

function Resume () {
    return (
        <div className="resume-body">
            <div className="header">
                <h1>Jobert Poylan Jr</h1>
                <div className="contact">
                    <p>0912345678910</p>
                    <p>jobertpoylanjr@gmail.com</p>
                </div>
                
            </div>
            
            <div className="line-design"></div>
            <h2>Skils:</h2>
            <div className="skill-list">
                <p>html</p>
                <p>CSS</p>
                <p>Javascript</p>
                <p>React</p>
                <p>Java</p>
                <p>Godot</p>
                <p>Python</p>
                <p>Webpack</p>
            </div>

            <div className="line-design"></div>
            <h2>Experience:</h2>
            <div className="experience-list">
                <div className="exp-container">
                    <p className="job-company">Google <span className="date"> &bull; 2020 - now</span></p>
                    <p>Senior Developer</p>
                </div>
                <div className="exp-container">
                    <p className="job-company">Facebook <span className="date"> &bull; 2015 - 2020</span></p>
                    <p>Devops</p>
                </div>
            </div>
            <div className="experience-list">
                <div className="exp-container">
                    <p className="job-company">Google <span className="date"> &bull; 2012 - 2014</span></p>
                    <p>Software Engineer</p>
                </div>
                <div className="exp-container">
                    <p className="job-company">Telus <span className="date"> &bull; 2009 - 2012</span></p>
                    <p>Junior Developer</p>
                </div>
            </div>

            <div className="line-design"></div>
            <h2>Education:</h2>
            <div className="education">
                <div className="education-list">
                    <div className="edu-container">
                        <p className="school">Ateneo<span className="date"> &bull; 2007 - 2009</span></p>
                        <p>Software Engineer</p>
                    </div>
                    <div className="education-list">
                        <p className="school">University of Iloilo <span className="date"> &bull; 2003 - 2007</span></p>
                        <p>Information Technology</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function App () {
    return (
        <main>
            <Form />
            <Resume />
        </main>
    )
}