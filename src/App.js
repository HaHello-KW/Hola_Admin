import React, { useState, useEffect } from 'react';
import './App.css';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import 'react-datepicker/dist/react-datepicker.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Default from './components/survey/Default';
import Type_A from './components/survey/Type_A';
import Type_B from './components/survey/Type_B';
import Type_C from './components/survey/Type_C';
import Type_D from './components/survey/Type_D';
import Type_E from './components/survey/Type_E';
import Footer from './components/Footer';
function App() {
  const [defaultOption, setDefaultOption] = useState('default');
  const [activeOption, setActiveOption] = useState('type_A');
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Nav defaultOption = {defaultOption} setDefaultOption = {setDefaultOption} activeOption={activeOption} setActiveOption={setActiveOption} />
            <Box sx={{ flex: 1 }}>{(() => {
              if (defaultOption === 'default') 
                return <Default />;
              else {
                if(activeOption==='type_a')
                  return <Type_A />;
                else if(activeOption==='type_b')
                  return <Type_B />;
                else if(activeOption==='type_c')
                  return <Type_C />;
                else if(activeOption==='type_d')
                  return <Type_D />;
                else if(activeOption==='type_e')
                  return <Type_E />;
                else
                return <Default />;
              }})()}
            </Box>
          </Box>
          <Footer></Footer>
        </Box>
      </Container>
    </React.Fragment>
  );
}


export default App