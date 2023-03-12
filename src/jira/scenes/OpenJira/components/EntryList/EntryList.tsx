import { DragEvent, useMemo } from 'react';
import { List, Paper } from '@mui/material';

import { EntryCard } from './../';
import { useEntries, useUi } from '@/context/hooks';
import { Entry, EntryStatus } from '@/interfaces';
import styles from './EntryList.module.css';

export interface EntryListProps {
  status: EntryStatus;
}

const EntryList: React.FC<EntryListProps> = ({ status }) => {
  const { activeEntry, entries, updateEntry, setActiveEntry } = useEntries();
  const { isDragging, setIsDragging } = useUi();

  // memorized to change only when entries change, not when it is rerendered
  const entriesByStatus = useMemo(
    () => entries.filter(entry => entry.status === status),
    [entries, status]
  );

  const allowDrop = (e: DragEvent) => {
    e.preventDefault();
  };
  const onDropEntry = (_e: DragEvent) => {
    // // get data from DragEvent: get entryId
    // const id = e.dataTransfer.getData('text'); // text - draggable setData
    // const entryToUpd = entries.find(entry => entry._id === id)!;
    activeEntry.status = status;

    updateEntry(activeEntry);
    setIsDragging(false);
    setActiveEntry({} as Entry);
  };

  return (
    // drop

    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ''}
    >
      <Paper
        sx={{
          height: `${
            status === 'pending' ? 'calc(100vh - 270px)' : 'calc(100vh - 210px)'
          }`,
          // overflow: 'scroll',
          backgroundColor: 'transparent',
          p: '6px 15px',
        }}
      >
        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .3s' }}>
          {entriesByStatus.map(entry => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};

export default EntryList;
