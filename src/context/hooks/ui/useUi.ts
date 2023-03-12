import { useContext } from 'react';

import { UIContext } from '@/context/ui';

export const useUi = () => useContext(UIContext);
