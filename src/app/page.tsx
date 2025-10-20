'use client';

import Login from './Login';
import { AuthProvider, useAuth } from './AuthProvider';

import Header from './components/Header';
import Calendar from './components/Calendar';
import HardwareRequestForm from './components/HardwareRequestForm';
import SupportForm from './components/SupportForm';
import HonourList from './components/HonourList';
import ProjectOfTerm from './components/ProjectOfTerm';
import CareerSupportForm from './components/CareerSupportForm';
import FAQSection from './components/FAQSection';

const sections = [
  'Calendar',
  'Hardware Request',
  'Support',
  'Honour List',
  'Project of the Term',
  'Career Support',
  'FAQ'
];

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
    <div>
      <Header sections={sections} />
      <main>
        <section id="calendar"><Calendar /></section>
        <section id="hardware-request"><HardwareRequestForm /></section>
        <section id="support"><SupportForm /></section>
        <section id="honour-list"><HonourList /></section>
        <section id="project-of-the-term"><ProjectOfTerm /></section>
        <section id="career-support"><CareerSupportForm /></section>
        <section id="faq"><FAQSection /></section>
      </main>
    </div>
  );
}

