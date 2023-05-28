import React, { useState, useEffect } from 'react';
import './App.css';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Grid';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DatePickerComponent from './question_type/DatePicker';
import ButtonSelector from './question_type/ButtonSelector';
import EditableDatePicker from './question_type/EditableDatePicker';
import EditableButtonSelector from './question_type/EditableButtonSelector';
import Header from './components/Header';
import Nav from './components/Nav';
import Default from './components/survey/Default';
import Type_A from './components/survey/Type_A';
import Footer from './components/Footer';
function App() {
  const [activeOption, setActiveOption] = useState('default');

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Nav activeOption={activeOption} setActiveOption={setActiveOption} />
            <Box sx={{ flex: 1 }}>{(() => {
              if (activeOption === 'default') 
                return <Default />;
              else {
                return <Type_A />;
              }})()}
            </Box>
          </Box>
          <Footer />
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default App