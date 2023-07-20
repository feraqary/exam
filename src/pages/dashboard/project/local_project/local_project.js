// material-ui
import { Grid, Box} from '@mui/material';
// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import { useGetLocalProjectQuery } from 'store/services/project/projectApi';
import Table from 'components/Table/Table';
import { useEffect } from 'react';

// ===========================|| Local Project Managment list||=========================== //


const Transition = React.forwardRef(function Transition(props, ref){
  return <Transition direction="up" ref={ref} {...props} />;
});

const localProjects = () => 
{
  const [docsOpen, setDocsOpen] = useState(false);
  const [docsCrid, setDocsCrid] = useState({comp: null, id:null});
  const [pagination, setPagination] = useState ({
  pageIndex:0, 
  pageSize:5
});
  const { data: localProjectsData , isError , error, isLoading, isFetching} = useGetLocalProjectQuery(pagination);
  const [ blockProjects, result] = useUpdateProjectStatusMutation();

  console.log( 'Local ===> ', result );

  useEffect(() => {
    if (result.isSuccess) {
      ToastSuccess ('Project has been Successfully Blocked');
  }
}, [result.isSuccess]
  );
  const handleDocsOpen = () => {
    setDocsOpen(true);
  }
  const handleDocsClose = () => {
    setDocsOpen(false);
  };
const ColumnHeaders = [
  {
    accessorKey: 'ID',
    header: 'Project ID '
  },
  {
    accessorKey: 'RankID',
    header: 'Project Rank'
  },
  {
    accessorKey: 'featured',
    header: 'Featured'
  },
  {
    accessorKey: 'ProjectName',
    header: 'Project Name'
  },
  {
    accessorKey: 'Country',
    header: 'country'
  },
  {
    accessorKey: 'DeveloperCompany',
    header: 'Developer Company'
  },
  {
    accessorKey: 'Rating',
    header: 'Rating'
  },
  {
    accessorKey: 'NoOfPhases',
    header: 'Number of Phases'
  },

  {
    accessorKey: 'PhaseType',
    header: 'Phase Type'
  },
  {
    accessorKey: 'Phases',
    header: 'Phases'
  },
  {
    accessorKey: 'QualityScore',
    header: ''
  },
  {
    accessorKey: 'endis',
    header: 'Enable / Disable'
  },
  { accessorKey: 'qualityScore', 
  header: 'Quality Score' 
},
  {
    accessorKey: 'action',
    header: 'Action',
    Cell: ({ renderedCellValue, row }) => {
     const [open , setOpen] = useState(false);
     const handleClickOpen = () => {
      setOpen(true);
     };
     const handleClose = () => {
      setOpen(false);
     };


     const handleBlock = () => {
      const formData = new FormData();
      formData.append('project_id', row.original.ID);
      formData.append();
      formData.append();
      formData.append();
      formData.append();
      blockProjects(formData);

     };
     return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}
      >
        <Image  src= {'http://20.203.31.58/upload/${row.original.ProjectLogo'} alt="project logo" width={60} height= {30}/>
        </Box>
        );
      }
  },

];

const data = [
  {
    projectName: 'Dubai Holding',
    developerCompany: 'Marketing Company',
    featured: 'standard',
    location: 'UAE',
    proId: 'PA283102',
    rating: 'Arya Stark',
    endis: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Winterfell',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded'
  },
  {
    projectName: 'BlueStone',
    developerCompany: 'Developer Company',
    featured: 'standard',
    location: 'USA',
    proId: 'PA283102',
    rating: 'Joffery',
    endis: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Lannisters',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded'
  }
];

const IntCompData = () => (
  <Page title="Local Project List">
    <ToastContainer />
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Table columnHeaders={ColumnHeaders} 
        data={error ? [] : localProjectsData?.data || [] }
        loading = {isLoading}
        pagination={pagination}
        setPagination={setPagination}
        isFetching={isFetching}
        rowCount= {localProjectsData?.Total}
         />
      </Grid>
    </Grid>
  </Page>
);

IntCompData.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default IntCompData;
