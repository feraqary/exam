// material-ui
import { Grid } from '@mui/material';
import { useState } from 'react';
// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUserRoles } from 'store/slices/Management_/action/users';
import { useEffect } from'react';
// ==============================||User Roles||============================== //
const data = [
  {
    user_id: '1',
    role: 'admin',
    code: 'ad',
  },
  {
    user_id: '5',
    role: 'admin',
    code: 'ad',
  },
  {
    user_id: '12',
    role: 'admin',
    code: 'ad',
  },
];

const ColumnHeaders = [
  {
    accessorKey: 'ID',
    header: 'User ID'
  },
  {
    accessorKey: 'Role',
    header: 'Role '
  },
  {
    accessorKey: 'Code',
    header: 'Code'
  }
];
function UserRoles() {

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });
 

  const dispatch = useDispatch();
  const { loading, error, users } = useSelector((state) => state.usermanagement);
  useEffect(() => {
    dispatch(getAllUserRoles());
    console.log("from page ",users);
  }, []);
  return (
    <Page title="User Roles">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table               
              data={data}
              columnHeaders={ColumnHeaders}
              loading={false}
              pagination={pagination}
              setPagination={setPagination}
              isFetching={false}
              rowCount={data.length}  />
        </Grid>
      </Grid>
    </Page>
  );
}
UserRoles.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default UserRoles;
