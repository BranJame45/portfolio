export interface ExperienceItem {
  key: string;
  type: 'work' | 'education';
}

export const experience: ExperienceItem[] = [
  { key: 'job1', type: 'work' },
  { key: 'job2', type: 'work' },
  { key: 'edu', type: 'education' },
];
