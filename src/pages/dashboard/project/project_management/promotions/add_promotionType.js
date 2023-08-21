import Page from 'components/ui-component/Page';
import PopUp from 'components/InputArea/PopUp';
import { Formik } from 'formik';
import { Grid } from '@mui/material';
import SubmitButton from 'components/Elements/SubmitButton';
import InputText from 'components/InputArea/TextInput';
import { useCreatePromotionTypeMutation } from 'store/services/project/projectApi';
import * as Yup from 'yup';
import { stringValidator } from 'utils/formik-validations';

const AddPromotionType = ({ pageTitle, title, setOpen, opened, size }) => {
  const [createPromotionType, result] = useCreatePromotionTypeMutation();
  const handleFormSubmit = (values) => {
    const formData = new FormData();
    formData.append('title', values.title);
    createPromotionType(formData);
    setOpen(false);
  };
  return (
    <PopUp opened={opened} title={title} setOpen={setOpen} size={size}>
      <Page title={pageTitle}>
        <Formik
          initialValues={{
            title: ''
          }}
          validationSchema={Yup.object({
            title: stringValidator('Please provide a valid promotion type', true)
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
                  label="Promotion type"
                  id="title"
                  name="title"
                  helperText="Please input a promotion title"
                  placeholder="Add promotion type"
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

export default AddPromotionType;
