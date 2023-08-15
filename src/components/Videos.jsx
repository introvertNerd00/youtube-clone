import {Box, Stack } from '@mui/material';
import React from 'react'
import{VideoCard,ChannelCard} from './';

const Videos = ({videos, direction}) => {
  if(!videos?.length) return 'Loading...'
  
  // console.log(videos);
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems='center' gap={5} px={5}>
      {videos.map((item,idx) => (
        <Box key={idx} justifyContent='space-evenly'>
            {item.id.videoId && <VideoCard video={item}/>}
            {item.id.channelId && <ChannelCard channelDetail={item}/>}
        </Box>
      ))}

    </Stack>
  )
}

export default Videos