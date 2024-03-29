import React from 'react';
import Home from './pages/Home';
import { ThemeProvider } from '@mui/material/styles';
import  {  render  }  from  "react-dom" ; 
import  { BrowserRouter, Routes, Route, }  from  "react-router-dom" ; 


import SignIn from './pages/Signin';
import theme from './theme';

import './mock';

function App() {
 
  return (
  
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="*" element={<h1>Not Found 404!</h1>} />

        </Routes>
      
      
      </BrowserRouter>


     {/*  {
        url === 'http://localhost:3000/'
        ? <Home />
        : <SignIn />
      } */}
    </ThemeProvider>
  
  )
}

export default App;
