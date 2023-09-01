import Page from 'components/ui-component/Page';
import PopUp from 'components/InputArea/PopUp';
import { Formik } from 'formik';
import { Grid } from '@mui/material';
import SubmitButton from 'components/Elements/SubmitButton';
import InputText from 'components/InputArea/TextInput';
import * as Yup from 'yup';

import { stringValidator } from 'utils/formik-validations';

const AddBlogCategory = ({ pageTitle, title, setOpen, opened, size }) => {
  const handleFormSubmit = (values) => {
    const formData = new FormData();
    formData.append('title', values.title);
    setOpen(false);
  };
  return (
    <PopUp opened={opened} title={title} setOpen={setOpen} size={size}>
      <Page title={pageTitle}>
        <Formik
          initialValues={{
            categoryName: ''
          }}
          validationSchema={Yup.object({
            categoryName: stringValidator('Please provide a valid category name', true)
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            handleFormSubmit(values);
            setSubmitting(false);
            resetForm();
          }}
        >
          {(props) => (
            <>
              <Grid container spacing={2} justifyContent="center" sx={{ p: 2 }}>
                <InputText
                  style={{ xs: 12, lg: 12 }}
                  label="Category Name"
                  id="categoryName"
                  name="categoryName"
                  helperText="Please input a Category Name"
                  placeholder="Add Category"
                  required={true}
                />
              </Grid>
              <SubmitButton />
            </>
          )}
        </Formik>
      </Page>
    </PopUp>
  );
};

export default AddBlogCategory;
