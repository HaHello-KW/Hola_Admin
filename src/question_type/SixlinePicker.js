import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SixlinePickerComponent = ({ dateFormat, placeholderText , onSelect, buttonText}) => {
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
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <label style={{ marginRight: '100px' }}>질문</label>
          <input type="text" value="나의 마지막(최근) 생리일은" disabled style={{ marginRight: '10px' }} />
        </div>
        <div style={{ height: '15px' }}></div>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <label style={{ marginRight: '100px' }}>답변란</label>
          <div style={{ marginRight: '10px' }}>
            <DatePicker
              placeholderText={placeholderText}
              dateFormat={dateFormat}
              //dateFormat="yyyy-MM-dd"
              style={{ marginRight: '10px' }}
            />
          </div>
        </div>
        <div style={{ height: '30px' }}></div>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <label style={{ marginRight: '100px' }}>질문</label>
          <input type="text" value="나의 생리주기는" disabled style={{ marginRight: '10px' }} />
        </div>
        <div style={{ height: '15px' }}></div>
        <div>
            <label htmlFor="number">답변란</label>
            <span style={{ paddingLeft: '120px' }}></span>
            <select id="number" value={selectedNumber} onChange={handleNumberChange} style={{ paddingLeft: '20px' }}>
                <option value="">숫자</option>
                {Array.from({ length: 41 }, (_, i) => (
                    <option key={i} value={i}>
                        {i === 0 ? "모름" : i}
                    </option>
                ))}
            </select>
        </div>
        <div style={{ height: '30px' }}></div>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <label style={{ marginRight: '100px' }}>질문</label>
          <input type="text" value="나의 생리기간은" disabled style={{ marginRight: '10px' }} />
        </div>
        <div style={{ height: '15px' }}></div>
        <div>
            <label htmlFor="number">답변란</label>
            <span style={{ paddingLeft: '120px' }}></span>
            <select id="number" value={selectedNumber} onChange={handleNumberChange} style={{ paddingLeft: '20px' }}>
                <option value="">숫자</option>
                {Array.from({ length: 11 }, (_, i) => (
                    <option key={i} value={i}>
                        {i === 0 ? "모름" : i}
                    </option>
                ))}
            </select>
        </div>
      </div>
      
    );
  };

export default SixlinePickerComponent;
