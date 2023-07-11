import * as React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Slide, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PopUp = ({ title, setOpen, opened, children, size, fullScreen }) => {
  const handleClose = () => setOpen(false);
  return (
    <>
      <Dialog fullScreen={fullScreen} maxWidth={size} open={opened}  onClose={handleClose} TransitionComponent={Transition}>
        <DialogActions sx={{ justifyContent: 'flex-start' }} onClick={handleClose}>
          <IconButton>
            <CloseIcon />
          </IconButton>
        </DialogActions>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </>
  );
};

export default PopUp;
