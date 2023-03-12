import { EntryStatus } from '@/interfaces';

interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: EntryStatus;
  createdAt: number;
}

export const SEED_DATA: SeedData = {
  entries: [
    {
      description:
        'PENDING: Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.',
      status: EntryStatus.pending,
      createdAt: Date.now(),
    },
    {
      description:
        "IN PROGRESS: The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout.",
      status: EntryStatus.inProgress,
      createdAt: Date.now() - 1_000_000,
    },
    {
      description:
        'COMPLETED: Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text.',
      status: EntryStatus.completed,
      createdAt: Date.now() - 100_000,
    },
  ],
};
