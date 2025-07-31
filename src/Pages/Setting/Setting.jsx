import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';


// import css
import '../../App.css';

const CustomSwitch = styled(Switch)(({ theme }) => ({
  width: 75,
  height: 34,
  padding: 5,
  '& .MuiSwitch-switchBase': {
    padding: 6,
    '&.Mui-checked': {
      transform: 'translateX(28px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#1C3D58',
        opacity: 1,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: 22,
    height: 22,
    color: 'white'
  },
  '& .MuiSwitch-track': {
    borderRadius: 20,
    backgroundColor: '#1c3d5832',
    opacity: 1,
  },
}));


const Setting = () => {

  return (
    <div className="container p-0">
      <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
        <div className='dashboard-head-content'>
            <h3 className='fw-bold mb-1'>Settings</h3>
            <p>Manage application settings and configurations</p>
          </div>
        <button className='btn btn-primary add-users-btn'> <SaveOutlinedIcon fontSize='small' /> Save Changes</button>
      </div>

      {/* setting notifications cards */}
      <div className='p-3 pt-4 mt-2 overview-cards'>
        <div className='notification-content-cards'>
            <h4> <NotificationsNoneOutlinedIcon style={{color:'#F25C05'}} /> Feature Flags</h4>
            <div className='d-flex justify-content-between border-bottom p-3 mt-2'>
              <div>
                <h5 className='mb-1 fw-bold'>Push Notifications</h5>
                <p className='mb-2'>Enable push notifications for all users</p>
              </div>
              <div>
                <CustomSwitch defaultChecked />
              </div>
            </div>
            <div className='d-flex justify-content-between border-bottom p-3 mt-3'>
              <div>
                <h5 className='mb-1 fw-bold'>Analytics Tracking</h5>
                <p className='mb-2'>Enable user behavior tracking and analytics</p>
              </div>
              <div>
                <CustomSwitch defaultChecked />
              </div>
            </div>
            <div className='d-flex justify-content-between border-bottom p-3 mt-3'>
              <div>
                <h5 className='mb-1 fw-bold'>Auto Backup</h5>
                <p className='mb-2'>Automatically backup user data daily</p>
              </div>
              <div>
                <CustomSwitch />
              </div>
            </div>
            <div className='d-flex justify-content-between p-3 pb-2 mt-3'>
              <div>
                <h5 className='mb-1 fw-bold'>Maintenance Mode</h5>
                <p className='mb-2'>Temporarily disable the app for maintenance</p>
              </div>
              <div>
                <CustomSwitch/>
              </div>
            </div>
        </div>
      </div>

       {/* setting pricing fields */}
      <div className='p-3 pt-4 mt-4 overview-cards'>
        <div className='notification-content-cards'>
            <h4> <AttachMoneyOutlinedIcon style={{color:'#F25C05'}} />Subscription Pricing</h4>
            <div className='d-flex justify-content-between p-3 mt-2 setting-input-head'>
              <div className='w-100 pe-lg-4  pe-md-0'>
                <h5 className='mb-2 fw-bold'>Basic Plan Monthly Price ($)</h5>
                <input placeholder='9.99' className='w-100 border border p-2 rounded-2 setting-input' type="text" />
              </div>
              <div className='w-100'>
                <h5 className='mb-2 fw-bold'>Pro Plan Monthly Price ($)</h5>
                <input placeholder='19.99' className='w-100 border border p-2 rounded-2 setting-input' type="text" />
              </div>
            </div>
        </div>
      </div>

      {/* setting API Configuration */}
      <div className='p-3 pt-4 mt-4 overview-cards'>
        <div className='notification-content-cards'>
            <h4> <VpnKeyOutlinedIcon style={{color:'#F25C05'}} /> API Configuration</h4>
            <div className='d-flex justify-content-between p-3 pb-0 mt-2'>
              <div className='w-100'>
                <h5 className='mb-2 fw-bold'>API Key</h5>
                <input placeholder='Enter your API key here' className='w-100 border border p-2 rounded-2 setting-input' type="text" />
                <p className='mt-2 mb-0'>Your secure API key for external integrations</p>
              </div>
            </div>
            <div className='d-flex justify-content-between p-3 pb-0 mt-2'>
              <div className='w-100'>
                <h5 className='mb-2 fw-bold'>Webhook URL</h5>
                <input placeholder='Enter your Web URL here' className='w-100 border border p-2 rounded-2 setting-input' type="text" />
                <p className='mt-2 mb-0'>URL for receiving webhook notifications</p>
              </div>
            </div>

        </div>
      </div>

      {/* System Information cards */}
      <div className='row g-4 mt-4 ms-0 me-0 ps-1 pe-1 overview-cards'>
        <h4 className='fs-5 mb-0'>System Information</h4>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <div className='p-3 pt-2 h-100 Analytics-card'>
              <p className='mb-1'>Version</p>
              <h5 className='fw-bold'>v2.1.0</h5>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <div className='p-3 pt-2 h-100 Analytics-card'>
              <p className='mb-1'>Last Updated</p>
              <h5 className='fw-bold'>Dec 15, 2023</h5>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <div className='p-3 pt-2 h-100 Analytics-card'>
              <p className='mb-1'>Environment</p>
              <h5 className='fw-bold'>Production</h5>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <div className='p-2 pt-2 h-100 Analytics-card'>
              <p className='mb-1'>Server Status</p>
              <h5 className='fw-bold'>Healthy</h5>
          </div>
        </div>  
      </div>
    </div>
  );
};

export default Setting;
