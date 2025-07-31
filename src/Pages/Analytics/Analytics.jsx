import React, { useState } from "react";
import FileDownloadOutlined from "@mui/icons-material/FileDownloadOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";


import 'react-datepicker/dist/react-datepicker.css';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';

import '../../App.css';

const Analytics = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const sampleDataUsers = [
    { month: 'Apr', users: 400 },
    { month: 'May', users: 700 },
    { month: 'Jun', users: 800 },
    { month: 'Jul', users: 1200 },
  ];
  const sampleDataSubs = [
    { name: 'Free to Paid', value: 400 },
    { name: 'Cancelled', value: 100 },
  ];
  const sampleRevenue = [
    { month: 'Apr', revenue: 30000 },
    { month: 'May', revenue: 45000 },
    { month: 'Jun', revenue: 60000 },
    { month: 'Jul', revenue: 72000 },
  ];

  const exportDashboard = () => {
    const rows = [
      ['Metric', 'Value'],
      ['Total Revenue', '$45,231'],
      ['Active Users', '2,847'],
      ['Conversion Rate', '24.3%'],
    ];
    const csv = rows.map(r => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'analytics_dashboard.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container p-0">
      {/* Header and Buttons */}
      <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
        <div className='dashboard-head-content'>
          <h3 className='fw-bold mb-1'>Analytics</h3>
          <p>Track user engagement and business metrics</p>
        </div>
        <div>
          <button className='btn btn-primary add-users-btn' onClick={exportDashboard}>
            <FileDownloadOutlined fontSize='small' /> Export
          </button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className='row g-4'>
        <div className='col-lg-4 col-md-12 col-sm-12'>
          <div className='overview-cards p-3 pt-4 d-flex justify-content-between align-items-center h-100'>
            <div>
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
          <div className='overview-cards p-3 pt-4 d-flex justify-content-between align-items-center h-100'>
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
          <div className='overview-cards p-3 pt-4 d-flex justify-content-between align-items-center h-100'>
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

      {/* Charts */}
      <div className="row g-4 mt-3">
        <div className="col-lg-6 col-md-12">
          <div className='overview-cards p-3 h-100'>
            <h4 className='fs-5'>User Sign‑up Trend</h4>
            <div className='p-5 mt-3 thumbnail-box'>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={sampleDataUsers}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="users" stroke="#F25C05" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className='overview-cards p-3 h-100'>
            <h4 className='fs-5'>Subscription Conversion</h4>
            <div className='p-5 mt-3 thumbnail-box'>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={sampleDataSubs}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#F25C05" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className='overview-cards p-3 h-100'>
            <h4 className='fs-5'>Drill Usage Distribution</h4>
            <div className='p-5 mt-3 thumbnail-box'>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={sampleDataSubs} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60}>
                    {sampleDataSubs.map((entry, idx) => (
                      <Cell key={`cell-${idx}`} fill={idx === 0 ? '#F25C05' : '#1C3D58'} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className='overview-cards p-3 h-100'>
            <h4 className='fs-5'>Monthly Revenue</h4>
            <div className='p-5 mt-3 thumbnail-box'>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={sampleRevenue}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="revenue" stroke="#F25C05" fill="#F25C05" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Metrics */}
      <div className='row g-4 mt-4 overview-cards ps-1 pe-1'>
        <h4 className='fs-5 mb-0'>Detailed Metrics</h4>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <div className='Analytics-card text-center p-3 pt-3 h-100'>
            <h4>8.4m</h4><p>Session Duration (avg)</p>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <div className='Analytics-card text-center p-3 pt-3 h-100'>
            <h4>127</h4><p>Users Online Now</p>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <div className='Analytics-card text-center p-3 pt-3 h-100'>
            <h4>89.2%</h4><p>User Retention (30d)</p>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <div className='Analytics-card text-center p-3 pt-3 h-100'>
            <h4>$18.50</h4><p>ARPU (Monthly)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
