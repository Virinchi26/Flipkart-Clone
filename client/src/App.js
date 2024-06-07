
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';

import DataProvider from './context/DataProvider';

import {Box} from '@mui/material';

function App() {
  return (
    //replace div with DataProvider, so that I can use the states of the dataprovider insider the components mentioned i.e Header, Home, etc
    <DataProvider>
      <Header />
      <Box style={{marginTop: 54}}>
        <Home />

      </Box>
    </DataProvider>
  );
}

export default App;
