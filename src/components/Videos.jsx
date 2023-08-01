import React from 'react'

import {ChannelCard, VideoCard} from './'
import {Grid}  from '@mui/material'

const Videos = ({videos, direction}) => {

  if (!videos || videos.length === 0) {
    
    return <div>No videos available.</div>;
  }
  
    return (
       
      <Grid direction={direction || 'row '} container spacing={2}>
      {videos.map((item, idx) => (
        <Grid item key={idx} xs={12} sm={6} md={3} >
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Grid>
      ))}
    </Grid>
       
        
      );
    }
export default Videos