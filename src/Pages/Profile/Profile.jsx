import React from 'react'

import Box from '@mui/material/Box';
import { Button, Divider, Stack} from '@mui/material';
import TextField from '@mui/material/TextField';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

import profileImg from '../../assets/img/profile.png';



const Profile = () => {
  return (
    <>
      <div className="container p-0">
        <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
          <div className='dashboard-head-content'>
              <h3 className='fw-bold mb-1'>Account</h3>
              <p>Manage user profile account</p>
            </div>
        </div>
            <Box className="profile-header" sx={{display:'flex', justifyContent:'space-between', width:'100%'}}>
              <Box className="profile-img" sx={{boxShadow: '0px 1px 8px #1c3d582c', width:'30%', height:'100%', borderRadius:'8px', textAlign:'center'}}>
                <div className='dashboard-head-content'>
                  <img style={{width:50, height: 50, objectFit: 'cover'}} className='rounded-circle mt-4 mb-3' src={profileImg} alt="profile-img" />
                  <h5 style={{color: '#1C3D58', fontWeight: 'bold'}}>Rehmat Ali</h5>
                  <p>Andhra Pradesh India <br/>GTM-7</p>
                </div>
                <Divider style={{width:'100%', border: '1px solid #00000030'}}/>
                <div className='p-3'>
                  <label for="file-upload" class="custom-file-upload">
                    Upload Picture
                  </label>
                  <input id="file-upload" type="file" style={{display: 'none'}}/>
                </div>
              </Box> 
              <Box className="profile-form" sx={{boxShadow: '0px 1px 8px #1c3d582c', width:'69%', borderRadius:'8px'}}>
                <div className='dashboard-head-content pt-3 ps-3'>
                  <h5 style={{color: '#1C3D58', fontWeight: 'bold'}}>Profile</h5>
                  <p>The information can be edited</p>
                </div>
                <Divider style={{width:'100%', border: '1px solid #00000030'}}/>
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: '30px 0', width: '100%', },
                  }}
                  style={{padding:'0 20px'}}
                  Validate
                  autoComplete="off"
                >
                  <Stack sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <TextField style={{width:'95%', marginRight:'10px'}} id="outlined-basic" label="First name *" variant="outlined" />
                    <TextField style={{width:'95%'}} id="outlined-basic" label="Last name *" variant="outlined" />
                  </Stack>
                  <Stack sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <TextField style={{width:'95%', marginRight:'10px'}} id="outlined-basic" label="Email Address *" variant="outlined" />
                    <TextField style={{width:'95%'}} id="outlined-basic" label="Phone number *" variant="outlined" />
                  </Stack>
                  <Stack sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <TextField style={{width:'95%', marginRight:'10px'}} id="outlined-basic" label="Country *" variant="outlined" />
                    <TextField style={{width:'95%'}} id="outlined-basic" label="Select state *" variant="outlined" />
                  </Stack>
                </Box>
                <Divider style={{width:'100%', border: '1px solid #00000030'}}/>
                <Box sx={{margin:"10px 0", padding:'10px 20px', textAlign:'end'}}>
                  <Button className='upload-btn' style={{backgroundColor:'#1C3D58', textTransform:'capitalize'}} variant='contained'>Save Details</Button>
                </Box> 
              </Box> 
            </Box>
       </div>
    </>
  )
}
export default Profile;
