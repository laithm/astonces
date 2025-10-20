'use client';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// Events data
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

const events = [
  {
    date: tomorrow.toDateString(),
    title: 'Website Show Day',
    description: 'Official demonstration of the new Aston Computing and Electronics Society website!'
  }
];

function findEvents(date: Date) {
  const dateString = date.toDateString();
  return events.filter(e => e.date === dateString);
}

export default function InteractiveCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | Date[]>(new Date());

  const displayedDate =
    Array.isArray(selectedDate) ? selectedDate[0] : selectedDate;

  const dayEvents = findEvents(displayedDate);

  // Custom tile content to mark event days
  function tileContent({ date, view }: { date: Date; view: string }) {
    if (view === 'month') {
      const hasEvent = findEvents(date).length > 0;
      if (hasEvent) {
        return (
          <span style={{
            display: 'inline-block',
            margin: '2px 0 0 2px',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#667eea'
          }} />
        );
      }
    }
    return null;
  }

  return (
    <div style={{
      maxWidth: 450,
      margin: '0 auto 2rem auto',
      background: 'rgba(255,255,255,0.9)',
      borderRadius: 12,
      padding: '1.5rem',
      boxShadow: '0 8px 24px rgba(102,126,234,0.1)'
    }}>
      <h2 style={{ marginBottom: '1rem', color: '#667eea' }}>Events Calendar</h2>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileContent={tileContent}
      />
      <div style={{ marginTop: '1.5rem' }}>
        <h3 style={{ color: '#4c51bf', margin: 0 }}>
          Selected Day: {displayedDate.toLocaleDateString()}
        </h3>
        {dayEvents.length > 0 ? (
          <div style={{
            background: '#f3f3fc',
            borderRadius: '10px',
            padding: '0.75rem',
            marginTop: '1rem'
          }}>
            <strong style={{ color: '#667eea' }}>{dayEvents[0].title}</strong>
            <p style={{ marginTop: '0.5rem', color: '#4a5568' }}>{dayEvents[0].description}</p>
          </div>
        ) : (
          <p style={{ color: '#718096', marginTop: '1rem' }}>No events for this day.</p>
        )}
      </div>
    </div>
  );
}

