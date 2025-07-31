import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { useState } from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Modal, Button, Form } from 'react-bootstrap';
import '../../App.css';

const Notification = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'New Drill Release',
      message: 'Check out our latest Advanced Shooting drill!',
      type: 'Push',
      audience: 'All Users',
      recipients: '2,847',
      date: '2023-12-15',
      openRate: '82%',
      clickRate: '56%',
      extra: 'Drill Started: 43% | Ignored: 21%',
      status: 'Sent'
    },
    {
      id: 2,
      title: 'Weekly Progress Report',
      message: 'Your weekly training summary is ready.',
      type: 'Email',
      audience: 'Pro Subscribers',
      recipients: '1,234',
      date: '2023-12-18',
      openRate: '77%',
      clickRate: '61%',
      extra: 'Drill Completed: 38%',
      status: 'Scheduled'
    },
    {
      id: 3,
      title: 'Subscription Reminder',
      message: 'Your subscription expires in 3 days.',
      type: 'Push',
      audience: 'Expiring Subscriptions',
      recipients: '45',
      openRate: '91%',
      clickRate: '73%',
      extra: '',
      status: 'Draft'
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [formData, setFormData] = useState({
    title: '', message: '', type: 'Push', audience: '', recipients: '', date: '', openRate: '', clickRate: '', extra: '', status: 'Draft'
  });

  const openModal = (notif = null) => {
    setEditing(notif);
    setFormData(notif || {
      title: '', message: '', type: 'Push', audience: '', recipients: '', date: '', openRate: '', clickRate: '', extra: '', status: 'Draft'
    });
    setShowModal(true);
  };

  const saveNotification = () => {
    if (editing) {
      setNotifications(notifications.map(n => n.id === editing.id ? { ...editing, ...formData } : n));
    } else {
      setNotifications([...notifications, { ...formData, id: Date.now() }]);
    }
    setShowModal(false);
  };

  const duplicateNotification = (notif) => {
    const copy = { ...notif, id: Date.now() };
    setNotifications([...notifications, copy]);
  };

  const deleteNotification = (id) => {
    const confirm = window.confirm('Are you sure you want to delete this notification?');
    if (confirm) {
      setNotifications(notifications.filter(n => n.id !== id));
    }
  };

  const exportToCSV = () => {
    const csvRows = [
      ['Title', 'Message', 'Type', 'Audience', 'Recipients', 'Date', 'Open Rate', 'Click Rate', 'Extra', 'Status'],
      ...notifications.map(n =>
        [n.title, n.message, n.type, n.audience, n.recipients, n.date, n.openRate, n.clickRate, n.extra, n.status]
      )
    ];
    const csvContent = "data:text/csv;charset=utf-8," + csvRows.map(e => e.join(',')).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "notifications.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container p-0">
      <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
        <div className='dashboard-head-content'>
          <h3 className='fw-bold mb-1'>Notifications</h3>
          <p>Manage push notifications and email campaigns</p>
        </div>
        <div className='d-flex gap-2'>
          <button className='btn btn-secondary custom-file-upload' onClick={exportToCSV}>
            <FileDownloadOutlinedIcon fontSize='small' /> Export
          </button>
          <button className='btn btn-primary add-users-btn' onClick={() => openModal()}>
            <AddOutlinedIcon fontSize='small' /> Create Notification
          </button>
        </div>
      </div>

      <div className='row g-4'>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <div className='p-3 pt-4 d-flex h-100 overview-cards'>
            <div className='me-3'><SendOutlinedIcon className='mt-2 notification-icons' /></div>
            <div><h4>24</h4><p style={{ fontSize: '14px' }}>Sent This Month</p></div>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <div className='p-3 pt-4 d-flex h-100 overview-cards'>
            <div className='me-3'><CalendarTodayOutlinedIcon className='mt-2 notification-icons' /></div>
            <div><h4>3</h4><p style={{ fontSize: '14px' }}>Scheduled</p></div>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <div className='p-3 pt-4 d-flex h-100 overview-cards'>
            <div className='me-3'><PeopleOutlineOutlinedIcon className='mt-2 notification-icons' /></div>
            <div><h4>89.2%</h4><p style={{ fontSize: '14px' }}>Open Rate</p></div>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <div className='p-3 pt-4 d-flex h-100 overview-cards'>
            <div className='me-3'><SendOutlinedIcon className='mt-2 notification-icons' /></div>
            <div><h4>67.8%</h4><p style={{ fontSize: '14px' }}>Click Rate</p></div>
          </div>
        </div>
      </div>

      <div className='p-3 pt-4 mt-4 overview-cards'>
        <div className='notification-content-cards'>
          <h4>All Notifications</h4>
          {notifications.map(n => (
            <div key={n.id} className='d-flex justify-content-between border rounded-3 p-3 mt-4'>
              <div>
                <h5 className='fw-bold'>{n.title}</h5>
                <p className='mt-3 mb-2'>{n.message}</p>
                <div>
                  <span>Type: {n.type}</span> {' | '}<span>Audience: {n.audience}</span> {' | '}<span>Recipients: {n.recipients}</span> {n.date ? <> {' | '}<span>Sent: {n.date}</span></> : ''}
                </div>
                <div className='mt-2' style={{ fontSize: '13.5px', color: '#6B6B6B' }}>
                  Open Rate: {n.openRate} | Click Rate: {n.clickRate} {n.extra && `| ${n.extra}`}
                </div>
                <div className='mt-2'>
                  <button className='btn btn-primary me-2 notification-btns' onClick={() => openModal(n)}>Edit</button>
                  <button className='btn btn-primary me-2 notification-btns' onClick={() => duplicateNotification(n)}>Duplicate</button>
                  <button className='btn btn-danger notification-btns' onClick={() => deleteNotification(n.id)}>Delete</button>
                </div>
              </div>
              <div>
                <span className='ps-2 pe-2 pt-1 pb-1 rounded-5 fw-bold'
                  style={{
                    backgroundColor: n.status === 'Sent' ? '#F25C05' : '#1c3d5812',
                    color: n.status === 'Sent' ? '#fff' : '#1C3D58',
                    fontSize: 12
                  }}>{n.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal className='mt-5' show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: '#1C3D58' }}>
            {editing ? 'Edit Notification' : 'Create Notification'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form style={{ color: '#0a1b29ff' }}>
            <Form.Group className="mb-3"><Form.Label>Title</Form.Label>
              <Form.Control className='search-input' type="text" value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3"><Form.Label>Message</Form.Label>
              <Form.Control className='search-input' as="textarea" rows={3} value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3"><Form.Label>Type</Form.Label>
              <Form.Control className='search-input' type="text" value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3"><Form.Label>Audience</Form.Label>
              <Form.Control className='search-input' type="text" value={formData.audience}
                onChange={(e) => setFormData({ ...formData, audience: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3"><Form.Label>Recipients</Form.Label>
              <Form.Control className='search-input' type="text" value={formData.recipients}
                onChange={(e) => setFormData({ ...formData, recipients: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className='me-2'>Date</Form.Label>
              <DatePicker
                selected={formData.date ? new Date(formData.date) : null}
                onChange={(date) => setFormData({ ...formData, date })}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select date"
                className="form-control search-input"
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
              />
            </Form.Group>
            <Form.Group className="mb-3"><Form.Label>Open Rate</Form.Label>
              <Form.Control className='search-input' type="text" value={formData.openRate}
                onChange={(e) => setFormData({ ...formData, openRate: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3"><Form.Label>Click Rate</Form.Label>
              <Form.Control className='search-input' type="text" value={formData.clickRate}
                onChange={(e) => setFormData({ ...formData, clickRate: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3"><Form.Label>Extra</Form.Label>
              <Form.Control className='search-input' type="text" value={formData.extra}
                onChange={(e) => setFormData({ ...formData, extra: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3"><Form.Label>Status</Form.Label>
              <Form.Select className='search-input' value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}>
                <option value="Sent">Sent</option>
                <option value="Scheduled">Scheduled</option>
                <option value="Draft">Draft</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="custom-file-upload" variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button className="add-users-btn" variant="primary" onClick={saveNotification}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Notification;
