import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const HybridComponent = ({ dateFormat, placeholderText, answer,onSelect, buttonText }) => {
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
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label style={{ marginRight: '100px' }}>질문</label>
          <input type="text" value="나는" disabled style={{ marginRight: '10px' }} />
        </div>
        <div style={{ height: '30px' }}></div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label style={{ marginRight: '100px' }}>답변란</label>
          <div style={{ marginRight: '10px' }}>
            <DatePicker
              placeholderText={placeholderText}
              answer={answer}
              dateFormat={dateFormat}
              //dateFormat="yyyy-MM-dd"
              style={{ marginRight: '10px' }}
            />
          </div>
          <input type="text" value={answer} disabled style={{ marginRight: '10px', width: '50px'}} />
          <select id="number" value={selectedNumber} onChange={handleNumberChange} style={{ paddingLeft: '20px' }}>
            <option value="">숫자</option>
            {Array.from({ length: 51 }, (_, i) => (
                    <option key={i} value={i}>
                        {i === 0 ? "없음" : i}
                    </option>
                ))}
            </select>
            <span style={{ paddingLeft: '20px' }}></span>
      <button onClick={handleSelect}>{buttonText}</button>
        </div>
        <div style={{ height: '10px' }}></div>
      </div>
    );
  };

export default HybridComponent;
