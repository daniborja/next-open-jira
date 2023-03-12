import { Card, CardContent, CardHeader, Grid } from '@mui/material';

import { EntryList, NewEntry } from './components';
import { EntryStatus } from '@/interfaces';

const OpenJira = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <Card sx={{ height: 'calc(100vh - 100px)' }}>
          <CardHeader title="Pending" />

          <CardContent>
            <NewEntry />

            <EntryList status={EntryStatus.pending} />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Card sx={{ height: 'calc(100vh - 100px)' }}>
          <CardHeader title="In Progress" />

          <CardContent>
            <EntryList status={EntryStatus.inProgress} />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Card sx={{ height: 'calc(100vh - 100px)' }}>
          <CardHeader title="Completed" />

          <CardContent>
            <EntryList status={EntryStatus.completed} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default OpenJira;
