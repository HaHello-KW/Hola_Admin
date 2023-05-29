import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Grid';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DatePickerComponent from '../../question_type/DatePicker';
import ButtonSelector from '../../question_type/ButtonSelector';
import EditableButtonSelector from '../../question_type/EditableButtonSelector';

function Default() {
  let default_content = [
    {
      content: (
        <DatePickerComponent
          dateFormat="yyyy-MM-dd"
          placeholderText="년 월 일"
          answer="에 태어났어"
          activateOption={(option) => activateOption(0, option, 'datepicker')}
        />
      ),
      type: 'datepicker',
    },
    {
      content: (
        <ButtonSelector
        headQuestion="나는"
          options={[
            '난소 건강을 유지하고 싶어',
            '난자 냉동 계획이 있어',
            '난임 시술 계획이 있어',
            '현재 시술을 하고 있어(난자냉동, 난임시술)',
            '갱년기 준비와 관리를 하고 있어',
          ]}
          activateOption={(option) => activateOption(1, option,'buttonselector')}
          
        />
      ),
      type: 'buttonselector'
    },
    {
      content: (
        <ButtonSelector
        headQuestion="나는"
          options={[
            '결혼을 안 했어',
            '결혼을 했어',
            '임신 준비 중이야',
            '자녀가 있어',
            '임신 중이야',
          ]}
          activateOption={(option) => activateOption(2, option,'buttonselector')}
        />
      ),
      type: 'buttonselector'
    },
  ];

  let numberOfColumns = default_content.length;
  const [defaultContent, setDefaultContent] = useState(default_content);
  const [editIndex, setEditIndex] = useState(null);
  const [editContent, setEditContent] = useState('');

  function activateOption(index, option, type) {
    setEditIndex(index);
    setEditContent(defaultContent[index].content);
    
    const updatedDefaultContent = [...defaultContent];
    updatedDefaultContent[index].type = type;
    setDefaultContent(updatedDefaultContent);
  }

  function handleEdit(index, type) {
    setEditIndex(index);
    setEditContent(default_content[index].content);
  }

  function saveEdit() {
    if (editIndex !== null) {
      const updatedDefaultContent = [...defaultContent];
      updatedDefaultContent[editIndex].content = editContent;
      setDefaultContent(updatedDefaultContent);
      setEditIndex(null);
      setEditContent('');
    }
  }

  function cancelEdit() {
    setEditIndex(null);
    setEditContent(default_content[editIndex].content);
  }

  return (
    <article>
      <div style={{ border: '1px solid gray' }}>
        <h2>Default Survey ADMIN</h2>
      </div>
      <div style={{ border: '1px solid gray' }}>
        <Grid2 container>
          <Grid2 item xs={1} style={{ borderRight: '1px solid gray' }}>
            <Grid2 container direction="column" justifyContent="space-between" style={{ height: `${numberOfColumns}*300px` }}>
              {[...Array(numberOfColumns)].map((_, index) => (
                <Grid2 item key={index} style={{ borderBottom: '1px solid gray', display: 'flex', justifyContent: 'center', alignItems: 'center', height: `300px`, paddingLeft: '20px' }}>
                  {index + 1}
                </Grid2>
              ))}
            </Grid2>
          </Grid2>
          <Grid2 item xs={11}>
            <div style={{ border: '1px solid gray' }}>
              <Grid2 container direction="column" justifyContent="flex-start" style={{ height: `${numberOfColumns}*300px` }}>
                {default_content.map((item, index) => (
                  <Grid2 item key={index} style={{ borderBottom: '1px solid gray', display: 'flex', justifyContent: 'center', alignItems: 'center', height: `${900 / numberOfColumns}px`}}>
                    <div style={{ paddingLeft: '20px', width: '100%', position: 'relative'}}>
                      {(() => {
                        if (item.type === 'buttonselector') {
                          return (
                            <ButtonSelector
                              options={item.content.props.options.map((option, optionIndex) => (
                                <EditableButtonSelector
                                  key={optionIndex}
                                  content={option}
                                  isEditing={editIndex === index && editContent === option}
                                  onEdit={(newContent) => setEditContent(newContent)}
                                />
                              ))}
                              activateOption={(option) => activateOption(index, option)}
                            />
                          );
                        } else return item.content;
                      })()}
                      {(() => {
                        if (editIndex === index) {
                          return (
                            <>
                              <button onClick={saveEdit}>저장</button>
                              <button onClick={cancelEdit}>취소</button>
                            </>
                          );
                        } else {
                          return (
                            <button style={{ position: 'absolute', bottom: '5px', right: '5px' }} onClick={() => handleEdit(index, item.type)}>수정하기</button>
                          );
                        }
                      })()}
                    </div>
                  </Grid2>
                ))}
              </Grid2>
            </div>
          </Grid2>
        </Grid2>
      </div>
    </article>
  );
}

export default Default;
