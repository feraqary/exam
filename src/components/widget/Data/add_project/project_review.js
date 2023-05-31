import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Button } from '@mui/material';
import KeyIcon from '@mui/icons-material/Key';
import DeleteIcon from '@mui/icons-material/Delete';
import VerifiedIcon from '@mui/icons-material/Verified';
import StarRateIcon from '@mui/icons-material/StarRate';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PreviewIcon from '@mui/icons-material/Preview';
import Rating from '@mui/material/Rating';
import Checkbox from '@mui/material/Checkbox';
import { divide } from 'lodash';
import { styled } from '@mui/material/styles';

const data = [
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    projectname: 'Developer Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 1,
    rating: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    projectname: '261 Erdman Ford',
    username: 'standard',
    comments: 'US',
    negotationskills: 1,
    rating: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: false
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    projectname: 'Broker Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 1,
    rating: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: false
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    projectname: 'Management Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 1,
    rating: 5,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: false
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    projectname: 'Developer Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 1,
    rating: 4,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    projectname: 'Broker Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 4,
    rating: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    projectname: 'Marketing Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 1,
    rating: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    projectname: 'Developer Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 5,
    rating: 5,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    projectname: 'Developer Company',
    username: 'standard',
    comments: 'US',
    negotationskills: 1,
    rating: 4,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    projectname: 'Broker Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 5,
    rating: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    projectname: 'Marketing Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 5,
    rating: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    projectname: 'Developer Company',
    username: 'standard',
    comments: 'USA',
    negotationskills: 5,
    rating: 5,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    projectname: 'Developer Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 1,
    rating: 4,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    projectname: '261 Erdman Ford',
    username: 'standard',
    comments: 'US',
    negotationskills: 1,
    rating: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    projectname: 'Broker Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 1,
    rating: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    projectname: 'Management Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 1,
    rating: 5,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    projectname: 'Developer Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 1,
    rating: 4,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    projectname: 'Broker Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 4,
    rating: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    projectname: 'Marketing Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 1,
    rating: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    projectname: 'Developer Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 5,
    rating: 5,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    projectname: 'Developer Company',
    username: 'standard',
    comments: 'US',
    negotationskills: 1,
    rating: 4,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    projectname: 'Broker Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 5,
    rating: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    projectname: 'Marketing Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 5,
    rating: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    projectname: 'Developer Company',
    username: 'standard',
    comments: 'USA',
    negotationskills: 5,
    rating: 5,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    projectname: 'Developer Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 1,
    rating: 4,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    projectname: '261 Erdman Ford',
    username: 'standard',
    comments: 'US',
    negotationskills: 1,
    rating: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    projectname: 'Broker Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 1,
    rating: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    projectname: 'Management Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 1,
    rating: 5,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    projectname: 'Developer Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 1,
    rating: 4,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    projectname: 'Broker Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 4,
    rating: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    projectname: 'Marketing Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 1,
    rating: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    projectname: 'Developer Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 5,
    rating: 5,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    projectname: 'Developer Company',
    username: 'standard',
    comments: 'US',
    negotationskills: 1,
    rating: 4,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    projectname: 'Broker Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 5,
    rating: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    projectname: 'Marketing Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 5,
    rating: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    projectname: 'Developer Company',
    username: 'standard',
    comments: 'USA',
    negotationskills: 5,
    rating: 5,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    projectname: 'Developer Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 1,
    rating: 4,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    projectname: '261 Erdman Ford',
    username: 'standard',
    comments: 'US',
    negotationskills: 1,
    rating: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    projectname: 'Broker Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 1,
    rating: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    projectname: 'Management Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 1,
    rating: 5,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    projectname: 'Developer Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 1,
    rating: 4,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    projectname: 'Broker Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 4,
    rating: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    projectname: 'Marketing Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 1,
    rating: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    projectname: 'Developer Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 5,
    rating: 5,
    email: 'new@gmail.com',
    processexpertise: '3',
    responsiveness: 2,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    projectname: 'Developer Company',
    username: 'standard',
    comments: 'US',
    negotationskills: 1,
    rating: 4,
    email: 'new@gmail.com',
    processexpertise: '3',
    responsiveness: 2,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    projectname: 'Broker Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 5,
    rating: 3,
    email: 'new@gmail.com',
    processexpertise: '3',
    responsiveness: 2,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    projectname: 'Marketing Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 5,
    rating: 2,
    email: 'new@gmail.com',
    processexpertise: '3',
    responsiveness: 4,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    projectname: 'Developer Company',
    username: 'standard',
    comments: 'USA',
    negotationskills: 5,
    rating: 5,
    email: 'new@gmail.com',
    processexpertise: '3',
    responsiveness: 2,
    date: '2-12-2023',
    mobile: ' uploaded',
    action: true
  }
];

const rating = (nbr) => {
const stars = []
for (let i =0; i < nbr; i++){
     stars.push( <StarRateIcon color='orange' />)
}
return stars
}

const ProjectReviewTable = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'projectname',
        header: 'Ref No. '
      },
      {
        accessorKey: 'projectname',
        header: 'Project Name '
      },
      {
        accessorKey: 'rating',
        header: 'Rating',
        Cell: ({ cell }) => (
            <Rating value={cell.getValue()} readOnly/>          )
      },
      {
        accessorKey: 'comments',
        header: 'Comments'
      },
      {
        accessorKey: 'username',
        header: 'User Name'
      },
      {
        accessorKey: 'email',
        header: 'Email'
      },
      {
        accessorKey: 'mobile',
        header: 'Mobile'
      },
      {
        accessorKey: 'date',
        header: 'Date'
      },
      {
        accessorKey: 'action',
        header: 'Verify',
        Cell: ({ cell }) => (
            <Checkbox defaultChecked={cell.getValue()} disabled />
          )
      },
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} enableDensityToggle={false} initialState={{ density: 'compact' }} />;
};

export default ProjectReviewTable;
