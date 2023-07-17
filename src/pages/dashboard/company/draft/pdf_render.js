import React from 'react';
import { Document, Page, Text, View, PDFViewer, Image } from '@react-pdf/renderer';
import { useFetchDashboardDataQuery } from './rtk_slice';

const PdfGenerator = () => {
  const { data, isLoading, isError } = useFetchDashboardDataQuery({
    id: 2,
    company_type: 2,
    is_branch: false,
  });
  

  if (isLoading) {
    return <div>Loading data...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  const calculateMonthlyTotal = () => {
    const subscriptions = data.subscriptions; 
    let total = 0;

    subscriptions.forEach((subscription) => {
      const { unitPrice, quantityPerMonth } = subscription;
      const monthlyPrice = unitPrice * quantityPerMonth;
      total += monthlyPrice;
    });

    return total;
  };

  const monthlyTotalExclVat = calculateMonthlyTotal();
  const vatAmount = monthlyTotalExclVat * 0.06;
  const monthlyTotalInclVat = monthlyTotalExclVat + vatAmount;

  return (
    <PDFViewer width="100%" height="500px">
      <Document>
        <Page>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image src={logo} style={{ width: 50, height: 50, marginRight: 10 }} /> 
              <Text>Advertising Agreement</Text>
            </View>

            <Text>1- CUSTOMER DETAILS</Text>
            <Text>Customer Name: {CompanyName}</Text>
            <Text>Client Rera Number: {data.ReraClientNo}</Text> 
            <Text>Client Tax Registration Number: {data.TaxRegistrationNo}</Text> 
            <Text>Client Trade License No: {data.LicenseNo}</Text> 
            
            <Text>CONTACT INFORMATION</Text>
            <Text>Name: {data.Name}</Text> 
            <Text>Designation: {data.Designation}</Text> 
            <Text>Telephone Number: {data.PhoneNo}</Text> 
            <Text>Email: {data.Email}</Text> 
            <Text>Office Address: {data.OfficeAddress}</Text> 
            
            <Text>3- SERVICE / PRODUCT DESCRIPTION</Text>
            <View>
              <Text>Product Name</Text>
              <Text>Unit Price (AED)</Text>
              <Text>Quantity Per Month</Text>
              <Text>Monthly Price (AED)</Text>
            </View>
            {data.subscriptions.map((subscription) => (
              <View key={subscription.id}>
                <Text>{subscription.name}</Text>
                <Text>{subscription.unitPrice}</Text>
                <Text>{subscription.quantityPerMonth}</Text>
                <Text>{subscription.unitPrice * subscription.quantityPerMonth}</Text>
              </View>
            ))}
            
            <Text>Total</Text>
            <Text>{monthlyTotalExclVat} AED</Text>
            <Text>VAT(6%)</Text>
            <Text>{vatAmount} AED</Text>
            <Text>Monthly total (incl. of VAT)</Text>
            <Text>{monthlyTotalInclVat} AED</Text>
            
            <Text>Contract total (incl. of VAT)</Text>
            <Text>Contract Duration: {data.contractDuration}</Text> 
            <Text>Contract Sign Date: {data.contractSignDate}</Text> 
            <Text>Contract Start Date: {data.StartDate}</Text> 
            <Text>Contract End Date: {data.EndDate}</Text> 
            
            <Text>Notes:</Text>
            <Text>{data.notes}</Text> 
            
            <Text>SIGNATURE AND STAMP</Text>
            <Text>
              By signing this form, you are entering into a legally binding agreement with AQARY INTERNATIONAL GROUP PUBLICITY & ADVERTISING L.L.C. If Signing on behalf of a Company, You Warrant that you are an authorized signatory of that company to bind it to this agreement.
            </Text>
            <View style={{ marginTop: 20 }}>
              <Text>Authorized signatory:</Text>
              <Text>------------------------</Text>
              <Text>Authorised signature:</Text>
              <Text>------------------------</Text>
              <Text>Date:</Text>
              <Text>------------------------</Text>
              <Text>Company Stamp:</Text>
              <Text>------------------------</Text>
              <Text>Aqary Account Manager:</Text>
              <Text>------------------------</Text>
              <Text>AQARY INT GROUP PUBLICITY & ADVERTISING L.L.C</Text>
              <Text>This Document is Confidential and Proprietary</Text>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default PdfGenerator;
