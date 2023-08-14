import {useState,useEffect}from 'react';
import{Box,Typography,Stack} from '@mui/material';
import{Videos,Sidebar} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {
    const [selectedCategory,setSelectedCategory]=useState('New');
    useEffect(() => {fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data)=>setVideos(data.items))},[selectedCategory]);
    const [videos,setVideos]=useState([]);
  return (
    <Stack sx={{flexDirection:{sx:"column", md:"row"}}}>
        <Box sx={{height:{sx:'auto', md:'92vh'}, borderRight:'1px solid #3d3d3d', px:{sx:0, md:2}}}>
            <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            <Typography className='copyright' variant='body2' sx={{ mt:1.5, color:'#fff'}}>
                Copyright 2023 HAKX Media
            </Typography>
        </Box>
        <Box p={2} sx={{overflowY:'auto', height:'90vh', flex:2}} justifyContent='space-between'>
            {/* <VideoDetail/> */}
            <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}}>
                {selectedCategory} <span style={{color:'#F31503'}}>Videos</span>
            </Typography>
            <Videos videos={videos}/>
        </Box>
    </Stack>

  )

}

export default Feed