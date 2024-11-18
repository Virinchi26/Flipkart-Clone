
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import React from 'react';
import DataProvider from './context/DataProvider';

import {Box} from '@mui/material';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DetailView from './components/details/DetailView';

function App() {
  return (
    //replace div with DataProvider, so that I can use the states of the dataprovider insider the components mentioned i.e Header, Home, etc
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/product/:id' element={<DetailView />} />

          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
