// material-ui
import {
  Grid,
  FormControlLabel,
  Checkbox,
  Typography,
  TableBody,
  TableContainer,
  TableRow,
  TableHead,
  Table,
  tableCellClasses,
  TableCell,
  Divider
} from '@mui/material';
import { styled } from '@mui/material/styles';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React, { useEffect, useMemo, useState } from 'react';
import { NumberOfItems } from 'components/Items/numberOfItems';
import InputText, { NormalInputText } from 'components/InputArea/TextInput';
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import Container from 'components/Elements/Container';
import SubmitButton from 'components/Elements/SubmitButton';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { dateValidator, numberValidator, objectValidator } from 'utils/formik-validations';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getSubscription, getCompanyNames, updateSubscription } from 'store/slices/company-section/action/company';
import CustomDateTime from 'components/InputArea/CustomDateTime';
import { CheckboxHelperText } from 'components/InputArea/CheckboxHelperText';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const STANDARD_PRICE = 10;
const FEATURED_PRICE = 20;
const PREMIUM_PRICE = 30;
const DEAL_OF_WEEK_PRICE = 40;

// styles
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  '&:last-of-type td, &:last-of-type th': {
    border: 0
  }
}));

// table data
function createData(name, price, quantity, discount, actualPrice, discountedPrice, available) {
  return { name, price, quantity, discount, actualPrice, discountedPrice, available };
}

const validationSchema = Yup.object({
  companyName: objectValidator(),
  duration: numberValidator(),
  subscriptionStartDate: dateValidator(),
  subscriptionEndDate: dateValidator(),
  standardUnits: Yup.number().min(0, 'Please enter a valid number greater than 0'),
  standardDiscounts: Yup.number().min(0, 'Please enter a valid number greater than 0'),
  featuredUnits: Yup.number().min(0, 'Please enter a valid number greater than 0'),
  featuredDiscounts: Yup.number().min(0, 'Please enter a valid number greater than 0'),
  premiumDiscounts: Yup.number().min(0, 'Please enter a valid number greater than 0'),
  premiumUnits: Yup.number().min(0, 'Please enter a valid number greater than 0'),
  dealOfWeekUnits: Yup.number().min(0, 'Please enter a valid number greater than 0'),
  dealOfWeekDiscounts: Yup.number().min(0, 'Please enter a valid number greater than 0'),
  freeStandard: Yup.number().min(0, 'Please enter a valid number greater than 0'),
  freePremium: Yup.number().min(0, 'Please enter a valid number greater than 0'),
  freeFeatured: Yup.number().min(0, 'Please enter a valid number greater than 0'),
  freeDealOfWeek: Yup.number().min(0, 'Please enter a valid number greater than 0')
});

// ==============================|| Add Subscriptions form ||============================== //
function Subscription() {
  const [checked, setChecked] = useState(false);
  const [freeSubChecked, setFreeChecked] = useState(false);
  const [standard, setStandard] = useState(null);
  const [featured, setFeatured] = useState(null);
  const [premium, setPremium] = useState(null);
  const [dealOfWeek, setDealOfWeek] = useState(null);
  const [standardDiscount, setStandardDiscount] = useState(null);
  const [featuredDiscount, setFeaturedDiscount] = useState(null);
  const [premiumDiscount, setPremiumDiscount] = useState(null);
  const [dealOfWeekDiscount, setDealOfWeekDiscount] = useState(null);
  const [freeStandard, setFreeStandard] = useState(null);
  const [freeFeatured, setFreeFeatured] = useState(null);
  const [freePremium, setFreePremium] = useState(null);
  const [freeDealOfWeek, setFreeDealOfWeek] = useState(null);

  const calculateDiscount = (price, discount) => {
    if (discount === null) {
      return price;
    }
    return price - (price * discount) / 100;
  };

  const totalNumberOfItems = useMemo(() => {
    let total = 0;
    if (standard) {
      total += parseInt(standard, 10);
    }
    if (featured) {
      total += parseInt(featured, 10);
    }
    if (premium) {
      total += parseInt(premium, 10);
    }
    if (dealOfWeek) {
      total += parseInt(dealOfWeek, 10);
    }
    return total;
  }, [standard, featured, premium, dealOfWeek]);

  const totalNumberOfFreeItems = useMemo(() => {
    let total = 0;
    if (freeStandard) {
      total += parseInt(freeStandard, 10);
    }
    if (freeFeatured) {
      total += parseInt(freeFeatured, 10);
    }
    if (freePremium) {
      total += parseInt(freePremium, 10);
    }
    if (freeDealOfWeek) {
      total += parseInt(freeDealOfWeek, 10);
    }
    return total;
  }, [freeStandard, freeFeatured, freePremium, freeDealOfWeek]);

  const totalPrice = useMemo(() => {
    let total = 0;
    if (standard) {
      total += STANDARD_PRICE * standard;
    }
    if (featured) {
      total += FEATURED_PRICE * featured;
    }
    if (premium) {
      total += PREMIUM_PRICE * premium;
    }
    if (dealOfWeek) {
      total += DEAL_OF_WEEK_PRICE * dealOfWeek;
    }
    return total;
  }, [standard, featured, premium, dealOfWeek]);

  const totalDiscount = useMemo(() => {
    const total =
      calculateDiscount(STANDARD_PRICE * standard, standardDiscount) +
      calculateDiscount(FEATURED_PRICE * featured, featuredDiscount) +
      calculateDiscount(PREMIUM_PRICE * premium, premiumDiscount) +
      calculateDiscount(DEAL_OF_WEEK_PRICE * dealOfWeek, dealOfWeekDiscount);

    return total.toFixed(2);
  });

  const rows = [
    createData(
      'Standard',
      STANDARD_PRICE,
      standard,
      standardDiscount,
      STANDARD_PRICE * standard,
      calculateDiscount(STANDARD_PRICE * standard, standardDiscount),
      standard
    ),
    createData(
      'Featured',
      FEATURED_PRICE,
      featured,
      featuredDiscount,
      FEATURED_PRICE * featured,
      calculateDiscount(FEATURED_PRICE * featured, featuredDiscount),
      featured
    ),
    createData(
      'Premium',
      PREMIUM_PRICE,
      premium,
      premiumDiscount,
      PREMIUM_PRICE * premium,
      calculateDiscount(PREMIUM_PRICE * premium, premiumDiscount),
      premium
    ),
    createData(
      'Deal Of Week',
      DEAL_OF_WEEK_PRICE,
      dealOfWeek,
      dealOfWeekDiscount,
      DEAL_OF_WEEK_PRICE * dealOfWeek,
      calculateDiscount(DEAL_OF_WEEK_PRICE * dealOfWeek, dealOfWeekDiscount),
      dealOfWeek
    )
  ];
  const clear = () => {
    setStandard('');
    setFeatured('');
    setPremium('');
    setDealOfWeek('');
    setStandardDiscount('');
    setFeaturedDiscount('');
    setPremiumDiscount('');
    setDealOfWeekDiscount('');
  };

  const checkIfAvailable = useMemo(() => {
    if (standard || featured || premium || dealOfWeek) {
      return true;
    }
    return false;
  }, [standard, featured, premium, dealOfWeek]);

  const handleFreeSubChange = (event) => {
    setFreeChecked(event.target.checked);
  };

  const dispatch = useDispatch();
  const { companies, company } = useSelector((state) => state.companies);

  const handleChange = async (event, setFieldValue) => {
    setChecked(event.target.checked);
    if (!checked) {
      await setFieldValue('subscriptionStartDate', company?.start_date);
      await setFieldValue('subscriptionEndDate', company?.start_date);
      setFieldValue('duration', company?.subscription_duration?.split(' ')[0]);
    } else {
      setFieldValue('subscriptionStartDate', '');
      setFieldValue('subscriptionEndDate', '');
      setFieldValue('duration', '');
    }
  };

  useEffect(() => {
    dispatch(getCompanyNames());
  }, []);

  return (
    <Page title="Add Subscriptions">
      <ToastContainer />
      <Grid container spacing={gridSpacing}>
        <Container title="Add Subscriptions Type" style={{ xs: 12 }}>
          <Formik
            initialValues={{
              companyName: '',
              duration: '',
              subscriptionStartDate: '',
              subscriptionEndDate: ''
            }}
            onSubmit={(values, { resetForm }) => {
              const formData = new FormData();
              formData.append('company_type', values.companyName?.company_type);
              formData.append('subscription_duration', values.duration);
              formData.append('start_date', values.subscriptionStartDate);
              formData.append('end_date', values.subscriptionEndDate);
              formData.append('standard_units', standard || 0);
              formData.append('standard_unit_price', STANDARD_PRICE || 0);
              formData.append('standard_discount', standardDiscount || 0);
              formData.append('featured_units', featured || 0);
              formData.append('featured_unit_price', FEATURED_PRICE || 0);
              formData.append('featured_discount', featuredDiscount || 0);
              formData.append('premium_units', premium || 0);
              formData.append('premium_unit_price', PREMIUM_PRICE || 0);
              formData.append('premium_discount', premiumDiscount || 0);
              formData.append('topdeal_units', dealOfWeek || 0);
              formData.append('topdeal_unit_price', DEAL_OF_WEEK_PRICE || 0);
              formData.append('topdeal_discount', dealOfWeekDiscount || 0);
              formData.append('total_units', totalNumberOfItems || 0);
              formData.append('total_price', totalDiscount || 0);
              formData.append('subscription_mode', 1);
              dispatch(updateSubscription({ formData, id: values.companyName?.id }));
              resetForm();
            }}
            validationSchema={validationSchema}
            onReset={() => {
              setChecked(false);
              clear();
            }}
          >
            {(props) => (
              <>
                <Grid container spacing={2} alignItems="flex-start">
                  <AutoCompleteSelector
                    label="Company Name"
                    options={companies.map((company) => {
                      return {
                        label: company.company_name,
                        ...company
                      };
                    })}
                    placeholder="Please select the company name"
                    helperText="Please select the company name"
                    style={{ xs: 12, lg: 6 }}
                    id="companyName"
                    name="companyName"
                    setFieldValue={props.setFieldValue}
                    required={true}
                    func={(newValue) => {
                      newValue &&
                        dispatch(
                          getSubscription({
                            id: newValue?.id,
                            company_type: newValue?.company_type,
                            is_branch: newValue?.is_branch
                          })
                        );
                      props.setFieldValue('duration', '');
                      props.setFieldValue('subscriptionStartDate', '');
                      props.setFieldValue('subscriptionEndDate', '');
                    }}
                  />
                  <InputText
                    label="Duration"
                    type="number"
                    helperText={
                      <CheckboxHelperText
                        disabled={props.values.companyName ? false : true}
                        handleChange={handleChange}
                        checked={checked}
                      />
                    }
                    style={{ xs: 12, lg: 6 }}
                    placeholder="Please enter the duration"
                    id="duration"
                    name="duration"
                    required={true}
                    disabled={props.values.companyName ? false : true}
                  />
                  <>
                    <CustomDateTime
                      style={{ xs: 12, lg: 6 }}
                      label="Subscription start date"
                      helperText="Please enter subscription start date"
                      id="subscriptionStartDate"
                      name="subscriptionStartDate"
                      required={true}
                      disabled={checked || !props.values.companyName}
                    />

                    <CustomDateTime
                      style={{ xs: 12, lg: 6 }}
                      label="Subscription end date"
                      helperText="Please enter subscription end date"
                      id="subscriptionEndDate"
                      name="subscriptionEndDate"
                      required={true}
                      disabled={checked || !props.values.companyName}
                    />
                  </>
                  {/* )} */}
                </Grid>

                <Grid container spacing={2} alignItems="flex-start">
                  <NumberOfItems
                    standard={standard}
                    setStandard={setStandard}
                    featured={featured}
                    setFeatured={setFeatured}
                    premium={premium}
                    setPremium={setPremium}
                    dealOfWeek={dealOfWeek}
                    setDealOfWeek={setDealOfWeek}
                    numberOfUnits={totalNumberOfItems}
                  />
                  <Grid item xs={12} lg={6}>
                    <Typography variant="h3" component="div" sx={{ mb: 3, mt: 8 }}>
                      Discounts(%)
                    </Typography>
                    <Grid container spacing={2} xs={12} flexDirection="column">
                      <NormalInputText
                        helperText="Please enter discount amount"
                        type="number"
                        style={{ xs: 12, lg: 6 }}
                        required={false}
                        placeholder="Number of standard units"
                        disabled={!standard}
                        func={(value) => setStandardDiscount(value)}
                        value={standardDiscount}
                      />
                      <NormalInputText
                        helperText="Please enter discount amount"
                        type="number"
                        style={{ xs: 12, lg: 6 }}
                        required={false}
                        placeholder="Number of featured units"
                        disabled={!featured}
                        func={(value) => setFeaturedDiscount(value)}
                        value={featuredDiscount}
                      />
                      <NormalInputText
                        helperText="Please enter discount amount"
                        type="number"
                        style={{ xs: 12, lg: 6 }}
                        required={false}
                        placeholder="Number of premium units"
                        disabled={!premium}
                        func={(value) => setPremiumDiscount(value)}
                        value={premiumDiscount}
                      />
                      <NormalInputText
                        helperText="Please enter discount amount"
                        type="number"
                        style={{ xs: 12, lg: 6 }}
                        required={false}
                        placeholder="Number of deal units"
                        disabled={!dealOfWeek}
                        func={(value) => setDealOfWeekDiscount(value)}
                        value={dealOfWeekDiscount}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                {checkIfAvailable && (
                  <TableContainer sx={{ mt: 8 }}>
                    <Table sx={{ minWidth: 320 }} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          <StyledTableCell sx={{ pl: 3 }}>Item</StyledTableCell>
                          <StyledTableCell align="right">Price</StyledTableCell>
                          <StyledTableCell align="right">Quantity(g)</StyledTableCell>
                          <StyledTableCell align="right">Discount</StyledTableCell>
                          <StyledTableCell sx={{ pr: 3 }} align="right">
                            Actual Price
                          </StyledTableCell>
                          <StyledTableCell sx={{ pr: 3 }} align="right">
                            Discounted Price
                          </StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map(
                          (row) =>
                            row.available && (
                              <StyledTableRow hover key={row.name}>
                                <StyledTableCell sx={{ pl: 3 }} component="th" scope="row">
                                  {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.price}</StyledTableCell>
                                <StyledTableCell align="right">{row.quantity}</StyledTableCell>
                                <StyledTableCell align="right">{row.discount}</StyledTableCell>
                                <StyledTableCell sx={{ pr: 3 }} align="right">
                                  {row.actualPrice}
                                </StyledTableCell>
                                <StyledTableCell sx={{ pr: 3 }} align="right">
                                  {row.discountedPrice}
                                </StyledTableCell>
                              </StyledTableRow>
                            )
                        )}
                        <StyledTableRow>
                          <StyledTableCell colSpan={4}>Total</StyledTableCell>
                          <StyledTableCell align="right" sx={{ pr: 3 }}>
                            {totalPrice}
                          </StyledTableCell>
                          <StyledTableCell align="right" sx={{ pr: 3 }}>
                            {totalDiscount}
                          </StyledTableCell>
                        </StyledTableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
                <Divider />
                <Grid container>
                  <FormControlLabel control={<Checkbox onChange={handleFreeSubChange} />} label="Add Free Subscription" />
                </Grid>
                {freeSubChecked && (
                  <NumberOfItems
                    standard={freeStandard}
                    setStandard={setFreeStandard}
                    featured={freeFeatured}
                    setFeatured={setFreeFeatured}
                    premium={freePremium}
                    setPremium={setFreePremium}
                    dealOfWeek={freeDealOfWeek}
                    setDealOfWeek={setFreeDealOfWeek}
                    numberOfUnits={totalNumberOfFreeItems}
                  />
                )}
                <SubmitButton />
              </>
            )}
          </Formik>
        </Container>
      </Grid>
    </Page>
  );
}

Subscription.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Subscription;
