// HonourList.tsx
'use client';
import Badge from './Badge';

const honours = [
  { name: 'Alex Hardware Lead', badges: ['hardware'] },
  { name: 'Morgan Code Champ', badges: ['software'] },
];

export default function HonourList() {
  return (
    <div>
      <h2>Honour List</h2>
      {honours.map(member => (
        <div key={member.name}>
          <span>{member.name}</span>
          {member.badges.map(b => <Badge key={b} type={b} />)}
        </div>
      ))}
    </div>
  );
}


