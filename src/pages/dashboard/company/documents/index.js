/**
 * Companies documents
 * 
 */

import * as React from 'react';
import { useState } from 'react';
import { Grid, Box, Button } from '@mui/material';
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import MainCard from 'components/ui-component/cards/MainCard';
import Table from 'components/Table/Table';


// Table rows data
const data = [
    {
        sl_no:1,
        category: 'Legal Papers',
        title: 'Brokerage Contracts',
        file: (<Box
                    component="img"
                    sx={{
                        maxWidth: '80px',
                        maxHeight:"80px",
                        aspectRatio: '3/2',
                        objectFit: 'contain',
                        mixBlendMode: 'multiply'
                    }}
                    alt="Document file image"
                    src=""
                />)
    },
    {
        sl_no:2,
        category: 'Legal Papers',
        title: 'Brokerage Contracts',
        file: (<Box
                    component="img"
                    sx={{
                        maxWidth: '80px',
                        maxHeight:"80px",
                        aspectRatio: '3/2',
                        objectFit: 'contain',
                        mixBlendMode: 'multiply'
                    }}
                    alt="Document file image"
                    src=""
                />)
    },
    {
        sl_no:3,
        category: 'Legal Papers',
        title: 'Brokerage Contracts',
        file: (<Box
                    component="img"
                    sx={{
                        maxWidth: '80px',
                        maxHeight:"80px",
                        aspectRatio: '3/2',
                        objectFit: 'contain',
                        mixBlendMode: 'multiply'
                    }}
                    alt="Document file image"
                    src=""
                />)
    },
  ];
  
// Table header data
const ColumnHeaders = [
    {
        accessorKey: 'sl_no',
        header: 'SL.No'
    },
    {
        accessorKey: 'category',
        header: 'Catergory'
    },
    {
        accessorKey: 'title',
        header: 'Title'
    },
    {
        accessorKey: 'file',
        header: 'File',
    },
    {
        accessorKey: 'action',
        header: 'Action',
        Cell: ({ renderedCellValue, row }) => (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <Button variant="contained" color="primary">
                Download
              </Button>
              <Button variant="contained" color="primary">
                Remove
              </Button>
            </Box>
          )
    },
];


function Documents() {

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });

    return (
        <Page title="Documents">
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12} >
              <MainCard title="Document list">
                    <Table  
                      data={data}
                      columnHeaders={ColumnHeaders}
                      loading={false}
                      pagination={pagination}
                      setPagination={setPagination}
                      isFetching={false}
                      rowCount={data.length} 
                    />
              </MainCard>
            </Grid>
          </Grid>
        </Page>
      );
};

Documents.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
  };
  
  export default Documents;