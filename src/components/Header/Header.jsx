import React from 'react'
// import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar,Stack, Typography, InputBase, Paper } from '@mui/material'
import {  Box } from '@mui/system'
import {Search} from '@mui/icons-material'
const Header = () => {
  return (
   <AppBar position='static'>
    <Stack direction='row' justifyContent='space-around' alignItems='center' mt='1rem' mb='1rem'>
      <Typography variant='h5'>
        Travel Adviser
      </Typography>
      <Stack direction='row' gap={2}>
        <Typography variant='h6'> 
          Explore New Places
        </Typography>
        {/* <Autocomplete> */}
          <Paper sx={{display:'flex', alignItems:'center', pl:'0.5rem'}}>
              <Search/>
            <InputBase placeholder='Search...' sx={{ml:'1rem'}}/>
          </Paper>
        {/* </Autocomplete> */}
      </Stack>
    </Stack>
   </AppBar>
  )
}

export default Header