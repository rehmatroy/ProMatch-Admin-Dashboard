import React, { useState } from 'react';
import { Table, InputGroup, FormControl, Dropdown, Badge } from 'react-bootstrap';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import AddIcon from '@mui/icons-material/Add';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

// import css
import '../../App.css';

const initialUsers = [
  {
    name: 'John Smith',
    email: 'john.smith@email.com',
    subscription: 'Pro',
    status: 'Active',
    lastActivity: '2 hours ago',
  },
  {
    name: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    subscription: 'Basic',
    status: 'Active',
    lastActivity: '5 minutes ago',
  },
  {
    name: 'Mike Davis',
    email: 'mike.davis@email.com',
    subscription: 'Pro',
    status: 'Inactive',
    lastActivity: '2 days ago',
  },
  {
    name: 'Lisa Chen',
    email: 'lisa.chen@email.com',
    subscription: 'Free',
    status: 'Active',
    lastActivity: '1 hour ago',
  },
];

const UserManagement = () => {
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusClass = (status) => {
    return status === 'Active' ? 'badge-active' : 'badge-inactive';
  };

  const getSubClass = (sub) => {
    switch (sub) {
      case 'Pro':
        return 'badge-pro';
      case 'Basic':
      case 'Free':
        return 'badge-basic-free';
      default:
        return 'badge-default';
    }
  };

  return (
    <div className="container p-0">
      <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
        <div className='dashboard-head-content'>
            <h3 className='fw-bold mb-1'>User Management</h3>
            <p>Manage your users and subscriptions</p>
          </div>
        <button className='btn btn-primary add-users-btn'> <AddIcon fontSize='small' /> Add User</button>
      </div>
      {/* Search & Filter */}
      <div className='p-3 pt-4 overview-cards'>
          <h4>Users</h4>
        <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
          <InputGroup style={{ maxWidth: 300 }}>
            <FormControl
              className='search-input'
              placeholder="Search users..."
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
          <Dropdown>
            <Dropdown.Toggle style={{fontSize:14, color:'#1C3D58'}} className='filter-btn'><FilterAltOutlinedIcon fontSize='small' /> Filter</Dropdown.Toggle>
            <Dropdown.Menu className='p-1'>
              <Dropdown.Item className='filter-items'>Active</Dropdown.Item>
              <Dropdown.Item className='filter-items'>Inactive</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        {/* Users Table */}
        <div className="table-responsive" style={{width:'100%', overflowX: 'auto', maxWidth: '100%', }}>
          <Table hover className='table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Subscription</th>
                <th>Status</th>
                <th>Last Activity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr key={index}>
                  <td className="fw-bold">{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Badge className={getSubClass(user.subscription)}>
                      {user.subscription}
                    </Badge>
                  </td>
                  <td>
                    <Badge className={getStatusClass(user.status)}>{user.status}</Badge>
                  </td>
                  <td>{user.lastActivity}</td>
                  <td>
                    <Dropdown align="end">
                      <Dropdown.Toggle
                        variant="link"
                        className="border-0 bg-transparent no-caret"
                      >
                        <MoreHorizOutlinedIcon style={{color:'#F25C05'}}/>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className='p-1'>
                        <Dropdown.Item className='filter-items'>View Details</Dropdown.Item>
                        <Dropdown.Item className='filter-items'>Edit User</Dropdown.Item>
                        <Dropdown.Item className='filter-items'>Send Message</Dropdown.Item>
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
    </div>
  );
};

export default UserManagement;
