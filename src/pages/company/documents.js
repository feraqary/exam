import Image from 'next/image';
import BlockIcon from '@mui/icons-material/Block';
import DeleteIcon from '@mui/icons-material/Delete';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PreviewIcon from '@mui/icons-material/Preview';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';
import { AqaryButton } from 'components/Elements/AqaryButton';
import { useEffect } from 'react';
import { getLocalCompanies } from 'store/slices/company-section/action/company';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// import { Dialog, DialogContent, DialogActions } from '@mui/material';
// import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
import {
  Grid,
  Box,
  Button,
  Dialog,
  DialogActions,
  Input,
  DialogContent,
  TextField,
  DialogContentText,
  DialogTitle,
  Slide
} from '@mui/material';


import { updateCompanyDoc, getCompanyDocs } from 'store/slices/company-section/action/company';
import { BedroomChildRounded } from '@mui/icons-material';
import FileUpload from 'components/InputArea/FileUpload';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PopUp = ({ setOpen, opened, children }) => {
  const handleClose = () => setOpen(false);
  return (
    <>
      <Dialog maxWidth={'xl'} open={opened} onClose={handleClose} TransitionComponent={Transition}>
        <DialogActions sx={{ justifyContent: 'flex-start' }} onClick={handleClose}>
          <IconButton>
            <CloseIcon />
          </IconButton>
        </DialogActions>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </>
  );
};

const Documents = ({ comp, id }) => {
  const dispatch = useDispatch();
  const [logo, setLogo] = useState(null);
  const [commercial, setCommercial] = useState(null);
  const [coverImg, setCoverImage] = useState(null);
  const [vat, setVat] = useState(null);
  const [rera, setRera] = useState(null);

  const headers = [
    {
      accessorKey: 'logo_url',
      header: 'Document Logo',
      Cell: ({ renderedCellValue, row }) => {
        const [opened, setOpened] = useState(false);

        const dispatch = useDispatch();

        const handleUpdate1 = () => {
          const formData = new FormData();
          formData.append('company_type', comp);
          formData.append('id', id);
          formData.append('logo_url', logo);
          formData.append('commercial_license_file_url', '');
          formData.append('cover_image_url', '');
          formData.append('vat_file_url', '');
          dispatch(updateCompanyDoc(formData));
        };

        const handleDownload = async (imageUrl) => {
          const link = document.createElement('a');
          link.href = imageUrl;
          link.download = 'image.jpg'; // Set the desired filename for the downloaded image
          link.click();
        };

        return (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <Image src={`http://20.203.31.58/upload/${row.original.logo_url}`} alt="company logo" width={60} height={30} />
            <Button
              color="primary"
              variant="contained"
              onClick={() => handleDownload(`http://20.203.31.58/upload/${row.original.logo_url}`)}
            >
              Download
            </Button>
            <Button
              color="primary"
              variant="outlined"
              onClick={() => {
                setOpened(true);
              }}
            >
              Edit
            </Button>

            <PopUp setOpen={setOpened} opened={opened}>
              <Grid item>
                <Input
                  variant="outlined"
                  type="file"
                  onChange={(e) => {
                    setLogo(e.target.files[0]);
                  }}
                />
                <Button color="primary" onClick={handleUpdate1} variant="outlined" sx={{ padding: '12px', marginRight: '5px' }}>
                  Update
                </Button>
              </Grid>
            </PopUp>
          </Box>
        );
      }
    },
    {
      accessorKey: 'commercial_license_file_url',
      header: ' Commercial License File ',
      Cell: ({ renderedCellValue, row }) => {
        const [opened, setOpened] = useState(false);

        const dispatch = useDispatch();

        const handleUpdate2 = () => {
          const formData = new FormData();
          formData.append('company_type', comp);
          formData.append('id', id);
          formData.append('commercial_license_file_url', commercial);
          dispatch(updateCompanyDoc(formData));
        };

        const handleDownload = async (imageUrl) => {
          const link = document.createElement('a');
          link.href = imageUrl;
          link.download = 'image.jpg'; // Set the desired filename for the downloaded image
          link.click();
        };

        return (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <Image
              src={`http://20.203.31.58/upload/${row.original.commercial_license_file_url}`}
              alt="company logo"
              width={60}
              height={30}
            />
            <Button
              color="primary"
              variant="contained"
              onClick={() => handleDownload(`http://20.203.31.58/upload/${row.original.commercial_license_file_url}`)}
            >
              Download
            </Button>
            <Button
              color="primary"
              variant="outlined"
              onClick={() => {
                setOpened(true);
              }}
            >
              Edit
            </Button>

            <PopUp setOpen={setOpened} opened={opened}>
              <Grid item>
                <Input
                  variant="outlined"
                  type="file"
                  onChange={(e) => {
                    setCommercial(e.target.files[0]);
                  }}
                />
                <Button color="primary" onClick={handleUpdate2} variant="outlined" sx={{ padding: '12px', marginRight: '5px' }}>
                  Update
                </Button>
              </Grid>
            </PopUp>
          </Box>
        );
      }
    },
    {
      accessorKey: 'cover_image_url',
      header: 'Cover Image',
      Cell: ({ renderedCellValue, row }) => {
        const [opened, setOpened] = useState(false);

        const dispatch = useDispatch();

        const handleUpdate3 = () => {
          const formData = new FormData();
          formData.append('company_type', comp);
          formData.append('id', id);
          formData.append('cover_image_url', coverImg);

          dispatch(updateCompanyDoc(formData));
        };

        const handleDownload = async (imageUrl) => {
          const link = document.createElement('a');
          link.href = imageUrl;
          link.download = 'image.jpg'; // Set the desired filename for the downloaded image
          link.click();
        };

        return (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <Image src={`http://20.203.31.58/upload/${row.original.cover_image_url}`} alt="company logo" width={60} height={30} />
            <Button
              color="primary"
              variant="contained"
              onClick={() => handleDownload(`http://20.203.31.58/upload/${row.original.cover_image_url}`)}
            >
              Download
            </Button>
            <Button
              color="primary"
              variant="outlined"
              onClick={() => {
                setOpened(true);
              }}
            >
              Edit
            </Button>

            <PopUp setOpen={setOpened} opened={opened}>
              <Grid item>
                <Input
                  variant="outlined"
                  type="file"
                  onChange={(e) => {
                    setCoverImage(e.target.files[0]);
                  }}
                />
                <Button color="primary" onClick={handleUpdate3} variant="outlined" sx={{ padding: '12px', marginRight: '5px' }}>
                  Update
                </Button>
              </Grid>
            </PopUp>
          </Box>
        );
      }
    },
    {
      accessorKey: 'vat_file_url',
      header: ' VAT File',
      Cell: ({ renderedCellValue, row }) => {
        const [opened, setOpened] = useState(false);

        const dispatch = useDispatch();

        const handleUpdate4 = () => {
          const formData = new FormData();
          formData.append('company_type', comp);
          formData.append('id', id);
          formData.append('vat_file_url', vat);

          dispatch(updateCompanyDoc(formData));
        };

        const handleDownload = async (imageUrl) => {
          const link = document.createElement('a');
          link.href = imageUrl;
          link.download = 'image.jpg'; // Set the desired filename for the downloaded image
          link.click();
        };

        return (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <Image src={`http://20.203.31.58/upload/${row.original.vat_file_url}`} alt="company logo" width={60} height={30} />
            <Button
              color="primary"
              variant="contained"
              onClick={() => handleDownload(`http://20.203.31.58/upload/${row.original.vat_file_url}`)}
            >
              Download
            </Button>
            <Button
              color="primary"
              variant="outlined"
              onClick={() => {
                setOpened(true);
              }}
            >
              Edit
            </Button>

            <PopUp setOpen={setOpened} opened={opened}>
              <Grid item>
                <Input
                  variant="outlined"
                  type="file"
                  onChange={(e) => {
                    setVat(e.target.files[0]);
                  }}
                />
                <Button color="primary" onClick={handleUpdate4} variant="outlined" sx={{ padding: '12px', marginRight: '5px' }}>
                  Update
                </Button>
              </Grid>
            </PopUp>
          </Box>
        );
      }
    },
    {
      accessorKey: 'vat_file_url',
      header: ' VAT File',
      Cell: ({ renderedCellValue, row }) => {
        const [opened, setOpened] = useState(false);

        const dispatch = useDispatch();

        const handleUpdate4 = () => {
          const formData = new FormData();
          formData.append('company_type', comp);
          formData.append('id', id);
          formData.append('vat_file_url', vat);

          dispatch(updateCompanyDoc(formData));
        };

        const handleDownload = async (imageUrl) => {
          const link = document.createElement('a');
          link.href = imageUrl;
          link.download = 'image.jpg'; // Set the desired filename for the downloaded image
          link.click();
        };

        return (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <Image src={`http://20.203.31.58/upload/${row.original.vat_file_url}`} alt="company logo" width={60} height={30} />
            <Button
              color="primary"
              variant="contained"
              onClick={() => handleDownload(`http://20.203.31.58/upload/${row.original.vat_file_url}`)}
            >
              Download
            </Button>
            <Button
              color="primary"
              variant="outlined"
              onClick={() => {
                setOpened(true);
              }}
            >
              Edit
            </Button>

            <PopUp setOpen={setOpened} opened={opened}>
              <Grid item>
                <Input
                  variant="outlined"
                  type="file"
                  onChange={(e) => {
                    setVat(e.target.files[0]);
                  }}
                />
                <Button color="primary" onClick={handleUpdate4} variant="outlined" sx={{ padding: '12px', marginRight: '5px' }}>
                  Update
                </Button>
              </Grid>
            </PopUp>
          </Box>
        );
      }
    }
  ];

  if (comp === 2) {
    headers.push({
      accessorKey: 'rera_file_url',
      header: ' RERA',
      Cell: ({ renderedCellValue, row }) => {
        const [opened, setOpened] = useState(false);

        const dispatch = useDispatch();

        const handleUpdate5 = () => {
          const formData = new FormData();
          formData.append('company_type', comp);
          formData.append('id', id);
          formData.append('rera_file_url', rera);

          dispatch(updateCompanyDoc(formData));
        };

        const handleDownload = async (imageUrl) => {
          const link = document.createElement('a');
          link.href = imageUrl;
          link.download = 'image.jpg'; // Set the desired filename for the downloaded image
          link.click();
        };

        return (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <Image src={`http://20.203.31.58/upload/${row.original.rera_file_url}`} alt="company logo" width={60} height={30} />
            <Button
              color="primary"
              variant="contained"
              onClick={() => handleDownload(`http://20.203.31.58/upload/${row.original.rera_file_url}`)}
            >
              Download
            </Button>
            <Button
              color="primary"
              variant="outlined"
              onClick={() => {
                setOpened(true);
              }}
            >
              Edit
            </Button>

            <PopUp setOpen={setOpened} opened={opened}>
              <Grid item>
                <Input
                  variant="outlined"
                  type="file"
                  onChange={(e) => {
                    setRera(e.target.files[0]);
                  }}
                />
                <Button color="primary" onClick={handleUpdate5} variant="outlined" sx={{ padding: '12px', marginRight: '5px' }}>
                  Update
                </Button>
              </Grid>
            </PopUp>
          </Box>
        );
      }
    });
  }

  const { loading, error, companyDocs } = useSelector((state) => state.companies);
  useEffect(() => {
    dispatch(getCompanyDocs({ companyType: comp, id: id }));
  }, []);

  return (
    <Page title="Local Company List">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={headers} data={companyDocs} loading={loading} />
        </Grid>
        <Grid item xs={12} justifyContent="flex-end" sx={{ justifyContent: 'flex-end', display: 'flex' }}>
          <Button
            onClick={() => {
              window.location.reload();
            }}
            color="primary"
            variant="outlined"
          >
            Update
          </Button>
        </Grid>
      </Grid>
    </Page>
  );
};

Documents.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Documents;
