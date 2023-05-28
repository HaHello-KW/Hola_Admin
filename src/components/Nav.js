import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';

function Nav({ activeOption, setActiveOption }) {
  const isActive = (option) => option === activeOption;

  return (
    <nav>
      <div
        style={{
          border: '1px solid gray',
          backgroundColor: isActive('default') ? 'gray' : 'white',
        }}
        onClick={() => setActiveOption('default')}
      >
        <li>공통 질문 관리</li>
      </div>
      <div
        style={{
          border: '1px solid gray',
          backgroundColor: isActive('type_a') ? 'gray' : 'white',
        }}
        onClick={() => setActiveOption('type_a')}
      >
        <li>사용자 유형별 질문 관리</li>
      </div>
    </nav>
  );
}

export default Nav;
