
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar,VideoDetail,ChannelDetail,SearchFeed,Feed } from './components';


function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Box sx={{backgroundColor: '#000'}}>
    <Routes>
      <Route path="/" exact element={<Feed/>} />
      <Route path="/video/:id" exact element={<VideoDetail/>} />
      <Route path="/channel/:id" exact element={<ChannelDetail/>} />
      <Route path="/search/:searchTerm" exact element={<SearchFeed/>} />
    </Routes>
   </Box>
   
   </BrowserRouter>
  );
}

export default App;
