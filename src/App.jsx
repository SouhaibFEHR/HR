
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Layout from '@/components/Layout';
import Dashboard from '@/pages/Dashboard';
import Recruiting from '@/pages/Recruiting';
import Training from '@/pages/Training';
import Analytics from '@/pages/Analytics';
import Performance from '@/pages/Performance';
import Onboarding from '@/pages/Onboarding';
import Pipeline from '@/pages/Pipeline';
import Roles from '@/pages/Roles';
import CandidatePortal from '@/pages/CandidatePortal';

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-background text-foreground overflow-x-hidden">
        <Routes>
          <Route path="/candidate-portal" element={<CandidatePortal />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="recruiting" element={<Recruiting />} />
            <Route path="training" element={<Training />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="performance" element={<Performance />} />
            <Route path="onboarding" element={<Onboarding />} />
            <Route path="pipeline" element={<Pipeline />} />
            <Route path="roles" element={<Roles />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
