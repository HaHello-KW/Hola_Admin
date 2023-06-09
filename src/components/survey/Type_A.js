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
import SixlinePickerComponent from '../../question_type/SixlinePicker';
function Type_A() {
  let typeA_content = [
    {
      content: (
        <ButtonSelector
        head_question="나는"
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
        head_question="나는 아이를"
          options={[
            '갖고 싶어',
            '갖고 싶은 생각이 없어'
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
        head_question="나는"
          options={[
            '아이를 1명만 갖고 싶어',
            '둘째도 갖고 싶어',
          ]}
          activateOption={(option) => activateOption(4, option,'buttonselector')}
        />
      ),
      type: 'buttonselector'
    },
    {
      content: (
        <NumberSelector
          onSelect={(selectedNumber) => console.log(selectedNumber)}
          buttonText="살에 둘째 아이를 갖고 싶어"
          activateOption={(option) => activateOption(5, option,'numberselector')}
        />
      ),
      type: 'numberselector',
    },
    {
      content: (
        <ButtonSelector
        head_question="나는 난자 냉동을"
          options={[
            '이미해서 보관 중이야',
            '하지 않았지만, 관심 있어',
            '하지 않았지만, 별로 관심 없어',
            '잘 모르고 있어',
          ]}
          activateOption={(option) => activateOption(6, option,'buttonselector')}
        />
      ),
      type: 'buttonselector'
    },
    {
      content:(
        <SixlinePickerComponent
        dateFormat="yyyy-MM-dd"
          placeholderText="년 월 일"
          activateOption={(option) => activateOption(7, option,'sixlinePicker')}
          />
      ),
      type: "sixlinePicker"
    },
    {
      content: (
        <ButtonSelector
        head_question="나는 생리일이"
          options={[
            '규칙적이야',
            '불규칙적이야'
          ]}
          activateOption={(option) => activateOption(7, option,'buttonselector')}
        />
      ),
      type: 'buttonselector'
    },
  ];
  let numberOfColumns = typeA_content.length;
  const [TypeAContent, setTypeAContent] = useState(typeA_content);
  const [editIndex, setEditIndex] = useState(null);
  const [editContent, setEditContent] = useState('');

  function activateOption(index, option, type) {
    setEditIndex(index);
    setEditContent(TypeAContent[index].content);
    const updateTypeA_Content=[...TypeAContent];
    updateTypeA_Content[index].type=type;
    setTypeAContent(updateTypeA_Content)
  }

  function handleEdit(index, type) {
    setEditIndex(index);
    setEditContent(typeA_content[index].content);
  }

  function saveEdit() {
    if (editIndex !== null) {
      const updatedTypeAContent = [...TypeAContent];
      updatedTypeAContent[editIndex].content = editContent;
      setTypeAContent(updatedTypeAContent);
      setEditIndex(null);
      setEditContent('');
    }
  }

  function cancelEdit() {
    setEditIndex(null);
    setEditContent(typeA_content[editIndex].content);
  }

  return (
    <article>
      <div style={{ border: '1px solid gray' }}>
        <h2>Type_A Survey ADMIN</h2>
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
                {typeA_content.map((item, index) => (
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

export default Type_A;
