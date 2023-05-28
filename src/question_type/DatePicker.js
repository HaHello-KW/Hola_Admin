import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerComponent = ({ placeholderText }) => {
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
              dateFormat="yyyy-MM-dd"
              style={{ marginRight: '10px' }}
            />
          </div>
          <input type="text" value="에 태어났어" disabled style={{ marginRight: '10px' }} />
        </div>
        <div style={{ height: '10px' }}></div>
      </div>
    );
  };

export default DatePickerComponent;
