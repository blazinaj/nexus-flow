import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoadingSpinner from '../components/common/LoadingSpinner';

// Lazy loaded components
const Dashboard = lazy(() => import('../pages/Dashboard'));
const PartsLibrary = lazy(() => import('../pages/PartsLibrary'));
const PartDetail = lazy(() => import('../pages/PartDetail'));
const Inventory = lazy(() => import('../pages/Inventory'));
const EBoms = lazy(() => import('../pages/EBoms'));
const WorkPlans = lazy(() => import('../pages/WorkPlans'));
const Workflows = lazy(() => import('../pages/Workflows'));
const Teams = lazy(() => import('../pages/Teams'));
const Settings = lazy(() => import('../pages/Settings'));
const NotFound = lazy(() => import('../pages/NotFound'));

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Navigate to="/parts\" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/parts" element={<PartsLibrary />} />
        <Route path="/parts/:id" element={<PartDetail />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/eboms" element={<EBoms />} />
        <Route path="/work-plans" element={<WorkPlans />} />
        <Route path="/workflows" element={<Workflows />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;