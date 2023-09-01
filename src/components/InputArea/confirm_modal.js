import { Button, Grid, Typography } from '@mui/material';
import PopUp from './PopUp';
const ConfirmModal = ({ open, setOpen, title, action }) => {
  return (
    <>
      <PopUp opened={open} setOpen={setOpen} size={'sm'}>
        <Grid container xs={12} lg={12} justifyContent="center" alignItems="center">
          <Grid Item xs={12} justifyContent="center">
            <Typography variant="h3" textAlign="center">
              {title}
            </Typography>
          </Grid>
          <Grid
            Item
            sx={{
              display: 'flex',
              gap: '2rem',
              marginTop: '30px'
            }}
          >
            <Button variant="contained" onClick={action}>
              Yes
            </Button>
            <Button variant="outlined" onClick={() => setOpen(false)}>
              No
            </Button>
          </Grid>
        </Grid>
      </PopUp>
    </>
  );
};

export default ConfirmModal;
