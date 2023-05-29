import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';

function Nav({ defaultOption, setDefaultOption, activeOption, setActiveOption}) {
    const isActive = (option) => option === activeOption;
    const is_Default =(option) => option === defaultOption; 
    return (
      <nav>
        <div
          style={{
            border: '1px solid gray',
            backgroundColor: is_Default('default') ? 'gray' : 'white',
          }}
          onClick={() => setDefaultOption('default')}
        >
          <li>공통 질문 관리</li>
        </div>
        <div
          style={{
            border: '1px solid gray',
            backgroundColor: is_Default('userTypeManagement') ? 'gray' : 'white',
          }}
          onClick={() => setDefaultOption('userTypeManagement')}
        >
          <li>사용자 유형별 질문 관리</li>
        </div>
        {is_Default('userTypeManagement') && (
          <>
            <div
              style={{
                border: '1px solid gray',
                backgroundColor: isActive('type_a') ? 'gray' : 'white',
              }}
              onClick={() => setActiveOption('type_a')}
            >
              <li>A 유형</li>
            </div>
            <div
              style={{
                border: '1px solid gray',
                backgroundColor: isActive('type_b') ? 'gray' : 'white',
              }}
              onClick={() => setActiveOption('type_b')}
            >
              <li>B 유형</li>
            </div>
            <div
              style={{
                border: '1px solid gray',
                backgroundColor: isActive('type_c') ? 'gray' : 'white',
              }}
              onClick={() => setActiveOption('type_c')}
            >
              <li>C 유형</li>
            </div>
            <div
              style={{
                border: '1px solid gray',
                backgroundColor: isActive('type_d') ? 'gray' : 'white',
              }}
              onClick={() => setActiveOption('type_d')}
            >
              <li>D 유형</li>
            </div>
            <div
              style={{
                border: '1px solid gray',
                backgroundColor: isActive('type_e') ? 'gray' : 'white',
              }}
              onClick={() => setActiveOption('type_e')}
            >
              <li>E 유형</li>
            </div>
          </>
        )}
        
      </nav>
    );
  }
  
export default Nav;
