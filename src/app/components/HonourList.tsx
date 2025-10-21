'use client';
import Badge from './Badge';

// If using TypeScript, import or declare BadgeType:
// import type { BadgeType } from './Badge';

const honours = [
  { name: 'Laith Hardware Lead', badges: ['hardware'] /* as BadgeType[] */ },
  { name: 'Bilal Code Champ', badges: ['software'] /* as BadgeType[] */ },
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
              {member.badges.map(b => <Badge key={b} type={b as any} />)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

