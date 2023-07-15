import React from 'react';
import ReactPDF from '@react-pdf/renderer';



ReactPDF.render(<DraftSubscriptions/>, `${__dirname}/companySubscriptions.pdf`);