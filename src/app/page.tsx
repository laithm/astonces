'use client';

import Login from './Login';
import { AuthProvider, useAuth } from './AuthProvider';

import Calendar from './components/Calendar';
import HardwareRequestForm from './components/HardwareRequestForm';
import SupportForm from './components/SupportForm';
import HonourList from './components/HonourList';
import ProjectOfTerm from './components/ProjectOfTerm';
import CareerSupportForm from './components/CareerSupportForm';

export default function Home() {
  return (
    <AuthProvider>
      <MainContent />
    </AuthProvider>
  );
}

function MainContent() {
  const { loggedIn, login } = useAuth();

  if (!loggedIn) {
    return <Login onLogin={login} />;
  }

  return (
    <main className="container">
      <h1>Aston Computing and Electronics Society</h1>
      <Calendar />
      <HardwareRequestForm />
      <SupportForm />
      <HonourList />
      <ProjectOfTerm />
      <CareerSupportForm />
    </main>
  );
}

