import { useMemo, useState } from 'react';
import { GetServerSideProps } from 'next';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import {
  Button,
  capitalize,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import { MainLayout } from '@/layouts';
import { getEntryByID } from '@/api/db';
import { useEntries, useUi } from '@/context/hooks';
import { dateFn } from '@/shared/utils';
import { useNavigateTo } from '@/shared/hooks';
import { Entry, EntryStatus } from '@/interfaces';
import { AlertDialog } from '@/shared/components';

const validStatus: EntryStatus[] = [
  EntryStatus.pending,
  EntryStatus.inProgress,
  EntryStatus.completed,
];

interface EPState {
  inputValue: string;
  imputTouched: boolean;
  status: EntryStatus;
}
interface EntryPageProps {
  entry: Entry;
}

const EntryPage = ({ entry }: EntryPageProps) => {
  const { updateEntry, deleteEntry } = useEntries();
  const { setIsDialogOpen } = useUi();
  const [inputValue, setinputValue] = useState<EPState['inputValue']>(
    entry.description
  );
  const [status, setStatus] = useState<EPState['status']>(entry.status);
  const [touched, setTouched] = useState<EPState['imputTouched']>(false);
  const { navigateToPath } = useNavigateTo();

  const isNotValid = useMemo(
    () => inputValue.length <= 0 && touched,
    [inputValue.length, touched]
  );

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setinputValue(e.target.value);
  };

  const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value as EntryStatus);
  };

  const onSave = () => {
    if (!inputValue.trim()) return;

    updateEntry({ ...entry, description: inputValue.trim(), status }, true);
    navigateToPath('/');
  };

  const onDelete = () => {
    setIsDialogOpen(true);
  };

  return (
    <MainLayout title={entry.description.substring(0, 20) + '....'}>
      <Grid container justifyContent="center" sx={{ mt: 2 }}>
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          sx={{
            p: '4px 8px 12px 8px',
            backgroundColor: '#1e2124',
            borderRadius: '4px',
          }}
        >
          <CardHeader
            title="Entry: "
            subheader={`Created ${dateFn.getFormatDistanceToNow(
              entry.createdAt
            )}`}
          />

          <CardContent>
            <TextField
              sx={{ mt: 2, mb: 1 }}
              fullWidth
              placeholder="New entry"
              autoFocus
              multiline
              label="New entry"
              //
              value={inputValue}
              onChange={onInputChange}
              // err
              error={isNotValid}
              onBlur={() => setTouched(true)}
              helperText={isNotValid && 'Description is required'}
            />

            <FormControl>
              <FormLabel>Status:</FormLabel>
              <RadioGroup row value={status} onChange={onStatusChange}>
                {validStatus.map(opt => (
                  <FormControlLabel
                    key={opt}
                    value={opt}
                    control={<Radio />}
                    label={capitalize(opt)}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </CardContent>

          <CardActions>
            <Button
              startIcon={<SaveOutlinedIcon />}
              variant="contained"
              fullWidth
              onClick={onSave}
              disabled={!inputValue.length}
            >
              Save
            </Button>
          </CardActions>
        </Grid>
      </Grid>

      <IconButton
        onClick={onDelete}
        sx={{
          position: 'fixed',
          bottom: 30,
          right: 30,
          backgroundColor: 'error.dark', // without useTheme()
        }}
      >
        <DeleteOutlineOutlinedIcon />
      </IconButton>

      <AlertDialog
        title="You&rsquo;re about to delete this entry"
        description="Some caution message"
        mainBtnMsg="Delete"
        actionFn={() => deleteEntry(entry)}
      />
    </MainLayout>
  );
};

export default EntryPage;

/* 




*/

// // SSR: it runs only in server side
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // console.log(ctx.params);
  const { id } = params as { id: string };
  const entry = await getEntryByID(id);
  if (!entry)
    return {
      redirect: {
        destination: '/',

        // page exist, allow indexing by google bots
        permanent: false,
      },
    };

  return {
    // props: { entry: { ...entry, _id: entry._id.toString() } }, // are sent to page FC
    props: { entry }, // are sent to page FC
  };
};
