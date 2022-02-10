import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import {Paper,Box} from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';

export default function Loading() {
  const classes ={
    mainBox:{
      display: 'flex',
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      height: "100vh",
      backgroundColor: 'transparent',
    }
  }
    return (
      <Paper sx={classes.mainBox}>
      <Box position="relative" display="inline-flex">
        <CircularProgress sx={{color:"#1c7c99"}} />
        <Box
            top={0}
            left={0}
            bottom={0}
            right={0}
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
           
            <BoltIcon sx={{color:"#1c7c99"}}/>
            
        </Box>
        </Box>
        </Paper>
    )
}
