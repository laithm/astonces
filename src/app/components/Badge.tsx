'use client';

type BadgeType = 'hardware' | 'software' | 'organiser' | 'winner' | 'project';

const badgeClassMap: Record<BadgeType, string> = {
  hardware: 'badge-primary',
  software: 'badge-secondary',
  organiser: 'badge-accent',
  winner: 'badge-warning',
  project: 'badge-info',
};

interface BadgeProps {
  type: BadgeType;
}

export default function Badge({ type }: BadgeProps) {
  const badgeClass = badgeClassMap[type] || 'badge';

  return (
    <span className={`badge ${badgeClass} rounded-full px-3 py-1 text-white font-semibold shadow-md`}>
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </span>
  );
}

