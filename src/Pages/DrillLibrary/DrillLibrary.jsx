import { InputGroup, FormControl, Dropdown, DropdownMenu, DropdownItem } from 'react-bootstrap';
import AddIcon from '@mui/icons-material/Add';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';

// import css
import '../../App.css';


const DrillLibrary = () => {
  // const [users, setUsers] = useState(initialUsers);
  // const [searchTerm, setSearchTerm] = useState('');

  // const filteredUsers = users.filter((user) =>
  //   user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //   user.email.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <div className="container p-0">
      <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
        <div className='dashboard-head-content'>
            <h3 className='fw-bold mb-1'>Drill Library</h3>
            <p>Manage basketball training drills</p>
          </div>
        <button className='btn btn-primary add-users-btn'> <AddIcon fontSize='small' /> Add New Drill</button>
      </div>
      {/* Search & Filter */}
      <div className='p-3 pt-4 overview-cards'>
          <h4>All Drills</h4>
        <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
          <InputGroup style={{ maxWidth: 300 }}>
            <FormControl
              className='search-input'
              placeholder="Search users..."
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
          <Dropdown>
            <Dropdown.Toggle style={{fontSize:14, color:'#1C3D58'}} className='filter-btn'><FilterAltOutlinedIcon fontSize='small'/> Filter</Dropdown.Toggle>
            <DropdownMenu >
              <DropdownItem className='profile-menus'>Drill</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>

       {/* drill cards */}
        <div className="row g-3">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className='p-3 h-100 overview-cards'>
                <div className='p-5 d-flex justify-content-center align-items-center rounded-3 thumbnail-box'>
                  <p>Drill Thumbnail</p>
                </div>
                <div className='d-flex justify-content-between align-items-center mt-4 mb-3 drillcards-heading'>
                  <h5>Advanced Shooting Technique</h5>
                  <div style={{textWrap: 'nowrap'}}>
                    <EditCalendarOutlinedIcon className='drill-icons' fontSize='small'/>
                    <DeleteForeverOutlinedIcon id='delete-icon' className='drill-icons' fontSize='small'/>
                  </div>
                </div>
                <div className='drillcards-content'>
                  <p>Master the fundamentals of shooting form and accuracy</p>
                  <div>
                    <span>Shooting</span>
                    <span className='ms-3 advance-badge'>Advanced</span>
                  </div>
                </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className='p-3 h-100 overview-cards'>
                <div className='p-5 d-flex justify-content-center align-items-center rounded-3 thumbnail-box'>
                  <p>Drill Thumbnail</p>
                </div>
                <div className='d-flex justify-content-between align-items-center mt-4 mb-3 drillcards-heading'>
                  <h5>Ball Handling Basics</h5>
                  <div style={{textWrap: 'nowrap'}}>
                    <EditCalendarOutlinedIcon className='drill-icons' fontSize='small'/>
                    <DeleteForeverOutlinedIcon id='delete-icon' className='drill-icons' fontSize='small'/>
                  </div>
                </div>
                <div className='drillcards-content'>
                  <p>Learn essential ball handling skills</p>
                  <div>
                    <span>Dribbling</span>
                    <span className='ms-3 beginner-badge'>Beginner</span>
                  </div>
                </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className='p-3 h-100 overview-cards'>
                <div className='p-5 d-flex justify-content-center align-items-center rounded-3 thumbnail-box'>
                  <p>Drill Thumbnail</p>
                </div>
                <div className='d-flex justify-content-between align-items-center mt-4 mb-3 drillcards-heading'>
                  <h5>Defensive Stance</h5>
                  <div style={{textWrap: 'nowrap'}}>
                    <EditCalendarOutlinedIcon className='drill-icons' fontSize='small'/>
                    <DeleteForeverOutlinedIcon id='delete-icon' className='drill-icons' fontSize='small'/>
                  </div>
                </div>
                <div className='drillcards-content'>
                  <p>Perfect your defensive positioning</p>
                  <div>
                    <span>Defense</span>
                    <span className='ms-3 intermediate-badge'>Intermediate</span>
                  </div>
                </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className='p-3 h-100 overview-cards'>
                <div className='p-5 d-flex justify-content-center align-items-center rounded-3 thumbnail-box'>
                  <p>Drill Thumbnail</p>
                </div>
                <div className='d-flex justify-content-between align-items-center mt-4 mb-3 drillcards-heading'>
                  <h5>Fast Break Fundamentals</h5>
                  <div style={{textWrap: 'nowrap'}}>
                    <EditCalendarOutlinedIcon className='drill-icons' fontSize='small'/>
                    <DeleteForeverOutlinedIcon id='delete-icon' className='drill-icons' fontSize='small'/>
                  </div>
                </div>
                <div className='drillcards-content'>
                  <p>Execute effective fast break plays</p>
                  <div className=''>
                    <span>Offense</span>
                    <span className='ms-3 intermediate-badge'>Intermediate</span>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  );
};

export default DrillLibrary;
