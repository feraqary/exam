import { Grid } from '@mui/material';
import PopUp from '../PopUp';
import Image from 'next/image';
const ViewPicture = ({ viewFile, setViewFile, image }) => {
  return (
    <>
      <PopUp opened={viewFile} setOpen={setViewFile} size={'lg'}>
        <Grid container xs={12} lg={12} sx={{ height: '80vh', width: '100vh' }} justifyContent="center" alignContent="center">
          <Image
            src={image}
            width={100}
            height={100}
            unoptimized
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </Grid>
      </PopUp>
    </>
  );
};

export default ViewPicture;
