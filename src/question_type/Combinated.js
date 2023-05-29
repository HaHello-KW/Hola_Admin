import React,{useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import EditableButtonSelector from './EditableButtonSelector';
const CombinatedComponent = ({ dateFormat, placeholderText, answer, options: initialOptions }) => {
    const [options, setOptions] = useState(initialOptions);
    const [editingIndex, setEditingIndex] = useState(null);
  
    function handleOptionEdit(index, newContent) {
      const updatedOptions = [...options];
      updatedOptions[index] = newContent;
      setOptions(updatedOptions);
    }
  
    function handleEditClick(index) {
      setEditingIndex(index);
    }
  
    function handleSaveClick(index, newContent) {
      handleOptionEdit(index, newContent);
      setEditingIndex(null);
    }
  
    function handleCancelClick() {
      setEditingIndex(null);
    }
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
          <input type="text" value={answer} disabled style={{ marginRight: '10px' }} />
        </div>
        <div style={{ height: '10px' }}></div>
        <div>
        <div style={{ paddingLeft: '150px', display: 'flex', alignItems: 'flex-start' }}>
          
          <div style={{ marginRight: '100px',display: 'flex', flexDirection: 'column', flexBasis: '100%' }}>
            {options.map((option, index) => (
              <div style={{ marginBottom: '10px', flex: '1' }} key={index}>
                {(() => {
                  if (editingIndex === index) {
                    return (
                      <EditableButtonSelector
                        content={option}
                        isEditing={true}
                        onEdit={(newContent) => handleSaveClick(index, newContent)}
                      />
                    );
                  } else {
                    return (
                      <EditableButtonSelector
                        content={option}
                        isEditing={false}
                        onEdit={() => handleEditClick(index)}
                      />
                    );
                  }
                })()}
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    );
  };

export default CombinatedComponent;
