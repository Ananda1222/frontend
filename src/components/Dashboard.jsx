import { HighQuality } from '@mui/icons-material'
import { Box, Grid } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'

const h1s = {
    fontSize: '55px',
    marginTop: '-2px',
    paddingTop: '390px'
}

const Dashboard = () => {
  return (
   <div style={{ 
            backgroundImage: `url(https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '750px',
            color: '#333333',
            border: 'solid'


        }}><Navbar/>
            {
                <h1 style={{color:"gold",fontSize:"40px"}} >WELCOME TO RESTOCAFE</h1>
                
            }
        </div>
  )
}

export default Dashboard