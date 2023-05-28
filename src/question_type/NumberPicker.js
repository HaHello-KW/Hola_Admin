import React, { useState } from 'react';

function NumberSelector({ onSelect, buttonText }) {
  const [selectedNumber, setSelectedNumber] = useState(null);

  const handleNumberChange = (event) => {
    const newNumber = parseInt(event.target.value);
    setSelectedNumber(newNumber);
  };

  const handleSelect = () => {
    if (selectedNumber !== null) {
      onSelect(selectedNumber);
    }
  };

  return (
    <div>
      <div>
        <label style={{ marginRight: '100px' }}>질문</label>
        <input type="text" value="나는" disabled style={{ marginRight: '10px' }} />
      </div>
      <div style={{ height: '30px' }}></div>
    <div>
      <label htmlFor="number">답변란</label>
      <span style={{ paddingLeft: '120px' }}></span>
      <select id="number" value={selectedNumber} onChange={handleNumberChange} style={{ paddingLeft: '20px' }}>
        <option value="">나이</option>
        {Array.from({ length: 100 }, (_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <span style={{ paddingLeft: '20px' }}></span>
      <button onClick={handleSelect}>{buttonText}</button>
    </div>
  </div> 
  );
}

export default NumberSelector;
