function PersonalInfo({ handleChange }) {
  const days = ["Day:", ...Array.from({ length: 31 }, (_, i) => i + 1)];
  const months = ["Month:", "January", "February", "March", "April", "May",
    "June", "July", "August", "September", "October", "November", "December"];
  const years = ["Year:", ...Array.from({ length: 50 }, (_, i) => 2025 - i)];

  return (
    <>
      <tr>
        <td className="field-label">FIRST NAME</td>
        <td className="field-value">
          <input type="text" name="firstName" maxLength={30} onChange={handleChange} className="form-input" />
          <span className="hint-text">(max 30 characters a-z and A-Z)</span>
        </td>
      </tr>
      <tr>
        <td className="field-label">LAST NAME</td>
        <td className="field-value">
          <input type="text" name="lastName" maxLength={30} onChange={handleChange} className="form-input" />
          <span className="hint-text">(max 30 characters a-z and A-Z)</span>
        </td>
      </tr>
      <tr>
        <td className="field-label">DATE OF BIRTH</td>
        <td className="field-value">
          <select name="day" onChange={handleChange} className="form-select">
            {days.map((d, i) => <option key={i}>{d}</option>)}
          </select>
          <select name="month" onChange={handleChange} className="form-select">
            {months.map((m, i) => <option key={i}>{m}</option>)}
          </select>
          <select name="year" onChange={handleChange} className="form-select">
            {years.map((y, i) => <option key={i}>{y}</option>)}
          </select>
        </td>
      </tr>
      <tr>
        <td className="field-label">EMAIL ID</td>
        <td className="field-value">
          <input type="email" name="email" onChange={handleChange} className="form-input" />
        </td>
      </tr>
      <tr>
        <td className="field-label">MOBILE NUMBER</td>
        <td className="field-value">
          <input type="tel" name="mobile" maxLength={10} onChange={handleChange} className="form-input" />
          <span className="hint-text">(10 digit number)</span>
        </td>
      </tr>
      <tr>
        <td className="field-label">GENDER</td>
        <td className="field-value">
          <label className="radio-label">Male <input type="radio" name="gender" value="male" onChange={handleChange} /></label>
          <label className="radio-label">Female <input type="radio" name="gender" value="female" onChange={handleChange} /></label>
        </td>
      </tr>
      <tr>
        <td className="field-label" style={{ verticalAlign: "top", paddingTop: "12px" }}>ADDRESS</td>
        <td className="field-value">
          <textarea name="address" onChange={handleChange} className="form-textarea" />
        </td>
      </tr>
      <tr>
        <td className="field-label">CITY</td>
        <td className="field-value">
          <input type="text" name="city" maxLength={30} onChange={handleChange} className="form-input" />
          <span className="hint-text">(max 30 characters a-z and A-Z)</span>
        </td>
      </tr>
      <tr>
        <td className="field-label">PIN CODE</td>
        <td className="field-value">
          <input type="text" name="pinCode" maxLength={6} onChange={handleChange} className="form-input" />
          <span className="hint-text">(6 digit number)</span>
        </td>
      </tr>
      <tr>
        <td className="field-label">STATE</td>
        <td className="field-value">
          <input type="text" name="state" maxLength={30} onChange={handleChange} className="form-input" />
          <span className="hint-text">(max 30 characters a-z and A-Z)</span>
        </td>
      </tr>
      <tr>
        <td className="field-label">COUNTRY</td>
        <td className="field-value">
          <input type="text" name="country" onChange={handleChange} className="form-input" />
        </td>
      </tr>
    </>
  );
}

export default PersonalInfo;