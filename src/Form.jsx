import "./css/form.css";
import { useState } from "react";

function InputHandler({ value, setValue, type }) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
}

export default function Form({ formData, handleData, skillList, removeSkill }) {
  const [skill, setSkill] = useState("");
  const [job, setJob] = useState({
    company: "",
    start: "",
    end: "",
    date: "",
    title: "",
  });
  const [edu, setEdu] = useState({
    school: "",
    start: "",
    end: "",
    date: "",
    course: "",
  });

  function formatDate(date) {
    if (!date) return "Present";
    const full = date.split("-");
    const year = full[0];
    const monthIndex = parseInt(full[1], 10) - 1;
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${month[monthIndex]} ${year}`;
  }

  return (
    <div className="form-input">
      <div className="container">
        <p>Name</p>
        <InputHandler
          value={formData.name}
          setValue={(val) => handleData("name", val)}
          type={"text"}
        />
        <p>Contact Number</p>
        <InputHandler
          value={formData.number}
          setValue={(val) => handleData("number", val)}
          type={"text"}
        />
        <p>Email Address</p>
        <InputHandler
          value={formData.email}
          setValue={(val) => handleData("email", val)}
          type={"text"}
        />
      </div>

      <div className="container">
        <p>Skills : Maximum of 8</p>
        <InputHandler
          value={skill}
          setValue={(val) => {
            setSkill(val);
          }}
          type={"text"}
        />
        <button
          onClick={() => {
            if (skill.trim() === "") return;
            handleData("skill", skill);
            setSkill("");
          }}
        >
          Add
        </button>
        <ul className="skills-container">
          {skillList.map((item, index) => (
            <li key={index}>
              <p>{item}</p>
              <button onClick={() => removeSkill(index)}>X</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="container">
        <p>Company</p>
        <InputHandler
          value={job.company}
          setValue={(value) => setJob((prev) => ({ ...prev, company: value }))}
          type={"text"}
        />
        <p>Date</p>
        <div>
          <InputHandler
            value={job.start}
            setValue={(value) => setJob((prev) => ({ ...prev, start: value }))}
            type={"month"}
          />
          <span> to </span>
          <InputHandler
            value={job.end}
            setValue={(value) => setJob((prev) => ({ ...prev, end: value }))}
            type={"month"}
          />
        </div>
        <p>Title</p>
        <InputHandler
          value={job.title}
          setValue={(value) => setJob((prev) => ({ ...prev, title: value }))}
          type={"text"}
        />
        <button
          onClick={() => {
            if (job.company.trim() === "" || job.title.trim() === "") return;
            const updatedJob = {
              ...job,
              date: `${formatDate(job.start)} to ${formatDate(job.end)}`,
            };

            setJob(updatedJob);
            handleData("experience", updatedJob);

            setTimeout(() => {
              setJob({
                company: "",
                title: "",
                start: "",
                date: "",
                end: "",
              });
            });
          }}
        >
          Submit
        </button>
      </div>

      <div className="container">
        <p>School</p>
        <InputHandler
          value={edu.school}
          setValue={(value) => setEdu((prev) => ({ ...prev, school: value }))}
          type={"text"}
        />
        <p>Date</p>
        <InputHandler
          value={edu.start}
          setValue={(value) => setEdu((prev) => ({ ...prev, start: value }))}
          type={"month"}
        />
        <span> to </span>
        <InputHandler
          value={edu.start}
          setValue={(value) => setEdu((prev) => ({ ...prev, start: value }))}
          type={"month"}
        />
        <p>Course</p>
        <InputHandler
          value={edu.course}
          setValue={(value) => setEdu((prev) => ({ ...prev, course: value }))}
          type={"text"}
        />
        <button
          onClick={() => {
            if (edu.school.trim() === "" || edu.course.trim() === "") return;
            const updatedEdu = {
              ...edu,
              date: `${formatDate(edu.start)} to ${formatDate(edu.end)}`,
            };

            setEdu(updatedEdu);
            handleData("education", updatedEdu);

            setTimeout(() => {
              setEdu({
                school: "",
                course: "",
                start: "",
                date: "",
                end: "",
              });
            });
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
