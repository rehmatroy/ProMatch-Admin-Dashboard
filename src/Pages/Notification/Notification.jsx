import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';

// import css
import '../../App.css';

const Notification = () => {

  return (
    <div className="container p-0">
      <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
        <div className='dashboard-head-content'>
            <h3 className='fw-bold mb-1'>Notifications</h3>
            <p>Manage push notifications and email campaigns</p>
          </div>
        <button className='btn btn-primary add-users-btn'> <AddOutlinedIcon fontSize='small' /> Create Notification</button>
      </div>
      <div className='row g-4'>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className='p-3 pt-4 d-flex h-100 overview-cards'>
              <div className='me-3'>
                <SendOutlinedIcon className='mt-2 notification-icons'/>
              </div>
              <div>
                <h4>24</h4>
                <p style={{ fontSize: '14px' }}>Sent This Month</p>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className='p-3 pt-4 d-flex h-100 overview-cards'>
              <div className='me-3'>
                <CalendarTodayOutlinedIcon className='mt-2 notification-icons'/>
              </div>
              <div>
                <h4>3</h4>
                <p style={{ fontSize: '14px' }}>Scheduled</p>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className='p-3 pt-4 d-flex h-100 overview-cards'>
              <div className='me-3'>
                <PeopleOutlineOutlinedIcon className='mt-2 notification-icons'/>
              </div>
              <div>
                <h4>89.2%</h4>
                <p style={{ fontSize: '14px' }}>Open Rate</p>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className='p-3 pt-4 d-flex h-100 overview-cards'>
              <div className='me-3'>
                <SendOutlinedIcon className='mt-2 notification-icons'/>
              </div>
              <div>
                <h4>67.8%</h4>
                <p style={{ fontSize: '14px' }}>Click Rate</p>
              </div>
            </div>
          </div>
      </div>

      <div className='p-3 pt-4 mt-4 overview-cards'>
        <div className='notification-content-cards'>
            <h4>All Notifications</h4>
            <div className='d-flex justify-content-between border rounded-3 p-3 mt-4'>
              <div>
                <h5 className='fw-bold'>New Drill Release</h5>
                <p className='mt-3 mb-2'>Check out our latest Advanced Shooting drill!</p>
                <div>
                  <span>Type: Push</span>
                  <span>Audience: All Users</span>
                  <span>Recipients: 2,847</span>
                  <span>Sent: 2023-12-15</span>
                </div>
                <div className='mt-2'>
                  <button className='btn btn-primary me-2 notification-btns'>Edit</button>
                  <button className='btn btn-primary notification-btns'> Duplicate</button>
                </div>
              </div>
              <div>
                <span className='ps-2 pe-2 pt-1 pb-1 rounded-5 fw-bold' style={{backgroundColor:'#F25C05', color:'#ffffff', fontSize: 12}}>Sent</span>
              </div>
            </div>
            <div className='d-flex justify-content-between border rounded-3 p-3 mt-4'>
              <div>
                <h5 className='fw-bold'>Weekly Progress Report</h5>
                <p className='mt-3 mb-2'>Your weekly training summary is ready.</p>
                <div>
                  <span>Type: Email</span>
                  <span>Audience: Pro Subscribers</span>
                  <span>Recipients: 1,234</span>
                  <span>Sent: 2023-12-18</span>
                </div>
                <div className='mt-2'>
                  <button className='btn btn-primary me-2 notification-btns'>Edit</button>
                  <button className='btn btn-primary notification-btns'> Duplicate</button>
                </div>
              </div>
              <div>
                <span className='ps-2 pe-2 pt-1 pb-1 rounded-5 fw-bold' style={{backgroundColor:'#1c3d5812', color:'#1C3D58', fontSize: 12}}>Scheduled</span>
              </div>
            </div>
            <div className='d-flex justify-content-between border rounded-3 p-3 mt-4'>
              <div>
                <h5 className='fw-bold'>Subscription Reminder</h5>
                <p className='mt-3 mb-2'>Your subscription expires in 3 days.</p>
                <div>
                  <span>Type: Push</span>
                  <span>Audience: Expiring Subscriptions</span>
                  <span>Recipients: 45</span>
                </div>
                <div className='mt-2'>
                  <button className='btn btn-primary me-2 notification-btns'>Edit</button>
                  <button className='btn btn-primary notification-btns'> Duplicate</button>
                </div>
              </div>
              <div>
                <span className='ps-2 pe-2 pt-1 pb-1 border rounded-5 fw-bold' style={{backgroundColor:'transparent', color:'#1C3D58', fontSize: 12}}>Draft</span>
              </div>
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default Notification;
