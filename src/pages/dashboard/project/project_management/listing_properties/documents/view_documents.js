import { Grid, Button, Card, CardActions, CardMedia, Box } from '@mui/material';
import { useState } from 'react';
import { downloadFile } from 'utils/download';
import ViewPicture from 'components/InputArea/information/view_picture';
import { useDeleteProjectPropertyDocMutation } from 'store/services/project/projectApi';
import Link from 'next/link';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastSuccess, ToastError } from 'utils/toast';

const ViewDocuments = ({ document, type }) => {
  const documentFiles = document.file_url;
  const [viewFile, setViewFile] = useState(false);
  const [file, setFile] = useState(null);
  const [params, setParams] = useState({
    id: null,
    name: null
  });

  const [deleteDoc, result] = useDeleteProjectPropertyDocMutation();
console.log()
  //update toast
  useEffect(() => {
    if (result.isSuccess) {
      ToastSuccess('Deleted successfully');
    }
  }, [result.isSuccess]);
  useEffect(() => {
    if (result.isError) {
      const { data } = result.error;
      ToastError(data.error);
    }
  }, [result.isError]);

  const validImagesExtension = ['png', 'jpg', 'jpeg'];

  console.log('type: ', type);
  return (
    <>
      <Grid container direction="row" xs={12} lg={12} justifyContent="center" alignItems="center">
        {documentFiles.length > 0
          ? documentFiles.map((file) => {
              const fileExtension = file.split('.').pop();
              return (
                <>
                  <Card id={file} sx={{ maxWidth: 200, border: 1, borderColor: 'primary.main', m: 2 }}>
                    {validImagesExtension.includes(fileExtension) ? (
                      <Button sx={{ p: 0 }}>
                        <CardMedia
                          component="img"
                          alt="image file"
                          sx={{ width: 200, height: 150 }}
                          image={`http://20.203.31.58/upload/${file}`}
                          onClick={() => {
                            setViewFile(true);
                            setFile(file);
                          }}
                        />
                      </Button>
                    ) : (
                      <Link href={`http://20.203.31.58/upload/${file}`} target="blank" sx={{ p: 0 }}>
                        <CardMedia
                          component="img"
                          alt="document file"
                          sx={{ width: 200, height: 150 }}
                          image={`/assets/document-icon.png`}
                        />
                      </Link>
                    )}
                    <CardActions sx={{ p: 1 }}>
                      <Button size="medium" variant="contained" onClick={() => downloadFile(file)}>
                        Download
                      </Button>
                      <Button
                        size="medium"
                        color="error"
                        variant="contained"
                        onClick={() =>
                          deleteDoc({
                            id: document.id,
                            name: file
                          })
                        }
                      >
                        Remove
                      </Button>
                    </CardActions>
                  </Card>
                </>
              );
            })
          : null}
        <ViewPicture viewFile={viewFile} setViewFile={setViewFile} image={file} />
      </Grid>
    </>
  );
};

export default ViewDocuments;
