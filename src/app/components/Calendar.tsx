'use client';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

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

  const displayedDate = Array.isArray(selectedDate) ? selectedDate[0] : selectedDate;

  const dayEvents = findEvents(displayedDate);

  function tileContent({ date, view }: { date: Date; view: string }) {
    if (view === 'month') {
      const hasEvent = findEvents(date).length > 0;
      if (hasEvent) {
        return (
          <span className="inline-block mt-0.5 ml-0.5 w-2 h-2 rounded-full bg-primary" />
        );
      }
    }
    return null;
  }

  return (
    <div className="card bg-base-100 p-6 rounded-lg shadow-lg max-w-md mx-auto mb-8">
      <h2 className="card-title text-primary mb-4">Events Calendar</h2>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileContent={tileContent}
        className="rounded-lg shadow-inner"
      />
      <div className="mt-6">
        <h3 className="text-primary font-semibold">
          Selected Day: {displayedDate.toLocaleDateString()}
        </h3>
        {dayEvents.length > 0 ? (
          <div className="bg-base-200 rounded-md p-4 mt-3">
            <strong className="text-primary">{dayEvents[0].title}</strong>
            <p className="text-base-content mt-1">{dayEvents[0].description}</p>
          </div>
        ) : (
          <p className="text-base-content mt-3">No events for this day.</p>
        )}
      </div>
    </div>
  );
}

