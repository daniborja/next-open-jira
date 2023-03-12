import { ChangeEvent, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';

import { useEntries, useUi } from '@/context/hooks';

export interface NewEntryProps {}

interface NEState {
  // addTaskForm: boolean;
  inputValues: string;
  imputTouched: boolean;
}

const NewEntry: React.FC<NewEntryProps> = () => {
  // const [isAdding, setIsAdding] = useState<NEState['addTaskForm']>(false);
  const [inputValue, setInputValue] = useState<NEState['inputValues']>('');
  const [touched, setTouched] = useState<NEState['imputTouched']>(false);

  const { addNewEntry } = useEntries();
  const { isAddingEntry, toggleIsAddingEntry } = useUi();

  const onTextFieldChanges = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const toggleAdding = () => {
    toggleIsAddingEntry();
    setTouched(false);
    setInputValue('');
  };

  const onSave = () => {
    if (!inputValue.trim().length) return;

    addNewEntry(inputValue.trim());
    toggleAdding();
  };

  return (
    <Box sx={{ mb: 3, px: '2' }}>
      {isAddingEntry ? (
        <>
          <TextField
            fullWidth
            sx={{ mt: 2, mb: 1 }}
            placeholder="New entry"
            autoFocus
            multiline
            label="New entry"
            //
            error={touched && !inputValue}
            helperText={touched && !inputValue.length && 'Enter a value'}
            onBlur={() => setTouched(true)}
            //
            value={inputValue}
            onChange={onTextFieldChanges}
          />

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Button onClick={toggleAdding} variant="text">
              Cancel
            </Button>

            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveOutlinedIcon />}
              onClick={onSave}
            >
              Save
            </Button>
          </Box>
        </>
      ) : (
        <Button
          onClick={toggleAdding}
          startIcon={<AddIcon />}
          fullWidth
          variant="outlined"
        >
          Add Task
        </Button>
      )}
    </Box>
  );
};

export default NewEntry;
