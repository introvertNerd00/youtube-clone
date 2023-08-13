import {useState,useEffect}from 'react';
import{useParams} from 'react-router-dom';
import{Box,Typography} from '@mui/material';
import{Videos} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const SearchFeed = () => {
  const {searchTerm} = useParams();
    useEffect(() => {fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data)=>setVideos(data.items))},[searchTerm]);
    const [videos,setVideos]=useState([]);
    
  return (
    <Box p={2} sx={{overflowY:'auto', height:'90vh', flex:2}}>
    {/* <VideoDetail/> */}
    <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}}>
        Search Results for: <span style={{color:'#F31503'}}>{searchTerm} </span>
    </Typography>
    <Videos videos={videos}/>
    </Box>
  )

}

export default SearchFeed