import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const EditableDatePicker = ({ placeholderText, onSave }) => {
  const [editing, setEditing] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const handleSave = () => {
    onSave(selectedDate);
    setEditing(false);
  };

  return (
    <div>
      {editing ? (
        <div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <label style={{ marginRight: '100px' }}>질문 고정</label>
            <input type="text" value="나는" disabled style={{ marginRight: '10px' }} />
          </div>
          <div style={{ height: '30px' }}></div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <label style={{ marginRight: '120px' }}>답변란</label>
            <div style={{ marginRight: '10px' }}>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                placeholderText={placeholderText}
              />
            </div>
            <input type="text" value="에 태어났어" disabled style={{ marginRight: '10px' }} />
          </div>
          <div style={{ height: '10px' }}></div>
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <label style={{ marginRight: '100px' }}>질문 고정</label>
            <input type="text" value="나는" disabled style={{ marginRight: '10px' }} />
          </div>
          <div style={{ height: '30px' }}></div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <label style={{ marginRight: '120px' }}>답변란</label>
            <input type="text" value={selectedDate} disabled style={{ marginRight: '10px' }} />
            <button onClick={() => setEditing(true)}>Edit</button>
          </div>
          <div style={{ height: '10px' }}></div>
        </div>
      )}
    </div>
  );
};
export default EditableDatePicker