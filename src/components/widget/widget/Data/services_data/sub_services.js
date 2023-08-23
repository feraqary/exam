import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Button } from '@mui/material';
import KeyIcon from '@mui/icons-material/Key';
import DeleteIcon from '@mui/icons-material/Delete';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import VisibilityIcon from '@mui/icons-material/Visibility';

const data = [
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    service: 'Developer Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Jamie',
    description: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      },
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: false
      }
    ]
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    service: '261 Erdman Ford',
    unitname: 'US',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Cercie',
    description: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    service: 'Broker Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Arya Stark',
    description: 'Winterfell',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: false
      }
    ]
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    service: 'Management Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Joffery',
    description: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: false
      }
    ]
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    service: 'Developer Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Jamie',
    description: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    service: 'Broker Company',
    webID: 'PB192323',
    sino: 'PB192323',
    category: 'Cercie',
    description: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    service: 'Marketing Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Arya Stark',
    description: 'Winterfell',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    service: 'Developer Company',
    webID: 'PA283102',
    sino: 'PA283102',
    category: 'Joffery',
    description: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      },
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      },
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    service: 'Developer Company',
    unitname: 'US',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Jamie',
    description: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    service: 'Broker Company',
    webID: 'PA283102',
    sino: 'PA283102',
    category: 'Cercie',
    description: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    service: 'Marketing Company',
    webID: 'PA283102',
    sino: 'PA283102',
    category: 'Arya Stark',
    description: 'Winterfell',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    service: 'Developer Company',
    webID: 'PA283102',
    sino: 'PA283102',
    category: 'Joffery',
    description: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    service: 'Developer Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Jamie',
    description: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    service: '261 Erdman Ford',
    unitname: 'US',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Cercie',
    description: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    service: 'Broker Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Arya Stark',
    description: 'Winterfell',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    service: 'Management Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Joffery',
    description: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    service: 'Developer Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Jamie',
    description: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    service: 'Broker Company',
    webID: 'PB192323',
    sino: 'PB192323',
    category: 'Cercie',
    description: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    service: 'Marketing Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Arya Stark',
    description: 'Winterfell',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    service: 'Developer Company',
    webID: 'PA283102',
    sino: 'PA283102',
    category: 'Joffery',
    description: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    service: 'Developer Company',
    unitname: 'US',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Jamie',
    description: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    service: 'Broker Company',
    webID: 'PA283102',
    sino: 'PA283102',
    category: 'Cercie',
    description: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    service: 'Marketing Company',
    webID: 'PA283102',
    sino: 'PA283102',
    category: 'Arya Stark',
    description: 'Winterfell',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    service: 'Developer Company',
    webID: 'PA283102',
    sino: 'PA283102',
    category: 'Joffery',
    description: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    service: 'Developer Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Jamie',
    description: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    service: '261 Erdman Ford',
    unitname: 'US',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Cercie',
    description: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    service: 'Broker Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Arya Stark',
    description: 'Winterfell',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    service: 'Management Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Joffery',
    description: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    service: 'Developer Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Jamie',
    description: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    service: 'Broker Company',
    webID: 'PB192323',
    sino: 'PB192323',
    category: 'Cercie',
    description: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    service: 'Marketing Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Arya Stark',
    description: 'Winterfell',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    service: 'Developer Company',
    webID: 'PA283102',
    sino: 'PA283102',
    category: 'Joffery',
    description: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    service: 'Developer Company',
    unitname: 'US',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Jamie',
    description: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    service: 'Broker Company',
    webID: 'PA283102',
    sino: 'PA283102',
    category: 'Cercie',
    description: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    service: 'Marketing Company',
    webID: 'PA283102',
    sino: 'PA283102',
    category: 'Arya Stark',
    description: 'Winterfell',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    service: 'Developer Company',
    webID: 'PA283102',
    sino: 'PA283102',
    category: 'Joffery',
    description: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    service: 'Developer Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Jamie',
    description: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    service: '261 Erdman Ford',
    unitname: 'US',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Cercie',
    description: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    service: 'Broker Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Arya Stark',
    description: 'Winterfell',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    service: 'Management Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Joffery',
    description: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    service: 'Developer Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Jamie',
    description: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    service: 'Broker Company',
    webID: 'PB192323',
    sino: 'PB192323',
    category: 'Cercie',
    description: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    service: 'Marketing Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Arya Stark',
    description: 'Winterfell',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    service: 'Developer Company',
    webID: 'PA283102',
    sino: 'PA283102',
    category: 'Joffery',
    description: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    service: 'Developer Company',
    unitname: 'US',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Jamie',
    description: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    service: 'Broker Company',
    webID: 'PA283102',
    sino: 'PA283102',
    category: 'Cercie',
    description: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    service: 'Marketing Company',
    webID: 'PA283102',
    sino: 'PA283102',
    category: 'Arya Stark',
    description: 'Winterfell',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    service: 'Developer Company',
    webID: 'PA283102',
    sino: 'PA283102',
    category: 'Joffery',
    description: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png',
        cover: true
      }
    ]
  }
];

const SubServicesTable = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'sino',
        header: '   SI NO'
      },
      {
        accessorKey: 'service',
        header: 'Sub Service Name'
      },
      {
        accessorKey: 'name.companyLogo',
        header: 'Image',
        Cell: ({ cell }) => (
          <Box display="flex" alignItems="center">
            <img src={cell.getValue()} width={100} height={100} style={{objectFit:'contain'}} />
          </Box>
        )
      },
      {
        accessorKey: 'action',
        header: 'Action',
        Cell: ({ renderedCellValue, row }) => (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <Button variant="contained" color="primary" startIcon={<VisibilityIcon />}>
              View
            </Button>
            <Button variant="contained" color="primary" startIcon={<EditIcon />}>
              Edit
            </Button>
            <Button variant="contained" color="error" startIcon={<DeleteIcon />}>
              Delete
            </Button>
          </Box>
        )
      }
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} enableDensityToggle={false} initialState={{ density: 'compact' }} />;
};

export default SubServicesTable;
