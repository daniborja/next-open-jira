import { useContext } from 'react';

import { EntriesContext } from '@/context/entries';

export const useEntries = () => useContext(EntriesContext);
