import React from 'react'
import { Provider } from 'react-redux';
import store from "./redux/store"
import Routes from './routes/Routes';
import { Box } from '@mui/material';

export default function App() {
  return (
    <Provider store ={store}>
    <Box>
      <Routes/>
      </Box>
    </Provider>
  )
}
