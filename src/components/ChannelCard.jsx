import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'
import { demoChannelTitle, demoChannelUrl, demoProfilePicture, demoThumbnailUrl, demoVideoTitle, demoVideoUrl } from '../utils/constants'

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <Box sx={{ boxShadow: 'none', borderRadius: '20px' ,display:'flex', justifyContent:'center', alignItems:'center', width:{xs:'356px', md:'320px'}, height:'326px', margin:'auto' , marginTop:marginTop}}>
      <Link to={channelDetail.id.channelId ? `/channel/${channelDetail.id.channelId}` : demoChannelUrl}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#FFF' }}>
          <CardMedia image={channelDetail.snippet.thumbnails.high.url || demoThumbnailUrl} alt={channelDetail.snippet.title || demoVideoTitle} sx={{ height: 180, width: 180, borderRadius: '50%', mb: 2, border: '1px solid #e3e3e3' }} />
          <Typography variant="h6">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{fontSize:14, color:'gray',ml:'5px'}}/>
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (<Typography > {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
          </Typography>)}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard