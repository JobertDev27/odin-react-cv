import "./css/index.css";
import "./css/form.css";
import Resume from "./Resume";
import { useState } from "react";

function InputHandler({ value, setValue }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
}
function Form({ formData, handleData, skillList, removeSkill }) {
  const [skill, setSkill] = useState("");

  return (
    <div className="form-input">
      <div className="container">
        <p>Name</p>
        <InputHandler
          value={formData.name}
          setValue={(val) => handleData("name", val)}
        />
        <p>Contact Number</p>
        <InputHandler
          value={formData.number}
          setValue={(val) => handleData("number", val)}
        />
        <p>Email Address</p>
        <InputHandler
          value={formData.email}
          setValue={(val) => handleData("email", val)}
        />
      </div>

      <div className="container">
        <p>Skills : Maximum of 8</p>
        <InputHandler
          value={skill}
          setValue={(val) => {
            setSkill(val);
          }}
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
    </div>
  );
}

export default function App() {
  const [form, setForm] = useState({
    name: "",
    number: "",
    email: "",
    skill: [],
    experience: [],
    experienceInfo: {},
    education: "",
  });

  function handleData(key, value) {
    setForm((prev) => ({
      ...prev,
      [key]: Array.isArray(prev[key]) ? [...prev[key], value] : value,
    }));
  }

  function removeSkill(index) {
    setForm((prev) => ({
      ...prev,
      skill: prev.skill.filter((_, i) => i !== index),
    }));
  }

  return (
    <main>
      <Form
        formData={form}
        handleData={handleData}
        skillList={form.skill}
        removeSkill={removeSkill}
      />
      <Resume formData={form} />
    </main>
  );
}
