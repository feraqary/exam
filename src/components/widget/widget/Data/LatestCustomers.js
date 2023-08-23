import React, { useMemo } from 'react';

// MRT Imports
import MaterialReactTable from 'material-react-table';

// Material-UI Imports
import { Box, Button, ListItemIcon, MenuItem, Typography } from '@mui/material';

// Date Picker Imports
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// Icons Imports
import { AccountCircle, Send } from '@mui/icons-material';

// Mock Data
const Example = () => {
  const columns = useMemo(
    () => [
      {
        id: 'employee',
        header: 'Employee',
        columns: [
          {
            accessorFn: (row) => `${row.firstName} ${row.lastName}`,
            id: 'name',
            header: 'Name',
            size: 250,
            Cell: ({ renderedCellValue, row }) => (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <img alt="avatar" height={30} src={row.original.avatar} loading="lazy" style={{ borderRadius: '50%' }} />
                {/* using renderedCellValue instead of cell.getValue() preserves filter match highlighting */}
                <span>{renderedCellValue}</span>
              </Box>
            )
          },
          {
            accessorKey: 'email',
            enableClickToCopy: true,
            header: 'Email',
            size: 300
          }
        ]
      },
      {
        id: 'id',
        header: 'Job Info',
        columns: [
          {
            accessorKey: 'salary',
            // filterVariant: 'range', //if not using filter modes feature, use this instead of filterFn
            filterFn: 'between',
            header: 'Salary',
            size: 200,
            Cell: ({ cell }) => (
              <Box
                component="span"
                sx={(theme) => ({
                  borderRadius: '0.25rem',
                  color: '#fff',
                  maxWidth: '9ch',
                  p: '0.25rem'
                })}
              >
                {cell.getValue()?.toLocaleString?.('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0
                })}
              </Box>
            )
          },
          {
            accessorKey: 'jobTitle',
            header: 'Job Title',
            size: 350
          },
          {
            accessorFn: (row) => new Date(row.startDate),
            id: 'startDate',
            header: 'Start Date',
            filterFn: 'lessThanOrEqualTo',
            sortingFn: 'datetime',
            Cell: ({ cell }) => cell.getValue()?.toLocaleDateString(),
            Header: ({ column }) => <em>{column.columnDef.header}</em>,
            Filter: ({ column }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  onChange={(newValue) => {
                    column.setFilterValue(newValue);
                  }}
                  slotProps={{
                    textField: {
                      helperText: 'Filter Mode: Less Than',
                      sx: { minWidth: '120px' },
                      variant: 'standard'
                    }
                  }}
                  value={column.getFilterValue()}
                />
              </LocalizationProvider>
            )
          }
        ]
      }
    ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableColumnFilterModes
      enableColumnOrdering
      enableGrouping
      enablePinning
      enableRowActions
      enableRowSelection
      initialState={{ showColumnFilters: true }}
      positionToolbarAlertBanner="bottom"
      renderDetailPanel={({ row }) => (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center'
          }}
        >
          <img alt="avatar" height={200} src={row.original.avatar} loading="lazy" style={{ borderRadius: '50%' }} />
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4">Signature Catch Phrase:</Typography>
            <Typography variant="h1">&quot;{row.original.signatureCatchPhrase}&quot;</Typography>
          </Box>
        </Box>
      )}
      renderRowActionMenuItems={({ closeMenu }) => [
        <MenuItem
          key={0}
          onClick={() => {
            // View profile logic...
            closeMenu();
          }}
          sx={{ m: 0 }}
        >
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          View Profile
        </MenuItem>,
        <MenuItem
          key={1}
          onClick={() => {
            // Send email logic...
            closeMenu();
          }}
          sx={{ m: 0 }}
        >
          <ListItemIcon>
            <Send />
          </ListItemIcon>
          Send Email
        </MenuItem>
      ]}
      renderTopToolbarCustomActions={({ table }) => {
        const handleDeactivate = () => {
          table.getSelectedRowModel().flatRows.map((row) => {
            alert(`deactivating ${row.getValue('name')}`);
            return null;
          });
        };

        const handleActivate = () => {
          table.getSelectedRowModel().flatRows.map((row) => {
            alert(`activating ${row.getValue('name')}`);
            return null;
          });
        };

        const handleContact = () => {
          table.getSelectedRowModel().flatRows.map((row) => {
            alert(`contact ${row.getValue('name')}`);
            return null;
          });
        };

        return (
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Button color="error" disabled={!table.getIsSomeRowsSelected()} onClick={handleDeactivate} variant="contained">
              Deactivate
            </Button>
            <Button color="success" disabled={!table.getIsSomeRowsSelected()} onClick={handleActivate} variant="contained">
              Activate
            </Button>
            <Button color="info" disabled={!table.getIsSomeRowsSelected()} onClick={handleContact} variant="contained">
              Contact
            </Button>
          </div>
        );
      }}
    />
  );
};

export default Example;
