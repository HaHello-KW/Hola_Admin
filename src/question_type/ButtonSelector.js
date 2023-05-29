import React, { useState } from 'react';
import EditableButtonSelector from './EditableButtonSelector';

const ButtonSelector = ({headQuestion, options: initialOptions, activateOption }) => {
  const [headquestion, setheadquestion]=useState(headQuestion);
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
      <div>
        <label style={{ marginRight: '100px' }}>질문</label>
        <input type="text" value="나는" disabled style={{ marginRight: '10px' }}/>
      </div>
      <div style={{ height: '30px' }}></div>
      <div>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <div style={{ marginRight: '100px', width: '100px' }}>
            <label>답변란</label>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', flexBasis: '100%' }}>
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

export default ButtonSelector;
