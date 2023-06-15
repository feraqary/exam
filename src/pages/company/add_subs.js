// material-ui
import {
  Grid,
  TextField,
  FormHelperText,
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
  Divider,
  CardActions,
  Button
} from '@mui/material';
import { styled } from '@mui/material/styles';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import React, { useMemo, useState } from 'react';
import { NumberOfItems } from 'components/Items/numberOfItems';
import InputText from 'components/widgets/TextInput';
import AutoCompleteSelector from 'components/widgets/AutoCompleteSelector';
import Container from 'components/Elements/Container';
import SubmitButton from 'components/Elements/SubmitButton';

// assets
const top100Films = [
  { label: 'The Dark Knight', id: 1 },
  { label: 'Control with Control', id: 2 },
  { label: 'Combo with Solo', id: 3 },
  { label: 'The Dark', id: 4 },
  { label: 'Fight Club', id: 5 },
  { label: 'demo@company.com', id: 6 },
  { label: 'Pulp Fiction', id: 7 }
];

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
  const [companyName, setCompanyName] = useState(null);

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

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const showDate = useMemo(() => {
    if (!checked) {
      return (
        <>
          <InputText
            label="Start Date"
            type="date"
            helperText="Please select the start date"
            style={{ xs: 12, lg: 6 }}
            placeholder="Select start date"
          />
          <InputText
            label="End Date"
            type="date"
            helperText="Please select the end date"
            style={{ xs: 12, lg: 6 }}
            placeholder="Select end date"
          />
        </>
      );
    }
    return null;
  }, [checked]);

  const CheckboxHelperText = useMemo(() => {
    return <FormControlLabel control={<Checkbox onChange={handleChange} />} label="Subscription Validity Same As Company Registration" />;
  }, []);

  return (
    <Page title="Add Subscriptions">
      <Grid container spacing={gridSpacing}>
        <Container title="Add Subscriptions Type" style={{ xs: 12 }}>
          <Grid container spacing={2} alignItems="flex-start">
            <AutoCompleteSelector
              label="Company Name"
              options={top100Films}
              placeholder="Please select the company name"
              style={{ xs: 12, lg: 6 }}
              value={companyName}
              setValue={setCompanyName}
            />
            <InputText
              label="Duration"
              type="number"
              helperText={CheckboxHelperText}
              style={{ xs: 12, lg: 6 }}
              placeholder="Please enter the duration"
            />
            {showDate}
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
                <Grid item xs={12} sm={9} lg={6}>
                  <TextField
                    fullWidth
                    type="number"
                    value={standardDiscount}
                    onChange={(e) => setStandardDiscount(e.target.value)}
                    // eslint-disable-next-line no-unneeded-ternary
                    disabled={standard ? false : true}
                  />
                  <FormHelperText>Please enter discount amount</FormHelperText>
                </Grid>
                <Grid item xs={12} sm={9} lg={6}>
                  <TextField
                    fullWidth
                    type="number"
                    value={featuredDiscount}
                    onChange={(e) => setFeaturedDiscount(e.target.value)}
                    // eslint-disable-next-line no-unneeded-ternary
                    disabled={featured ? false : true}
                  />
                  <FormHelperText>Please enter discount amount</FormHelperText>
                </Grid>
                <Grid item xs={12} sm={9} lg={6}>
                  <TextField
                    fullWidth
                    type="number"
                    value={premiumDiscount}
                    onChange={(e) => setPremiumDiscount(e.target.value)}
                    // eslint-disable-next-line no-unneeded-ternary
                    disabled={premium ? false : true}
                  />
                  <FormHelperText>Please enter discount amount</FormHelperText>
                </Grid>
                <Grid item xs={12} sm={9} lg={6}>
                  <TextField
                    fullWidth
                    type="number"
                    value={dealOfWeekDiscount}
                    onChange={(e) => setDealOfWeekDiscount(e.target.value)}
                    // eslint-disable-next-line no-unneeded-ternary
                    disabled={dealOfWeek ? false : true}
                  />
                  <FormHelperText>Please enter discount amount</FormHelperText>
                </Grid>
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
        </Container>
        <SubmitButton />
      </Grid>
    </Page>
  );
}

Subscription.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Subscription;
