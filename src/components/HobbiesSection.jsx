function HobbiesSection({ handleChange }) {
  return (
    <tr>
      <td className="field-label" style={{ verticalAlign: "top", paddingTop: "12px" }}>HOBBIES</td>
      <td className="field-value">
        <div>
          <label className="check-label">Drawing <input type="checkbox" name="drawing" onChange={handleChange} /></label>
          <label className="check-label">Singing <input type="checkbox" name="singing" onChange={handleChange} /></label>
          <label className="check-label">Dancing <input type="checkbox" name="dancing" onChange={handleChange} /></label>
          <label className="check-label">Sketching <input type="checkbox" name="sketching" onChange={handleChange} /></label>
        </div>
        <div style={{ marginTop: "8px" }}>
          <label className="check-label">Others <input type="checkbox" name="others" onChange={handleChange} /></label>
          <input type="text" name="othersText" onChange={handleChange} className="others-input" />
        </div>
      </td>
    </tr>
  );
}

export default HobbiesSection;