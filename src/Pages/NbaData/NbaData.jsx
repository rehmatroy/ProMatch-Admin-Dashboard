import React, { useState } from 'react';
import { Table, Dropdown, Badge } from 'react-bootstrap';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

// import css
import '../../App.css';

const initialUsers = [
  {
    player: 'Stephen Curry',
    shotType: '3-Point Shot',
    videos: '45',
    annotations: '120',
    status: 'Active',
    lastUpdated: '2 days ago',
  },
  {
    player: 'LeBron James',
    shotType: 'Drive to Basket',
    videos: '38',
    annotations: '95',
    status: 'Active',
    lastUpdated: '1 week ago',
  },
  {
    player: 'Kevin Durant',
    shotType: 'Mid-Range Jump Shot',
    videos: '52',
    annotations: '140',
    status: 'Inactive',
    lastUpdated: '3 week ago',
  },
  {
    player: 'Giannis Antetokounmpo',
    shotType: 'Post Move',
    videos: '29',
    annotations: '78',
    status: 'Active',
    lastUpdated: '5 days ago',
  },
];

const NbaData = () => {
  const [users] = useState(initialUsers);
  const [searchTerm] = useState('');

  const filteredUsers = users.filter((user) =>
    user.player.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.shotType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusClass = (status) => {
    return status === 'Active' ? 'badge-active' : 'badge-inactive';
  };

  return (
    <div className="container p-0">
      <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
        <div className='dashboard-head-content'>
            <h3 className='fw-bold mb-1'>NBA Data Manager</h3>
            <p>Manage NBA player reference data and annotations</p>
          </div>
        <button className='btn btn-primary add-users-btn'> <FileUploadOutlinedIcon fontSize='small' /> Upload Video References</button>
      </div>
      <div className='row g-4'>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className='p-3 pt-4 h-100 overview-cards'>
              <div>
                <h4>164</h4>
                <p style={{ fontSize: '14px' }}>Total Videos</p>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className='p-3 pt-4 h-100 overview-cards'>
              <div>
                <h4>433</h4>
                <p style={{ fontSize: '14px' }}>Total Annotations</p>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className='p-3 pt-4 h-100 overview-cards'>
              <div>
                <h4>12</h4>
                <p style={{ fontSize: '14px' }}>NBA Players</p>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className='p-3 pt-4 h-100 overview-cards'>
              <div>
                <h4>8</h4>
                <p style={{ fontSize: '14px' }}>Shot Types</p>
              </div>
            </div>
          </div>
      </div>

      {/* Table */}
      <div className='p-3 pt-4 mt-4 overview-cards'>
        <h4>NBA Reference Data</h4>
          {/* Users Table */}
        <div className="table-responsive" style={{width:'100%', overflowX: 'auto', maxWidth: '100%', }}>
          <Table hover className='table'>
            <thead>
              <tr>
                <th>Player</th>
                <th>Shot Type</th>
                <th>Videos</th>
                <th>Annotations</th>
                <th>Status</th>
                <th>Last Updated</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr key={index}>
                  <td className="fw-bold">{user.player}</td>
                  <td>{user.shotType}</td>
                  <td>{user.videos}</td>
                  <td>{user.annotations}</td>
                  <td>
                    <Badge className={getStatusClass(user.status)}>{user.status}</Badge>
                  </td>
                  <td>{user.lastUpdated}</td>
                  <td>
                    <Dropdown align="end">
                      <Dropdown.Toggle
                        variant="link"
                        className="border-0 bg-transparent no-caret"
                      >
                        <MoreHorizOutlinedIcon style={{color:'#F25C05'}}/>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className='p-1'>
                        <Dropdown.Item className='filter-items'>View Videos</Dropdown.Item>
                        <Dropdown.Item className='filter-items'>Edit Annotations</Dropdown.Item>
                        <Dropdown.Item className='filter-items'>Update Reference</Dropdown.Item>
                        <Dropdown.Item className='filter-items'>Download Data</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              ))}
              {filteredUsers.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>

      {/* Videos upload card */}
      <div className='p-3 pt-4 mt-4 overview-cards'>
        <h4>Upload New Reference Data</h4>
        <div className='p-5 mt-3 text-center rounded-3 vedio-upload-card'>
            <FileUploadOutlinedIcon className='mb-2 upload-icon'/>
            <h4>Upload Video Files</h4>
            <p>Drag and drop your NBA video references here, or click to browse</p>
            <label for="file-upload" class="custom-file-upload">
              Choose Files
            </label>
            <input id="file-upload" type="file" style={{display: 'none'}}/>
        </div>
      </div>
    </div>
  );
};

export default NbaData;
