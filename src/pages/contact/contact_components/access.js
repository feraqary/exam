import React, {useMemo}from 'react'

// project imports
import MaterialReactTable from 'material-react-table';





const data = [
    
]

export default function Access() {

    const columns = useMemo(
        () => [
        {
            accessorKey: 'name',
            header: 'Name'
        },
        ],
        []
    );

  return <MaterialReactTable columns={columns} data={data} enableDensityToggle={false} initialState={{ density: 'compact' }} />;
}
