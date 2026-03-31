import { useState } from "react";
import "./App.css";
import FormHeader from "./components/FormHeader";
import PersonalInfo from "./components/PersonalInfo";
import HobbiesSection from "./components/HobbiesSection";
import QualificationTable from "./components/QualificationTable";
import CoursesSection from "./components/CoursesSection";

function App() {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", day: "", month: "", year: "",
    email: "", mobile: "", gender: "", address: "", city: "",
    pinCode: "", state: "", country: "", othersText: "",
    hobbies: { drawing: false, singing: false, dancing: false, sketching: false, others: false },
    qualification: [
      { exam: "Class X",    board: "", percentage: "", yearOfPassing: "" },
      { exam: "Class XII",  board: "", percentage: "", yearOfPassing: "" },
      { exam: "Graduation", board: "", percentage: "", yearOfPassing: "" },
      { exam: "Masters",    board: "", percentage: "", yearOfPassing: "" },
    ],
    course: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, hobbies: { ...formData.hobbies, [name]: checked } });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleQualification = (index, field, value) => {
    const updated = [...formData.qualification];
    updated[index][field] = value;
    setFormData({ ...formData, qualification: updated });
  };

  return (
    <div className="page">
      <div className="container">
        <FormHeader />
        <form onSubmit={(e) => { e.preventDefault(); alert("Form Submitted!"); }}>
          <table className="main-table">
            <tbody>
              <PersonalInfo handleChange={handleChange} />
              <HobbiesSection handleChange={handleChange} />
              <QualificationTable qualification={formData.qualification} handleQualification={handleQualification} />
              <CoursesSection handleChange={handleChange} />
            </tbody>
          </table>
          <div className="btn-row">
            <button type="submit" className="form-btn">Submit</button>
            <button type="reset" className="form-btn">Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;