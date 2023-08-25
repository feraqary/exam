// // material-ui
import { Grid, Box, Button, DialogActions, IconButton, Dialog, DialogContent } from '@mui/material';
import MainCard from 'components/ui-component/cards/MainCard';
import AutoCompleteSelector, {
  MultipleAutoCompleteSelector,
  AutoCompleteSelectorAPI,
  NormalAutoCompleteSelector
} from 'components/InputArea/AutoCompleteSelector';
import Page from 'components/ui-component/Page';
import Layout from 'layout';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import FileUpload from 'components/InputArea/FileUpload';
import React, { useRef } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastSuccess, ToastError } from 'utils/toast';
import Container from 'components/Elements/Container';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';
import { useEffect, useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import Link from 'next/link';
import {
  useGetPlansByPropertyIdQuery,
  useCreatePropertyPlanMutation,
  useUpdatePlansByPropertyIdMutation
} from 'store/services/project/projectApi';
import Image from 'next/image';
import PopUp from 'components/InputArea/PopUp';
import SubmitButton from 'components/Elements/SubmitButton';
import { Plane } from 'tabler-icons-react';
export default function Plans() {
  const router = useRouter();
  const { id } = router.query;
  const documents = useRef(null);
  const [openAdd, setOpenAdd] = useState(false);

  const { data: PlansData, isError, isLoading, isSuccess, isFetching } = useGetPlansByPropertyIdQuery(id);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });

  const [updatePlan, updatePlanResult] = useUpdatePlansByPropertyIdMutation();
  const [createPlan, createPlanResult] = useCreatePropertyPlanMutation();

  //update toast
  useEffect(() => {
    if (updatePlanResult.isSuccess) {
      ToastSuccess('Plan has been Updated successfully');
    }
  }, [updatePlanResult.isSuccess]);
  useEffect(() => {
    if (updatePlanResult.isError) {
      const { data } = updatePlanResult.error;
      ToastError(data.error);
    }
  }, [updatePlanResult.isError]);

  //create toast
  useEffect(() => {
    if (createPlan.isSuccess) {
      ToastSuccess('Plan has been created successfully');
    }
  }, [createPlan.isSuccess]);
  useEffect(() => {
    if (createPlan.isError) {
      const { data } = createPlan.error;
      ToastError(data.error);
    }
  }, [createPlan.isError]);

  //create and edit form
  const PlansForm = ({ type, plan_id, setOpen }) => {
    return (
      <>
        <Formik 
        
          initialValues={{
            title: null,
            key: null,
            image_url: []
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            const formData = new FormData();
            const property_id = id;
            if (type === 'Add') {
              formData.append('properties_id', id);
              formData.append('title', values.title.label);
              formData.append('key', 1);
              for (const img of values.image_url) {
                formData.append('image_url[]', img);
              }
              createPlan(formData);
              setOpenAdd(false);
            } else if (type === 'Edit') {
              formData.append('id', plan_id);
              formData.append('title', values.title.label);
              formData.append('key', 1);
              for (const img of values.image_url) {
                formData.append('image_url[]', img);
              }
              updatePlan(formData);
              setOpen(false);
            }
          }}
        >
          {(props) => (
            <MainCard>
              <ToastContainer />
              <Grid container spacing={2} alignItems="center" justifyContent={'center'}>
                <Grid sx={12} lg={10} xs={{ border: '1px red solid' }}>
                  <AutoCompleteSelector
                    label="Title"
                    placeholder="Select Plan Title"
                    options={[
                      // { label: 'DROP DATABASE *', value: 0 },
                      { label: 'Master Plan', value: 1 },
                      { label: 'Floor Plan', value: 2 },
                      { label: 'Tower Structure', value: 3 }
                    ]}
                    style={{ xs: 12, lg: 12 }}
                    helperText="Please Select Plan Title"
                    id="title"
                    name="title"
                  />
                  <FileUpload
                    multiple
                    id="image_url"
                    name="image_url"
                    required={true}
                    label="Upload Plan"
                    style={{ xs: 12, lg: 12 }}
                    placeholder="Upload Plan"
                    setFieldValue={props.setFieldValue}
                    helperText="Please upload the plan document"
                    ref={documents}
                  />
                  <Grid item lg={12} textAlign={'center'}>
                    <SubmitButton />
                  </Grid>
                </Grid>
              </Grid>
            </MainCard>
          )}
        </Formik>
      </>
    );
  };

  const ColumnHeaders = [
    {
      accessorKey: 'title',
      header: 'Title'
    },
    {
      accessorKey: 'ref_no',
      header: 'Plan',
      Cell: ({ row }) => {
        {
          return (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              {row.original.image_urls.map((url, i) => {
                return <Image src={`http://20.203.31.58/upload/${url}`} key={i} alt="plan" width={60} height={30} />;
              })}
            </Box>
          );
        }
      }
    },
    {
      accessorKey: 'action',
      header: 'Action',
      Cell: ({ row }) => {
        const [openEdit, setOpenEdit] = useState(false);
        return (
          <>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <PopUp title="Edit Plans" setOpen={setOpenEdit} opened={openEdit} size={'lg'}>
                <PlansForm setOpen={setOpenEdit} type="Edit" plan_id={row.original?.id} />
              </PopUp>

              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setOpenEdit(true);
                }}
              >
                Edit
              </Button>
              <Button variant="contained" color="error">
                Delete
              </Button>
            </Box>
          </>
        );
      }
    }
  ];

  return (
    <Container title="Manage Plans" style={{ xs: 12 }}>
      <ToastContainer />
      <Grid container spacing={gridSpacing}>
        <PopUp title="Add Plans" setOpen={setOpenAdd} opened={openAdd} size={'lg'}>
          <PlansForm type="Add" />
        </PopUp>
        <Grid item xs={12}>
          <Table
            columnHeaders={ColumnHeaders}
            data={PlansData?.data || []}
            loading={isLoading}
            pagination={pagination}
            setPagination={setPagination}
            isFetching={isFetching}
            rowCount={PlansData?.total}
            renderTopToolbarCustomActions={({ table }) => {
              return (
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {/* <Link
                    href={{
                      pathname: `/dashboard/project/project_management/listing_properties/plans/add/${id}`
                    }}
                  > */}
                  <Button variant="outlined" color="primary" onClick={() => setOpenAdd(true)}>
                    Add Plan
                  </Button>
                  {/* </Link> */}
                </div>
              );
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

Plans.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
