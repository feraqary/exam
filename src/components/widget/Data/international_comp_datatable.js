// material-ui
import {
  Button,
  CardActions,
  CardMedia,
  Grid,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Pagination
} from '@mui/material';

// project imports
import Chip from 'components/ui-component/extended/Chip';
import { gridSpacing } from 'store/constant';
import TablePagination from '@mui/material/TablePagination';
import { useTheme } from '@mui/material/styles';

// assets
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MainCard from 'components/ui-component/cards/MainCard';

const comp1 = '/assets/images/company_logo/logo1.png';
const comp2 = '/assets/images/company_logo/logo2.png';
const comp3 = '/assets/images/company_logo/logo3.png';
const comp4 = '/assets/images/company_logo/logo4.png';

// table data
function createData(
  companyId,
  featuredStatus,
  companyLogo,
  companyName,
  companyType,
  RegId,
  contactPerson,
  email,
  phone,
  addedBy,
  subscriptionDate,
  documents,
  action
) {
  return {
    companyId,
    featuredStatus,
    companyLogo,
    companyName,
    companyType,
    RegId,
    contactPerson,
    email,
    phone,
    addedBy,
    subscriptionDate,
    documents,
    action
  };
}

const rows = [
  createData(
    'PR1231234',
    'featured',
    comp2,
    'Khidmah',
    'Broker Company',
    'REG-293847',
    'Cercie Lannister',
    'arya@gmail.com',
    '+187203801',
    'Marketing User',
    '11-08-2022',
    'RERA'
  ),
  createData(
    'PR1231234',
    'featured',
    comp3,
    'Dubai Holding',
    'Management Company',
    'REG-293847',
    'Arya Stark',
    'arya@gmail.com',
    '+187203801',
    'Marketing User',
    '11-08-2022',
    'RERA'
  ),
  createData(
    'PR1231234',
    'featured',
    comp4,
    'Khidmah',
    'Broker Company',
    'REG-293847',
    'Lord Eddard Stark',
    'arya@gmail.com',
    '+187203801',
    'Marketing User',
    '11-08-2022',
    'RERA'
  ),
  createData(
    'PR1231234',
    'featured',
    comp1,
    'Khidmah',
    'Broker Company',
    'REG-293847',
    'Arya Stark',
    'arya@gmail.com',
    '+187203801',
    'Marketing User',
    '11-08-2022',
    'RERA'
  ),
  createData(
    'PR1231234',
    'featured',
    comp2,
    'Khidmah',
    'Broker Company',
    'REG-293847',
    'Arya Stark',
    'arya@gmail.com',
    '+187203801',
    'Marketing User',
    '11-08-2022',
    'RERA'
  ),
  createData(
    'PR1231234',
    'featured',
    comp3,
    'Khidmah',
    'Broker Company',
    'REG-293847',
    'Arya Stark',
    'arya@gmail.com',
    '+187203801',
    'Marketing User',
    '11-08-2022',
    'RERA'
  ),
  createData(
    'PR1231234',
    'featured',
    comp4,
    'Khidmah',
    'Broker Company',
    'REG-293847',
    'Arya Stark',
    'arya@gmail.com',
    '+187203801',
    'Marketing User',
    '11-08-2022',
    'RERA'
  ),
  createData(
    'PR1231234',
    'featured',
    comp1,
    'Khidmah',
    'Broker Company',
    'REG-293847',
    'Arya Stark',
    'arya@gmail.com',
    '+187203801',
    'Marketing User',
    '11-08-2022',
    'RERA'
  ),
  createData(
    'PR1231234',
    'featured',
    comp2,
    'Khidmah',
    'Broker Company',
    'REG-293847',
    'Arya Stark',
    'arya@gmail.com',
    '+187203801',
    'Marketing User',
    '11-08-2022',
    'RERA'
  ),
  createData(
    'PR1231234',
    'featured',
    comp3,
    'Khidmah',
    'Broker Company',
    'REG-293847',
    'Arya Stark',
    'arya@gmail.com',
    '+187203801',
    'Marketing User',
    '11-08-2022',
    'RERA'
  ),
  createData(
    'PR1231234',
    'featured',
    comp1,
    'Khidmah',
    'Broker Company',
    'REG-293847',
    'Arya Stark',
    'arya@gmail.com',
    '+187203801',
    'Marketing User',
    '11-08-2022',
    'RERA'
  ),
  createData(
    'PR1231234',
    'featured',
    comp2,
    'Khidmah',
    'Broker Company',
    'REG-293847',
    'Arya Stark',
    'arya@gmail.com',
    '+187203801',
    'Marketing User',
    '11-08-2022',
    'RERA'
  ),
  createData(
    'PR1231234',
    'featured',
    comp3,
    'Khidmah',
    'Broker Company',
    'REG-293847',
    'Arya Stark',
    'arya@gmail.com',
    '+187203801',
    'Marketing User',
    '11-08-2022',
    'RERA'
  ),
  createData(
    'PR1231234',
    'featured',
    comp4,
    'Khidmah',
    'Broker Company',
    'REG-293847',
    'Arya Stark',
    'arya@gmail.com',
    '+187203801',
    'Marketing User',
    '11-08-2022',
    'RERA'
  )
];
// =========================||international Company listings ||========================= //

export default function LocalCompanyList() {
  const theme = useTheme();

  return (
    <Grid container spacing={gridSpacing} fullWidth>
      <Grid item xs={12}>
        <MainCard title="International Company List" content={false}>
          <TableContainer>
            <Table
              sx={{ minWidth: 350 }}
              aria-label="Company List"
              pagination
              pageSize={5}
              rowsPerPageOptions={[5]}
              rowCount={100}
              paginationMode="server"
            >
              <TableHead>
                <TableRow>
                  <TableCell sx={{ pl: 4 }}>ID</TableCell>
                  <TableCell>Featured Status</TableCell>
                  <TableCell>Logo</TableCell>
                  <TableCell>Company Name</TableCell>
                  <TableCell>Company Type</TableCell>
                  <TableCell>REG ID</TableCell>
                  <TableCell align="center">Contact Person</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">Phone#</TableCell>
                  <TableCell align="center">Added by</TableCell>
                  <TableCell align="center">Subscription Start Date</TableCell>
                  <TableCell align="center">Documents</TableCell>
                  <TableCell align="center" sx={{ pr: 3 }}>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow hover key={index}>
                    <TableCell sx={{ pl: 3 }}>{row.companyId}</TableCell>
                    <TableCell align="center">
                      <Chip chipcolor={row.statuscolor} label={row.featuredStatus} size="small" />
                    </TableCell>
                    <TableCell>
                      <CardMedia component="img" image={row.companyLogo} title="image" sx={{ width: 70, height: 'auto' }} />
                    </TableCell>
                    <TableCell>{row.companyName}</TableCell>
                    <TableCell align="right">{row.companyType}</TableCell>
                    <TableCell align="center">{row.RegId}</TableCell>
                    <TableCell align="center"> {row.contactPerson}</TableCell>
                    <TableCell align="center">{row.email}</TableCell>
                    <TableCell align="center">{row.phone}</TableCell>
                    <TableCell align="center">{row.addedBy}</TableCell>
                    <TableCell align="center">{row.subscriptionDate}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        sx={{
                          background: theme.palette.success.dark,
                          '&:hover': { background: theme.palette.success.main }
                        }}
                      >
                        VIEW RERA
                      </Button>
                      <Button
                        variant="contained"
                        sx={{
                          background: theme.palette.warning.dark,
                          '&:hover': { background: theme.palette.warning.main },
                          color: 'black.900'
                        }}
                      >
                        VIEW LICENSE
                      </Button>
                    </TableCell>
                    <TableCell align="center" sx={{ pr: 8 }}>
                      <Stack direction="row" justifyContent="center" alignItems="center">
                        <IconButton color="primary" size="large" aria-label="edit">
                          <EditOutlinedIcon />
                        </IconButton>
                        <IconButton color="inherit" size="large" aria-label="delete">
                          <DeleteOutlineOutlinedIcon />
                        </IconButton>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Pagination count={10} color="secondary" />
          <CardActions sx={{ justifyContent: 'flex-end' }}>
            <Button variant="text" size="large">
              View All Companies
            </Button>
          </CardActions>
        </MainCard>
      </Grid>
    </Grid>
  );
}
