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
import NumberSelector from '../../question_type/NumberPicker';
function Type_C() {
  let typeC_content = [
    {
      content: (
        <ButtonSelector
          options={[
            '결혼하고 싶어',
            '결혼 생각이 없어',
            '아직 잘 모르겠어',
          ]}
          activateOption={(option) => activateOption(0, option,'buttonselector')}
        />
      ),
      type: 'buttonselector'
    },
    {
      content: (
        <NumberSelector
          onSelect={(selectedNumber) => console.log(selectedNumber)}
          buttonText="살쯤에 결혼하면 좋겠어"
          activateOption={(option) => activateOption(1, option,'numberselector')}
        />
      ),
      type: 'numberselector',
    },
    {
      content: (
        <ButtonSelector
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
    {
      content: (
        <NumberSelector
          onSelect={(selectedNumber) => console.log(selectedNumber)}
          buttonText="살쯤에 첫째 아이를 갖고 싶어"
                    activateOption={(option) => activateOption(3, option,'numberselector')}
        />
      ),
      type: 'numberselector',
    },
    {
      content: (
        <ButtonSelector
          options={[
            '아이를 1명만 갖고 싶어',
            '둘째도 갖고 싶어',
          ]}
          activateOption={(option) => activateOption(4, option,'buttonselector')}
        />
      ),
      type: 'buttonselector'
    },
  ];

  let numberOfColumns = typeC_content.length;
  const [TypeCContent, setTypeCContent] = useState(typeC_content);
  const [editIndex, setEditIndex] = useState(null);
  const [editContent, setEditContent] = useState('');

  function activateOption(index, option, type) {
    setEditIndex(index);
    setEditContent(TypeCContent[index].content);
    const updateTypeC_Content=[...TypeCContent];
    updateTypeC_Content[index].type=type;
    setTypeCContent(updateTypeC_Content)
  }

  function handleEdit(index, type) {
    setEditIndex(index);
    setEditContent(typeC_content[index].content);
  }

  function saveEdit() {
    if (editIndex !== null) {
      const updatedTypeCContent = [...TypeCContent];
      updatedTypeCContent[editIndex].content = editContent;
      setTypeCContent(updatedTypeCContent);
      setEditIndex(null);
      setEditContent('');
    }
  }

  function cancelEdit() {
    setEditIndex(null);
    setEditContent(typeC_content[editIndex].content);
  }

  return (
    <article>
      <div style={{ border: '1px solid gray' }}>
        <h2>Type_C Survey ADMIN</h2>
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
                {typeC_content.map((item, index) => (
                  <Grid2 item key={index} style={{ borderBottom: '1px solid gray', display: 'flex', justifyContent: 'center', alignItems: 'center', height: `300px` }}>
                    <div style={{ paddingLeft: '20px', width: '100%', position: 'relative' }}>
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

export default Type_C;
