import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Navigate } from 'react-router-dom';


// import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

// Pages
import DashboardLayout from './Components/DashboardLayout/DashboardLayout';
import Dashboard from './Pages/Dashboard/Dashboard';
import UserManagement from './Pages/UserManagement/UserManagement';
import DrillLibrary from './Pages/DrillLibrary/DrillLibrary';
import NbaData from './Pages/NbaData/NbaData';
import Notification from './Pages/Notification/Notification';
import Analytics from './Pages/Analytics/Analytics';
import Profile from './Pages/Profile/Profile';
import Setting from './Pages/Setting/Setting';
import Login from './Pages/Login/Login';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/dashboard" />} />
          <Route path='dashboard' element={<Dashboard/>} />
          <Route path="user-management" element={<UserManagement />} />
          <Route path="drill-library" element={<DrillLibrary />} />
          <Route path="nba-data" element={<NbaData />} />
          <Route path="notifications" element={<Notification />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Setting />} />
          <Route path="login" element={<Login />} />

          {/* topbar routes */}
          <Route path="account/profile" element={<Profile />} />
          <Route path="account/settings" element={<Setting />} />
          <Route path="account/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;