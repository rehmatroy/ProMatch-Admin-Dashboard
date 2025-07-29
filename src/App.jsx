import { useAuth } from './Context/AuthContext'; 
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Layout & Pages
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
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {/* 🔐 Protect all layout routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/account/login" element={<Login />} />

        {isAuthenticated ? (
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Navigate to="/dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="user-management" element={<UserManagement />} />
            <Route path="drill-library" element={<DrillLibrary />} />
            <Route path="nba-data" element={<NbaData />} />
            <Route path="notifications" element={<Notification />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Setting />} />
          </Route>
        ) : (
          // 🔁 Not logged in? redirect to login
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}
export default App;