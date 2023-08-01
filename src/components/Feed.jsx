import React from 'react'
import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import SideBar from './SideBar';
import Videos from './Videos';
import {fetchFromAPI } from '../utils/fetchFromAPI'


const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);


  useEffect(() => {
    
    const delay = 500; 
  
    
    const timerId = setTimeout(() => {
      fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
        .then((data) => setVideos(data.items))
        .catch((error) => {
          
          console.error('Error fetching videos:', error);
        });
    }, delay);
  
  
    return () => clearTimeout(timerId);
  }, [selectedCategory]);
  


  return (
    <Stack sx={{flexDirection: {sx: "column", md: "row"}}}>
      <Box sx={{height: {sx: 'auto', md: '92vh'}, 
      borderRight: '1px solid #3d3d3d', px: {sx: 0, md:2}}}>
       
        <SideBar
          selectedCategory= {selectedCategory}
          setSelectedCategory= {setSelectedCategory}
        />

        <Typography className='copyright' variant='body2'
          sx= {{ mt:1.5, color: '#fff'}}
        >
          Copyright 2023 Hb Media
        </Typography>
        </Box>

      <Box p={2} sx={{overflow: 'auto', height: '90vh', flex: 2}}>
        <Typography variant='h4' fontFamily='bold' mb={2} sx={{color: 'white'}}>
        {selectedCategory} <span style={{color :  '#F31503'}}>videos</span>
        </Typography>

      <Videos videos={videos}/>

      </Box>
      
    </Stack>
  )
}

export default Feed