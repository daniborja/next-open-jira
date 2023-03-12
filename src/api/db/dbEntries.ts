import { isValidObjectId } from 'mongoose';
import { db, EntryModel, IEntryModel } from '.';

export const getEntryByID = async (id: string): Promise<IEntryModel | null> => {
  if (!isValidObjectId(id)) return null;

  await db.connect();

  const entry = await EntryModel.findById(id).lean(); // lean=less info/opts

  await db.disconnect();

  return JSON.parse(JSON.stringify(entry));
};
