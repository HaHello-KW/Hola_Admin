import React, { useState, useEffect } from 'react';

function EditableButtonSelector({ content, isEditing, onEdit }) {
  const [newContent, setNewContent] = useState(content);

  useEffect(() => {
    setNewContent(content);
  }, [content]);

  function handleInputChange(event) {
    setNewContent(event.currentTarget.value); 
  }

  function handleSave() {
    onEdit(newContent);
  }

  function handleCancel() {
    setNewContent(content);
    onEdit(content);
  }

  if (isEditing) {
    return (
      <>
        <input type="text" value={newContent} onChange={handleInputChange} />
        <button onClick={handleSave}>저장</button>
        <button onClick={handleCancel}>취소</button>
      </>
    );
  } else {
    return (
      <button onClick={() => onEdit(content)}>{content}</button>
    );
  }
}
 
export default EditableButtonSelector
