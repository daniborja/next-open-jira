import type { NextApiRequest, NextApiResponse } from 'next';

import { db, EntryModel, SEED_DATA } from '@/api/db';

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (process.env.NODE_ENV === 'production')
    return res.status(401).json({ message: 'Cannot run SEED in Production' });

  // db
  await db.connect();

  await EntryModel.deleteMany();
  await EntryModel.insertMany(SEED_DATA.entries);

  await db.disconnect();

  res.status(200).json({ message: 'Successful' });
}
