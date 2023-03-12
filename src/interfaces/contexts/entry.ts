export interface Entry {
  _id: string;
  description: string;
  createdAt: number;
  status: EntryStatus;
}

export enum EntryStatus {
  pending = 'pending',
  inProgress = 'in-progress',
  completed = 'completed',
}
