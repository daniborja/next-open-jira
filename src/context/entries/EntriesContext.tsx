import { createContext } from 'react';

import { Entry } from '@/interfaces';

interface EntriesContextProps {
  entries: Entry[];
  activeEntry: Entry;

  // methods
  addNewEntry: (description: string) => void;
  setActiveEntry: (entry: Entry) => void;
  updateEntry: (entry: Entry, showSnackbar?: boolean) => void;
  deleteEntry: (entry: Entry) => void;
}

export const EntriesContext = createContext({} as EntriesContextProps);
