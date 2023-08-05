import * as React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Slide, IconButton, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { memo } from 'react';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PopUp = memo(({ title, setOpen, opened, children, size, fullScreen, actions }) => {
  const handleClose = () => setOpen(false);
  return (
    <>
      <Dialog fullWidth fullScreen={fullScreen} maxWidth={size} open={opened} onClose={handleClose} TransitionComponent={Transition}>
        <DialogActions sx={{ justifyContent: 'space-between' }}>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogActions>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{children}</DialogContent>
        <Grid item sx={{ padding: '10px 22px' }}>
          {actions}
        </Grid>
      </Dialog>
    </>
  );
});

export default PopUp;
