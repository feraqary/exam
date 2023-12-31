// material-ui
import { Box, Button, Grid, Typography } from '@mui/material';

// project imports
import Tooltip from '@mui/material/Tooltip';
import Container from 'components/Elements/Container';
import PopUp from 'components/InputArea/PopUp';
import ViewInformation, { Item } from 'components/InputArea/information/view_information';
import Table from 'components/Table/Table';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import Layout from 'layout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { gridSpacing } from 'store/constant';
import { useGetProjectByIdQuery, useGetPropertyByProjectIdQuery } from 'store/services/project/projectApi';
// ==============================|| Manage International Projects ||============================== //

const ListingProperties = () => {
  const router = useRouter();
  const { project_id } = router.query;
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });
  const { data: projectPropertiesData, isError, error, isLoading, isFetching } = useGetPropertyByProjectIdQuery({ pagination, project_id });
  const { data: projectData, isError: ProjectError, isLoading: projectLoading } = useGetProjectByIdQuery(project_id);

  const [AddDocOpen, setAddDocOpen] = useState(false);

  const completionStatus = ['Upcoming', 'Under Construction', 'Completed', 'Off Plan', 'Ready'];
  const lifestylelist = ['Affordable', 'Standard', 'Luxury', 'Ultra Luxury'];
  const furnished = ['Non Furnished', 'Semi Furnished', 'Fully Furnished'];

  const ColumnHeaders = [
    {
      accessorKey: 'id',
      header: 'Property ID ',
      title: (
        <Tooltip title={'Project ID'}>
          <span>Project ID</span>
        </Tooltip>
      )
    },
    {
      accessorKey: 'project_id',
      header: 'Project ID',
      Cell: ({ row }) => {
        return row.original.project_id ? (
          row.original.project_id
        ) : (
          <Typography variant="caption" gutterBottom>
            -none-
          </Typography>
        );
      }
    },
    {
      accessorKey: 'phase_id',
      header: 'Phase ID',
      Cell: ({ row }) => {
        return row.original.phase_id ? (
          row.original.phase_id
        ) : (
          <Typography variant="caption" gutterBottom>
            -none-
          </Typography>
        );
      }
    },
    {
      accessorKey: 'ref_no',
      header: 'Reference No'
    },
    {
      accessorKey: 'action',
      header: 'Action',
      Cell: ({ row }) => {
        const [viewOpen, setViewOpen] = useState(false);
        return (
          <>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  console.log(row.original);
                  setViewOpen(true);
                }}
              >
                View Information
              </Button>

              <ViewInformation opened={viewOpen} setOpen={setViewOpen} size={'lg'}>
                <Grid item xs={12}>
                  <MainCard title="Property Details">
                    <Grid container spacing={2}>
                      <>
                        <Item primary="Property Title:" secondary={row.original?.property_title} />
                        <Item primary="Arabic Property Title:" secondary={row.original?.property_title_arabic} />
                        <Item primary="Property Description:" secondary={row.original?.description} />
                        <Item primary="Arabic Property Description:" secondary={row.original?.description_arabic} />
                        <Item primary="Completion Status:" secondary={completionStatus[row.original?.completion_status]} />
                        <Item primary="Property Status:" secondary={row.original?.property_type?.map((type) => `${type.label}, `)} />
                        {/* <Item primary="View:" secondary={row.original?.view?.map((v) => `${v.name}, `)} /> */}
                        <Item primary="Facilities:" secondary={row.original?.facilities?.map((f) => `${f.label}, `)} />
                        <Item primary="Amenities:" secondary={row.original?.amenities?.map((a) => `${a.label}, `)} />
                        <Item primary="Plot Area:" secondary={row.original?.plot_area || 0} />
                        <Item primary="Elevators:" secondary={row.original?.elevator || 0} />
                        {/* <Item primary="Lifestyle:" secondary={lifestylelist[row.original?.life_style]} /> */}
                        {/* <Item primary="Ownership:" secondary={row.original?.ownership || ''} /> */}
                        {/* <Item primary="Furnished:" secondary={furnished[row.original?.furnished]} /> */}
                        {/* <Item primary="Starting Price:" secondary={row.original?.starting_price || 0} /> */}
                        <Item primary="Built Up Area:" secondary={row.original?.built_up_area || 0} />
                        <Item primary="Area Range -max-:" secondary={row.original?.max_area || 0} />
                        <Item primary="Area Range -min-:" secondary={row.original?.min_area || 0} />
                        <Item primary="Parking:" secondary={row.original?.parking || 0} />
                        <Item primary="Start Date:" secondary={row.original?.start_date} />
                        <Item primary="Completion Date:" secondary={row.original?.completion_date} />
                        <Item primary="Handover Date:" secondary={row.original?.handover_date} />
                        <Item primary="No. Of Floors:" secondary={row.original?.no_of_floor || 0} />
                        <Item primary="No. Of Units:" secondary={'' || 0} />
                        <Item primary="Available Units:" secondary={'' || 0} />
                        <Item primary="No. Of Pools:" secondary={row.original?.no_of_pool || 0} />
                        <Item primary="No. Of Retail Center:" secondary={row.original?.no_of_retail || 0} />
                        <Item primary="Service Charge:" secondary={row.original?.service_charge || 0} />
                      </>
                    </Grid>
                  </MainCard>
                </Grid>
              </ViewInformation>

              <Link href={{ pathname: `/dashboard/project/project_management/listing_properties/gallery/${row.original.id}` }}>
                <Button variant="contained" color="primary">
                  Gallery
                </Button>
              </Link>

              <Link
                href={{
                  pathname: `/dashboard/project/project_management/listing_properties/documents/${row.original.id}`,
                  query: { type: 'property' }
                }}
              >
                <Button variant="contained" color="primary">
                  Property Documents
                </Button>
              </Link>

              <Link
                href={{
                  pathname: `/dashboard/project/project_management/listing_properties/plans/${row.original.id}`
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    console.log(row.original.phase_type);
                  }}
                >
                  Manage Plans
                </Button>
              </Link>
              <Link
                href={{
                  pathname: `/dashboard/project/project_management/listing_properties/financial_providers`,
                  query: { project_id }
                }}
              >
                <Button variant="contained" color="primary">
                  Financial Providers
                </Button>
              </Link>

              <Link href={{ pathname: `/dashboard/project/project_management/listing_properties/manage_units`, query: { project_id } }}>
                <Button variant="contained" color="primary">
                  Manage Unit Types
                </Button>
              </Link>
              <Link href={{ pathname: `/dashboard/project/project_management/listing_properties/units`, query: { project_id } }}>
                <Button variant="contained" color="primary">
                  Manage Units
                </Button>
              </Link>
              <Link href={{ pathname: `/dashboard/project/project_management/listing_properties/payment_plans/${row.original.id}` }}>
                <Button variant="contained" color="primary">
                  Manage payment plan
                </Button>
              </Link>
            </Box>
          </>
        );
      }
    }
  ];

  if (isLoading) return;
  return (
    <Page title="Manage listing Propeties">
      <ToastContainer />
      <Container title="Manage listing Properties" style={{ xs: 12 }}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Table
              columnHeaders={ColumnHeaders}
              data={projectPropertiesData?.data || []}
              loading={isLoading}
              pagination={pagination}
              setPagination={setPagination}
              isFetching={isFetching}
              rowCount={projectPropertiesData?.Total}
              renderTopToolbarCustomActions={({ table }) => {
                // projectData.data.phases.length == 0;
                return (
                  <>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      {projectData?.data?.phases.length !== 0 && (
                        <Link
                          href={{
                            pathname: `/dashboard/project/project_management/listing_properties/add_property/${project_id}`
                          }}
                        >
                          <Button variant="outlined" color="primary">
                            Add Property
                          </Button>
                        </Link>
                      )}
                    </div>
                  </>
                );
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

ListingProperties.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ListingProperties;
