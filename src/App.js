import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {NavBar, Feed, VideoDetail, ChannelDetail, SearchFeed} from './components'
function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        <NavBar/>
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
      </Box>
    </BrowserRouter>
    
  );
}

export default App;
