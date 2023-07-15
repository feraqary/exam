// material-ui
import { Grid, Button, Box } from '@mui/material';
// project imports
import Layout from 'layout';
import { gridSpacing } from 'store/constant';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import React, { useEffect, useState } from 'react';
import { getAllDraftSubscriptions } from 'store/slices/company-section/action/company';

// ==============================|| View Pending Subscriptions ||============================== //

const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });
    
const Draft = () => (
    <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
  );



export default DraftSubscriptions;
