'use client';
import Badge from './Badge';

const honours = [
  { name: 'Alex Hardware Lead', badges: ['hardware'] },
  { name: 'Morgan Code Champ', badges: ['software'] },
];

export default function HonourList() {
  return (
    <div className="card bg-base-100 rounded-xl p-6 shadow-lg max-w-lg mx-auto mt-8">
      <h2 className="card-title text-primary mb-6">Honour List</h2>
      <div className="flex flex-col gap-4">
        {honours.map(member => (
          <div key={member.name} className="flex items-center justify-between gap-4">
            <span className="font-semibold text-base-content">{member.name}</span>
            <div className="flex flex-wrap gap-2">
              {member.badges.map(b => <Badge key={b} type={b} />)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

