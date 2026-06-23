export interface ExperienceItem {
  key: string;
  type: 'work' | 'education';
  bulletCount?: number;
}

export const experience: ExperienceItem[] = [
  { key: 'job1', type: 'work', bulletCount: 5 },
  { key: 'job2', type: 'work', bulletCount: 3 },
  { key: 'edu', type: 'education' },
];
