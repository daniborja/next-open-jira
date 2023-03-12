import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { useUi } from '@/context/hooks';
import { useNavigateTo } from '@/shared/hooks';

export interface AlertDialogProps {
  title: string;
  description: string;
  mainBtnMsg: string;
  pathToNavigateAfterSuccess?: string;
  actionFn: () => void;
}

const AlertDialog: React.FC<AlertDialogProps> = ({
  title,
  description,
  actionFn,
  mainBtnMsg,
  pathToNavigateAfterSuccess,
}) => {
  const { isDialogOpen, setIsDialogOpen } = useUi();
  const { navigateToPath } = useNavigateTo();

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  const handleAgree = () => {
    actionFn();
    setIsDialogOpen(false);
    navigateToPath(pathToNavigateAfterSuccess || '/');
  };

  return (
    <div>
      <Dialog
        open={isDialogOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAgree} color="error" variant="contained">
            {mainBtnMsg}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
