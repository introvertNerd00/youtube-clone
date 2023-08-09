import {useState,useEffect}from 'react';
import{Box,Typography,Stack} from '@mui/material';
import Sidebar from './Sidebar';

const Feed = () => {
  return (
    <Stack sx={{flexDirection:{sx:"column", md:"row"}}}>
        <Box sx={{height:{sx:'auto', md:'92vh'}, borderRight:'1px solid #3d3d3d', px:{sx:0, md:2}}}>
            <Sidebar/>
            <Typography className='copyright' variant='body2' sx={{ mt:1.5, color:'#fff'}}>
                Copyright 2023 HAKX Media
            </Typography>
        </Box>
        <Box>
            {/* <VideoDetail/> */}
            <Typography>
                New<span></span>
            </Typography>
        </Box>
    </Stack>

  )

}

export default Feed