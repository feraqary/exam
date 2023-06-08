import React, { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';

const Table = ({ columnHeaders, data }) => {
  const columns = useMemo(() => columnHeaders, []);
  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableDensityToggle={false}
      initialState={{ density: 'compact' }}
      muiTablePaperProps={{
        elevation: 0
      }}
      muiTableBodyCellProps={{
        sx: {
          borderRight: '1px solid #e0e0e0'
        }
      }}
      muiTableBodyProps={{
        sx: {
          '& tr:nth-of-type(odd)': {
            backgroundColor: '#f5f5f5'
          },
          borderRadius: '200'
        }
      }}
    />
  );
};

export default Table;
