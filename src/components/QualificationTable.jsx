function QualificationTable({ qualification, handleQualification }) {
  return (
    <tr>
      <td className="field-label" style={{ verticalAlign: "top", paddingTop: "12px" }}>QUALIFICATION</td>
      <td className="field-value">
        <table className="qual-table">
          <thead>
            <tr>
              <th className="qual-th">Sl.No.</th>
              <th className="qual-th">Examination</th>
              <th className="qual-th">Board</th>
              <th className="qual-th">Percentage</th>
              <th className="qual-th">Year of Passing</th>
            </tr>
          </thead>
          <tbody>
            {qualification.map((q, i) => (
              <tr key={i}>
                <td className="qual-td">{i + 1}</td>
                <td className="qual-td">{q.exam}</td>
                <td className="qual-td">
                  <input type="text" maxLength={10} className="qual-input"
                    onChange={(e) => handleQualification(i, "board", e.target.value)} />
                </td>
                <td className="qual-td">
                  <input type="number" step="0.01" min="0" max="100" className="qual-input"
                    onChange={(e) => handleQualification(i, "percentage", e.target.value)} />
                </td>
                <td className="qual-td">
                  <input type="text" className="qual-input"
                    onChange={(e) => handleQualification(i, "yearOfPassing", e.target.value)} />
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan={3} className="qual-td">(10 char max)</td>
              <td colSpan={2} className="qual-td">(upto 2 decimal)</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}

export default QualificationTable;