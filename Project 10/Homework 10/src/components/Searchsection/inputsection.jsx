export const inputSection = ({ data, onChange }) => {
  return (
    <select
      
      style={{padding: "10px 20px", border: "none" }}
      onChange={onChange}
      defaultValue="0"
    >
      <option value="0" disabled>
        Filter by Region
      </option>
      {data.map((m, i) => (
        <option key={i} value={m}>
          {m}
        </option>
      ))}
    </select>
  );
};

