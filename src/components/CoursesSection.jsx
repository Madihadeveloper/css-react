function CoursesSection({ handleChange }) {
  return (
    <tr>
      <td className="field-label">COURSES<br />APPLIED FOR</td>
      <td className="field-value">
        {["BCA", "B.Com", "B.Sc", "B.A"].map((c) => (
          <label key={c} className="radio-label">
            {c} <input type="radio" name="course" value={c} onChange={handleChange} />
          </label>
        ))}
      </td>
    </tr>
  );
}

export default CoursesSection;