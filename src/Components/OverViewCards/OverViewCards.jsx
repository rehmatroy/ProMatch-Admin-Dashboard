import React from 'react';

// Material UI Icons
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import '../../App.css'

const OverViewCards = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <div className='row mb-2'>
          <div className='dashboard-head-content'>
            <h3 className='fw-bold mb-1'>Dashboard</h3>
            <p>Welcome back! Here's your overview.</p>
          </div>
        </div>
        <div className='row g-4'>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className='p-3 pt-4 h-100 overview-cards'>
              <div className='d-flex justify-content-between'>
                <p>Total Users</p>
                <GroupOutlinedIcon style={{ color: '#F25C05', fontSize: '20px' }} />
              </div>
              <div>
                <h4>2,847</h4>
                <p style={{ fontSize: '14px' }}>+12% from last month</p>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className='p-3 pt-4 h-100 overview-cards'>
              <div className='d-flex justify-content-between'>
                <p>Active Subscribers</p>
                <TrendingUpIcon style={{ color: '#F25C05', fontSize: '20px' }} />
              </div>
              <div>
                <h4>1,234</h4>
                <p style={{ fontSize: '14px' }}>+8% from last month</p>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className='p-3 pt-4 h-100 overview-cards'>
              <div className='d-flex justify-content-between'>
                <p>Monthly Revenue</p>
                <AttachMoneyIcon style={{ color: '#F25C05', fontSize: '20px' }} />
              </div>
              <div>
                <h4>$15,230</h4>
                <p style={{ fontSize: '14px' }}>+15% from last month</p>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className='p-3 pt-4 h-100 overview-cards'>
              <div className='d-flex justify-content-between'>
                <p>Drills Completed Today</p>
                <PlayCircleOutlineIcon style={{ color: '#F25C05', fontSize: '20px' }} />
              </div>
              <div>
                <h4>156</h4>
                <p style={{ fontSize: '14px' }}>+5% from last month</p>
              </div>
            </div>
          </div>
        </div>
        <div className='row g-4 mt-1'>
          <div className="col-lg-8">
            <div className='p-3 pt-4 overview-cards'>
              <div>
                <h4>Recent Activity</h4>
                <div className='p-3 rounded-3 mb-3 mt-3 d-flex align-items-center inner-cards'>
                  <FiberManualRecordIcon style={{ color: '#F25C05', fontSize: '14px', marginRight:10 }} />
                  <div>
                    <p style={{ fontSize:'14px', margin:0  }}> <b>John Smith</b> signed up for Pro subscription</p>
                    <p style={{ fontSize: '13px', margin:0 }}>2 minutes ago</p>
                  </div>
                </div>
                <div className='p-3 rounded-3 mb-3 d-flex align-items-center inner-cards'>
                  <FiberManualRecordIcon style={{ color: '#1C3D58', fontSize: '14px', marginRight:10 }} />
                  <div>
                    <p style={{ fontSize:'14px', margin:0  }}> <b>Sarah Johnson</b> completed Advanced Shooting drill</p>
                    <p style={{ fontSize: '13px', margin:0 }}>5 minutes ago</p>
                  </div>
                </div>
                <div className='p-3 rounded-3 mb-3 d-flex align-items-center inner-cards'>
                  <FiberManualRecordIcon style={{ color: '#F25C05', fontSize: '14px', marginRight:10 }} />
                  <div>
                    <p style={{ fontSize:'14px', margin:0  }}> <b>Mike Davis</b>  signed up for Basic subscriptionn</p>
                    <p style={{ fontSize: '13px', margin:0 }}>2 minutes ago</p>
                  </div>
                </div>
                <div className='p-3 rounded-3 d-flex align-items-center inner-cards'>
                  <FiberManualRecordIcon style={{ color: '#1C3D58', fontSize: '14px', marginRight:10 }} />
                  <div>
                    <p style={{ fontSize:'14px', margin:0  }}> <b>Lisa Chen</b> completed Ball Handling drill</p>
                    <p style={{ fontSize: '13px', margin:0 }}>18 minutes ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className='p-3 pt-4 overview-cards h-100'>
              <div>
                <h4>Quick Stats</h4>
                <div className='p-3 rounded-3 mt-3 d-flex align-items-center justify-content-between stats-cards'>
                  <div>
                    <p>Conversion Rate</p>
                    <p>Avg. Session Time</p>
                    <p>Active Now</p>
                  </div>
                  <div className='text-end'>
                    <p><b>24.3%</b></p>
                    <p><b>8m 42s</b></p>
                    <p><b>127 users</b></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverViewCards;
