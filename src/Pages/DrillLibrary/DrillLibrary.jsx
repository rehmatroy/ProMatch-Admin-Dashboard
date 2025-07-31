import { useState } from 'react';
import {
  InputGroup, FormControl, Modal, Button, Form, Offcanvas
} from 'react-bootstrap';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DownloadIcon from '@mui/icons-material/Download';
import '../../App.css';

const initialDrills = [
  {
    id: 1,
    title: "Advanced Shooting Technique",
    desc: "Master the fundamentals of shooting form and accuracy",
    category: "Shooting",
    level: "Advanced",
    videoUrl: "https://www.youtube.com/embed/7OT3vgmBnhA",
    views: 120,
    completed: false,
    uploadedAt: "2024-02-05 10:00",
    location: "NY, USA"
  },
  {
    id: 2,
    title: "Ball Handling Basics",
    desc: "Learn essential ball handling skills",
    category: "Dribbling",
    level: "Beginner",
    videoUrl: "https://www.youtube.com/embed/vYXNN0o7hNE",
    views: 96,
    completed: true,
    uploadedAt: "2024-04-10 14:30",
    location: "TX, USA"
  },
  {
    id: 3,
    title: "Defensive Stance",
    desc: "Perfect your defensive positioning",
    category: "Defense",
    level: "Intermediate",
    videoUrl: "https://www.youtube.com/embed/0UasgLL2raY",
    views: 75,
    completed: false,
    uploadedAt: "2025-07-10 17:30",
    location: "RT, USA"
  },
  {
    id: 4,
    title: "Fast Break Fundamentals",
    desc: "Execute effective fast break plays",
    category: "Offense",
    level: "Intermediate",
    videoUrl: "https://www.youtube.com/embed/M9Acu3IlURQ",
    views: 103,
    completed: true,
    uploadedAt: "2025-10-5 19:40",
    location: "WE, USA"
  }
];

const DrillLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [drills, setDrills] = useState(initialDrills);
  const [showModal, setShowModal] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [selectedDrill, setSelectedDrill] = useState(null);
  const [formData, setFormData] = useState({
    id: null, title: '', desc: '', category: '', level: '', videoUrl: ''
  });

  const isEditMode = formData.id !== null;

  const openModal = (drill = null) => {
    if (drill) setFormData(drill);
    else setFormData({ id: null, title: '', desc: '', category: '', level: '', videoUrl: '' });
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = () => {
    if (isEditMode) {
      setDrills(prev => prev.map(d => (d.id === formData.id ? formData : d)));
    } else {
      const newDrill = {
        ...formData,
        id: Date.now(),
        views: 0,
        completed: false,
        uploadedAt: new Date().toLocaleString(),
        location: "Unknown"
      };
      setDrills(prev => [newDrill, ...prev]);
    }
    closeModal();
  };

  const deleteDrill = (id) => {
    if (window.confirm("Are you sure you want to delete this drill?")) {
      setDrills(prev => prev.filter(d => d.id !== id));
    }
  };

  const toggleCompletion = (id) => {
    setDrills(prev =>
      prev.map(d =>
        d.id === id ? { ...d, completed: !d.completed } : d
      )
    );
  };

  const openDrawer = (drill) => {
    setSelectedDrill(drill);
    setDrills(prev =>
      prev.map(d => d.id === drill.id ? { ...d, views: d.views + 1 } : d)
    );
    setShowDrawer(true);
  };

  const exportData = () => {
    const csv = drills.map(d => `${d.title},${d.category},${d.level},${d.views},${d.completed}`).join("\n");
    const blob = new Blob([`Title,Category,Level,Views,Completed\n${csv}`], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "drill_export.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  const filteredDrills = drills.filter(drill =>
    drill.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container p-0">
      <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
        <div className='dashboard-head-content'>
          <h3 className='fw-bold mb-1'>Drill Library</h3>
          <p>Manage basketball training drills</p>
        </div>
        <div className='d-flex gap-2'>
          <button className='btn btn-outline-dark custom-file-upload' onClick={exportData}>
            <DownloadIcon fontSize="small" /> Export
          </button>
          <button className='btn btn-primary add-users-btn' onClick={() => openModal()}>
            <AddIcon fontSize='small' /> Add New Drill
          </button>
        </div>
      </div>

      <div className='p-3 pt-4 overview-cards'>
        <h4>All Drills</h4>
        <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
          <InputGroup style={{ maxWidth: 300 }}>
            <FormControl
              className='search-input'
              placeholder="Search drills..."
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        </div>

        <div className="row g-3">
          {filteredDrills.map(drill => (
            <div key={drill.id} className="col-lg-6 col-md-12 col-sm-12">
              <div className='p-3 h-100 overview-cards'>
                <div>
                  <iframe
                    width="100%" height="230"
                    src={drill.videoUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{borderRadius:'5px'}}
                  ></iframe>
                </div>
                <div className='d-flex justify-content-between align-items-center mt-4 mb-3 drillcards-heading'>
                  <h5>{drill.title}</h5>
                  <div style={{ textWrap: 'nowrap' }}>
                    <VisibilityIcon
                      className='me-2 drill-icons'
                      fontSize='small'
                      onClick={() => openDrawer(drill)}
                    />
                    <EditCalendarOutlinedIcon
                      className='me-2 drill-icons'
                      fontSize='small'
                      onClick={() => openModal(drill)}
                    />
                    <DeleteForeverOutlinedIcon
                      id='delete-icon'
                      className='drill-icons'
                      fontSize='small'
                      onClick={() => deleteDrill(drill.id)}
                    />
                  </div>
                </div>
                <div className='drillcards-content'>
                  <p>{drill.desc}</p>
                  <div className='d-flex align-items-center justify-content-between mt-2 drill-badges-head'>
                    <div className='drill-badges'>
                      <span className='me-2'>{drill.category}</span>
                      <span className={`me-2 ${drill.level.toLowerCase()}-badge`}>{drill.level}</span>
                      <span className='me-2'>Views: {drill.views}</span>
                    </div>
                    <div className='drill-complete-btn'>
                      <button
                        className={`btn btn-sm text-nowrap ${drill.completed ? 'btn-success' : 'btn-outline-secondary'}`}
                        onClick={() => toggleCompletion(drill.id)}
                      >
                        {drill.completed ? <CheckCircleIcon style={{ fontSize: 15 }} /> : <HighlightOffIcon style={{ fontSize: 15 }} />}
                        {' '}
                        {drill.completed ? 'Completed' : 'Incomplete'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add/Edit Modal */}
      <Modal className='mt-5' show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: '#1C3D58' }}>{isEditMode ? 'Edit Drill' : 'Add New Drill'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {["title", "desc", "category", "videoUrl"].map((field, idx) => (
              <Form.Group key={field}>
                <Form.Label className='mb-1 mt-2 drill-label'>{field.charAt(0).toUpperCase() + field.slice(1)}</Form.Label>
                <Form.Control
                  className='search-input'
                  name={field}
                  value={formData[field]}
                  onChange={handleFormChange}
                  placeholder={`Enter ${field}`}
                />
              </Form.Group>
            ))}
            <Form.Group>
              <Form.Label className='mb-1 mt-2 drill-label'>Level</Form.Label>
              <Form.Select name="level" value={formData.level} onChange={handleFormChange}>
                <option value="">Select level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-primary custom-file-upload' onClick={closeModal}>Cancel</button>
          <button className='btn btn-primary add-users-btn' onClick={handleFormSubmit}>
            {isEditMode ? 'Update Drill' : 'Add Drill'}
          </button>
        </Modal.Footer>
      </Modal>

      {/* Activity Drawer */}
      <Offcanvas className='mt-5 pt-3' placement='end' show={showDrawer} onHide={() => setShowDrawer(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{color:'#1C3D58'}} >Drill Activity</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {selectedDrill && (
            <div className='activity-view-model'>
              <p><strong>Title:</strong> {selectedDrill.title}</p>
              <p><strong>Uploaded At:</strong> {selectedDrill.uploadedAt}</p>
              <p><strong>Location:</strong> {selectedDrill.location}</p>
              <p><strong>Views:</strong> {selectedDrill.views}</p>
              <p><strong>Status:</strong> {selectedDrill.completed ? '✅ Completed' : '❌ Incomplete'}</p>
            </div>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default DrillLibrary;
