'use client';

type BadgeType = 'hardware' | 'software' | 'organiser' | 'winner' | 'project';

const badgeConfig: Record<BadgeType, { label: string; color: string }> = {
  hardware: { label: 'Hardware', color: '#667eea' },
  software: { label: 'Software', color: '#764ba2' },
  organiser: { label: 'Organiser', color: '#38b2ac' },
  winner: { label: 'Winner', color: '#ed8936' },
  project: { label: 'Project', color: '#3182ce' }
};

interface BadgeProps {
  type: BadgeType;
}

export default function Badge({ type }: BadgeProps) {
  const badge = badgeConfig[type] || { label: 'Badge', color: '#718096' };

  return (
    <span
      style={{
        display: 'inline-block',
        background: badge.color,
        color: 'white',
        padding: '0.4em 0.9em',
        margin: '0 0.4em',
        fontSize: '0.95em',
        fontWeight: 500,
        borderRadius: '1em',
        boxShadow: '0 2px 6px rgba(102,126,234,0.15)'
      }}
    >
      {badge.label}
    </span>
  );
}

