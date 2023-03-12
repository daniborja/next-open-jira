import { UIState } from './';

type UIAction =
  | { type: UIActionType.openSidebar }
  | { type: UIActionType.closeSidebar }
  | { type: UIActionType.setIsAddingEntry; payload: boolean }
  | { type: UIActionType.setIsDragging; payload: boolean }
  | { type: UIActionType.setIsDialogOpen; payload: boolean };

export enum UIActionType {
  openSidebar = '[UI] - Open Sidebar',
  closeSidebar = '[UI] - Close Sidebar',
  setIsAddingEntry = '[UI] - Set is adding entry',
  setIsDragging = '[UI] - Set is dragging',
  setIsDialogOpen = '[UI] - Set is dialog open',
}

export const uiReducer = (state: UIState, action: UIAction): UIState => {
  switch (action.type) {
    case UIActionType.openSidebar:
      return { ...state, isSidemenuOpen: true };
    case UIActionType.closeSidebar:
      return { ...state, isSidemenuOpen: false };

    case UIActionType.setIsAddingEntry:
      return { ...state, isAddingEntry: action.payload };

    case UIActionType.setIsDragging:
      return { ...state, isDragging: action.payload };

    case UIActionType.setIsDialogOpen:
      return { ...state, isDialogOpen: action.payload };

    default:
      return state;
  }
};
