import "./css/index.css";
import Form from "./Form";
import Resume from "./Resume";
import { useState } from "react";
import { usePDF } from "react-to-pdf";

const SavePdf = ({ file }) => {
  const { toPDF, targetRef } = usePDF({ filename: "resume.pdf" });
  return (
    <div>
      <button onClick={() => toPDF()}>Download PDF</button>
      <div ref={targetRef}>{file}</div>
    </div>
  );
};

export default function App() {
  const [form, setForm] = useState({
    name: "",
    number: "",
    email: "",
    skill: [],
    experience: [],
    education: [],
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
      <div>
        <SavePdf file={<Resume formData={form} />} />
      </div>
    </main>
  );
}
