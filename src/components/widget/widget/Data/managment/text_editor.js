import { Grid, createTheme, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import {ThemeProvider } from '@mui/material/styles'
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';



// material-ui
import { useTheme } from '@mui/material/styles';


// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import SecondaryAction from 'components/ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// assets
import LinkIcon from '@mui/icons-material/Link';



// third party
const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false
});


const ReactQuillDemo = () => {
  const [text, setText] = useState(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  );
  const handleChange = (value) => {
    setText(value);
  };
  return <ReactQuill value={text} onChange={handleChange} />;
};



const TextEditor = () => {
  const theme = useTheme();
  
  return (

    <>
      <Stack
        spacing={gridSpacing}
        sx={{
          '& .quill': {
            bgcolor: theme.palette.mode === 'dark' ? 'dark.main' : 'grey.50',
            borderRadius: '12px',
            '& .ql-toolbar': {
              bgcolor: theme.palette.mode === 'dark' ? 'dark.light' : 'grey.100',
              borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.light + 20 : 'primary.light',
              borderTopLeftRadius: '12px',
              borderTopRightRadius: '12px'
            },
            '& .ql-container': {
              borderColor: theme.palette.mode === 'dark' ? `${theme.palette.dark.light + 20} !important` : 'primary.light',
              borderBottomLeftRadius: '12px',
              borderBottomRightRadius: '12px',
              '& .ql-editor': {
                minHeight: 135
              }
            }
          }
        }}
      >
        <ReactQuillDemo />
      </Stack>
    </>
  );
};

export default TextEditor;
