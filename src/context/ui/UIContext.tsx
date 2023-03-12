import { createContext } from 'react';

interface UIContextProps {
  isSidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
  isDialogOpen: boolean;

  // methods
  openSideMenu: () => void;
  closeSideMenu: () => void;
  setIsAddingEntry: (isAdding: boolean) => void;
  toggleIsAddingEntry: () => void;
  setIsDragging: (isDragging: boolean) => void;
  toggleIsDragging: () => void;
  setIsDialogOpen: (isDialogOpen: boolean) => void;
}

export const UIContext = createContext({} as UIContextProps);
