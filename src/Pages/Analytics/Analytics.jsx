import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';

// import css
import '../../App.css';


const Analytics = () => {

  return (
    <div className="container p-0">
      <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
        <div className='dashboard-head-content'>
            <h3 className='fw-bold mb-1'>Analytics</h3>
            <p>Track user engagement and business metrics</p>
          </div>
          <div>
            <button className='btn btn-primary me-2 add-users-btn'> <DateRangeOutlinedIcon fontSize='small' /> Date Range</button>
            <button className='btn btn-primary add-users-btn'> <FileDownloadOutlinedIcon fontSize='small' /> Export</button>
          </div>
      </div>

      <div className='row g-4'>
          <div className='col-lg-4 col-md-12 col-sm-12'>
            <div className='d-flex justify-content-between align-items-center p-3 pt-4 h-100 overview-cards'>
              <div className=''>
                <p className='mb-2'>Total Revenue</p>
                <h4>$45,231</h4>
                <p style={{ fontSize: '14px' }}>+12% from last month</p>
              </div>
              <div>
                <AttachMoneyIcon style={{ color: '#F25C05', fontSize: '36px' }} />
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-12 col-sm-12'>
            <div className='d-flex justify-content-between align-items-center p-3 pt-4 h-100 overview-cards'>
              <div>
                <p className='mb-2'>Active Users</p>
                <h4>2,847</h4>
                <p style={{ fontSize: '14px' }}>+8% from last month</p>
              </div>
              <div>
                <GroupOutlinedIcon style={{ color: '#F25C05', fontSize: '36px' }} />
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-12 col-sm-12'>
            <div className='d-flex justify-content-between align-items-center p-3 pt-4 h-100 overview-cards'>
              <div>
                <p className='mb-2'>Conversion Rate</p>
                <h4>24.3%</h4>
                <p style={{ fontSize: '14px' }}>+3% from last month</p>
              </div>
              <div>
                <TrendingUpIcon style={{ color: '#F25C05', fontSize: '36px' }} />
              </div>
            </div>
          </div>
      </div>

      {/* drill cards */}
        <div className="row g-4 mt-0">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className='p-3 h-100 overview-cards'>
                <h4 className='fs-5'>User Sign-up Trend</h4>
                <div className='p-5 mt-3 d-flex justify-content-center align-items-center rounded-3 thumbnail-box'>
                  <p>Line Chart - User Sign-ups Over Time</p>
                </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className='p-3 h-100 overview-cards'>
                <h4 className='fs-5'>Subscription Conversion</h4>
                <div className='p-5 mt-3 d-flex justify-content-center align-items-center rounded-3 thumbnail-box'>
                  <p>Bar Chart - Free to Paid Conversions</p>
                </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className='p-3 h-100 overview-cards'>
                <h4 className='fs-5'>Drill Usage Distribution</h4>
                <div className='p-5 mt-3 d-flex justify-content-center align-items-center rounded-3 thumbnail-box'>
                  <p>Pie Chart - Most Popular Drill Categories</p>
                </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className='p-3 h-100 overview-cards'>
                <h4 className='fs-5'>Monthly Revenue</h4>
                <div className='p-5 mt-3 d-flex justify-content-center align-items-center rounded-3 thumbnail-box'>
                  <p>Area Chart - Revenue Growth</p>
                </div>
            </div>
          </div>
        </div>

        <div className='row g-4 mt-4 ms-0 me-0 ps-1 pe-1 overview-cards'>
          <h4 className='fs-5 mb-0'>Detailed Metrics</h4>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className='p-3 pt-3 h-100 text-center Analytics-card'>
                <h4>8.4m</h4>
                <p>Session Duration (avg)</p>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className='p-3 pt-3 h-100 text-center Analytics-card'>
                <h4>127</h4>
                <p>Users Online Now</p>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className='p-3 pt-3 h-100 text-center Analytics-card'>
                <h4>89.2%</h4>
                <p>User Retention (30d)</p>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className='p-2 pt-3 h-100 text-center Analytics-card'>
                <h4>$18.50</h4>
                <p>ARPU (Monthly)</p>
            </div>
          </div>  
        </div>
    </div>
  );
};

export default Analytics;
