import { DragEvent } from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';

import { useEntries, useUi } from '@/context/hooks';
import { dateFn } from '@/shared/utils';
import { useNavigateTo } from '@/shared/hooks';
import { Entry } from '@/interfaces';

export interface EntryCardProps {
  entry: Entry;
}

const EntryCard: React.FC<EntryCardProps> = ({ entry }) => {
  const { setIsDragging } = useUi();
  const { setActiveEntry } = useEntries();
  const { navigateToPath } = useNavigateTo();

  const onDragStart = (e: DragEvent) => {
    e.dataTransfer.setData('text', entry._id);
    setIsDragging(true);
    setActiveEntry(entry);
  };

  const onDragEnd = () => {
    setIsDragging(false);
    setActiveEntry({} as Entry);
  };

  const handleClick = () => {
    navigateToPath(`/entries/${entry._id}`);
  };

  return (
    <Card
      onClick={handleClick}
      sx={{ mb: 1 }}
      // drag events
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>
            {entry.description}
          </Typography>
        </CardContent>

        <CardActions sx={{ display: 'flex', justifyContent: 'end', pr: 2 }}>
          <Typography variant="body2">
            {dateFn.getFormatDistanceToNow(entry.createdAt)}
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default EntryCard;
