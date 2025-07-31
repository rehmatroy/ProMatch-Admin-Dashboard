
import { useState } from 'react';
import { Table, InputGroup, FormControl, Badge, Pagination, Modal, Button } from 'react-bootstrap';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';

import '../../App.css';

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Smith', email: 'john.smith@email.com', subscription: 'Pro', status: 'Active', lastActivity: '2 hours ago' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah.j@email.com', subscription: 'Basic', status: 'Active', lastActivity: '5 minutes ago' },
    { id: 3, name: 'Mike Davis', email: 'mike.davis@email.com', subscription: 'Pro', status: 'Inactive', lastActivity: '2 days ago' },
    { id: 4, name: 'Lisa Chen', email: 'lisa.chen@email.com', subscription: 'Free', status: 'Active', lastActivity: '1 hour ago' },
    ...Array.from({ length: 16 }, (_, i) => ({
      id: i + 5,
      name: `User ${i + 5}`,
      email: `user${i + 5}@email.com`,
      subscription: ['Pro', 'Basic', 'Free'][i % 3],
      status: i % 2 === 0 ? 'Active' : 'Inactive',
      lastActivity: `${i + 1} days ago`
    }))
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('add');
  const [currentUser, setCurrentUser] = useState({ id: '', name: '', email: '', subscription: '', status: '', lastActivity: '' });
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [activityLogUser, setActivityLogUser] = useState(null);
  const itemsPerPage = 10;

  const getSubClass = (sub) => sub === 'Pro' ? 'badge-pro' : 'badge-basic-free';
  const getStatusClass = (status) => status === 'Active' ? 'badge-active' : 'badge-inactive';

  const handleAddUser = () => {
    setModalType('add');
    setCurrentUser({ id: '', name: '', email: '', subscription: '', status: '', lastActivity: '' });
    setIsModalOpen(true);
  };

  const handleEditUser = (user) => {
    setModalType('edit');
    setCurrentUser(user);
    setIsModalOpen(true);
  };

  const handleSubmit = () => {
    if (modalType === 'add') {
      const newId = users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1;
      setUsers([...users, { ...currentUser, id: newId }]);
    } else {
      setUsers(users.map((user) => (user.id === currentUser.id ? currentUser : user)));
    }
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };

  const handleDownloadCSV = () => {
    const csvContent = [
      ['ID', 'Name', 'Email', 'Subscription', 'Status', 'LastActivity'],
      ...users.map((u) => [u.id, u.name, u.email, u.subscription, u.status, u.lastActivity])
    ]
      .map((row) => row.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "user_data.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleActivityLog = (user) => {
    setActivityLogUser(user);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.subscription.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedUsers = filteredUsers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  return (
    <div className="container p-0">
      <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
        <div className='dashboard-head-content'>
          <h3 className='fw-bold mb-1'>User Management</h3>
          <p>Manage your users and subscriptions</p>
        </div>
        <div className="d-flex gap-2">
          <button className='btn btn-outline-secondary custom-file-upload' onClick={handleDownloadCSV}><DownloadIcon fontSize='small' /> Export CSV</button>
          <button className='btn btn-primary add-users-btn' onClick={handleAddUser}><AddIcon fontSize='small' /> Add User</button>
        </div>
      </div>

      <div className='p-3 pt-4 overview-cards'>
        <h4>Users</h4>
        <InputGroup className="mb-3" style={{ maxWidth: 300 }}>
          <FormControl className='search-input' placeholder="Search users..." onChange={(e) => setSearchQuery(e.target.value)} />
        </InputGroup>

        <div className="table-responsive">
          <Table hover>
            <thead>
              <tr>
                <th>ID</th><th>Name</th><th>Email</th><th>Subscription</th><th>Status</th><th>Last Activity</th><th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td><Badge className={getSubClass(user.subscription)}>{user.subscription}</Badge></td>
                  <td><Badge className={getStatusClass(user.status)}>{user.status}</Badge></td>
                  <td>{user.lastActivity}</td>
                  <td className="d-flex gap-2">
                    <EditCalendarOutlinedIcon onClick={() => handleEditUser(user)} className='edit-icon' />
                    <DeleteForeverOutlinedIcon onClick={() => setUsers(users.filter((u) => u.id !== user.id))} className='delete-icon' />
                    <VisibilityIcon onClick={() => handleActivityLog(user)} className='view-icon' />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {totalPages > 1 && (
            <div className="d-flex justify-content-end custom-pagination">
              <Pagination className='mt-2'>
                {[...Array(totalPages)].map((_, index) => (
                  <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => setCurrentPage(index + 1)}>
                    {index + 1}
                  </Pagination.Item>
                ))}
              </Pagination>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h4 className="fw-bold mb-4">{modalType === 'add' ? 'Add New User' : 'Edit User'}</h4>
            <form>
              {['name', 'email', 'lastActivity'].map((field) => (
                <div className="mb-3" key={field}>
                  <label className="mb-1 label-field">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                  <input type="text" name={field} value={currentUser[field]} onChange={handleInputChange} className='rounded w-100 search-input' placeholder={`Enter ${field}`} />
                </div>
              ))}
              <div className="mb-3">
                <label className="mb-1 label-field">Subscription</label>
                <select name="subscription" value={currentUser.subscription} onChange={handleInputChange} className='rounded w-100 search-input'>
                  <option value="">Select</option>
                  <option value="Pro">Pro</option>
                  <option value="Basic">Basic</option>
                  <option value="Free">Free</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="mb-1 label-field">Status</label>
                <select name="status" value={currentUser.status} onChange={handleInputChange} className='rounded w-100 search-input'>
                  <option value="">Select</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div className="d-flex justify-content-end">
                <button className='btn btn-secondary custom-file-upload me-2' type='button' onClick={() => setIsModalOpen(false)}>Cancel</button>
                <button className='btn btn-primary add-users-btn' onClick={handleSubmit} type='button'>{modalType === 'add' ? 'Add User' : 'Save Changes'}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Activity Log Modal */}
      <Modal show={!!activityLogUser} onHide={() => setActivityLogUser(null)} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{color:'#1C3D58'}}>User Activity Log</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {activityLogUser && (
            <div className='activity-view-model'>
              <p><strong>Name:</strong> {activityLogUser.name}</p>
              <p><strong>Email:</strong> {activityLogUser.email}</p>
              <p><strong>Status:</strong> {activityLogUser.status}</p>
              <p><strong>Subscription:</strong> {activityLogUser.subscription}</p>
              <p><strong>Last Activity:</strong> {activityLogUser.lastActivity}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button style={{backgroundColor:'#F25C05', border:'1px solid #F25C05'}} variant="secondary" onClick={() => setActivityLogUser(null)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserManagement;