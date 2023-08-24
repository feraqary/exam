import { Grid, Button, Card, CardActions, CardMedia, Box } from '@mui/material';
import { useState } from 'react';
import { downloadFile } from 'utils/download';
import ViewPicture from '../../../../../components/InputArea/information/view_picture';
import { useDeleteProjectDocMutation } from 'store/services/project/projectApi';
import Link from 'next/link';

const ViewDocuments = ({ document }) => {
  const documentFiles = document.file_url;
  const [viewFile, setViewFile] = useState(false);
  const [file, setFile] = useState(null);
  const [deleteDoc, result] = useDeleteProjectDocMutation();

  const validImagesExtension = ['png', 'jpg', 'jpeg'];

  const deleteDochandler = (id, fileName) => {
    const formData = new FormData();
    formData.append('id', id);
    formData.append('file_name', fileName);
    deleteDoc(formData);
  };

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
                          onClick={(e) => {
                            setViewFile(true);
                            setFile(e.target.src);
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
                      <Button size="medium" color="error" variant="contained" onClick={() => deleteDochandler(document.id, file)}>
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
