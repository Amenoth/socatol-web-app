import React from 'react';

// DX React Grid
import {
  // Sorting
  SortingState,
  IntegratedSorting,
  // Search
  SearchState,
  IntegratedFiltering,
  // GroupRow
  GroupingState,
  IntegratedGrouping,
  // Pagination
  PagingState,
  IntegratedPaging
} from '@devexpress/dx-react-grid';

// DX React Grid Material
import {
  Grid,
  Table,
  Toolbar,
  TableHeaderRow,
  // Search
  SearchPanel,
  // GroupRow
  TableGroupRow,
  GroupingPanel,
  DragDropProvider,
  // Pagination
  PagingPanel
} from '@devexpress/dx-react-grid-material-ui';

// Material UI
import { TableRow, Paper, withStyles } from '@material-ui/core';

import styles from './styles';

const DataTable = props => {
  const { columns, rows, handleClick } = props;
  const onClick = handleClick ? value => () => handleClick(value) : null;
  const tableColumnExtensions = [
    {
      columnName: 'name',
      align: 'left'
    },
    {
      columnName: 'iva',
      align: 'right'
    },
    {
      columnName: 'stock',
      align: 'right'
    },
    {
      columnName: 'price',
      align: 'right'
    },
    {
      columnName: 'date',
      align: 'left',
      width: 116
    },
    {
      columnName: 'ref',
      align: 'left',
      width: 150
    },
    {
      columnName: 'concept',
      align: 'left'
    },
    {
      columnName: 'amount',
      align: 'right'
    }
  ];
  return (
    <Paper>
      <Grid rows={rows} columns={columns}>
        <DragDropProvider />
        <SearchState />
        <SortingState
          defaultSorting={[{ columnName: 'name', direction: 'asc' }]}
        />
        <GroupingState />
        <PagingState defaultCurrentPage={0} defaultPageSize={10} />

        <IntegratedSorting />
        <IntegratedFiltering />
        <IntegratedGrouping />
        <IntegratedPaging />

        <Table
          rowComponent={({ children, row }) => (
            <TableRow
              hover
              style={{ cursor: 'pointer' }}
              onClick={onClick && onClick(row)}>
              {children}
            </TableRow>
          )}
          messages={{ noData: 'No se encontraron datos' }}
          columnExtensions={tableColumnExtensions}
        />

        <TableHeaderRow
          showSortingControls
          messages={{ sortingHint: 'Ordenar' }}
        />
        <PagingPanel
          pageSizes={[10, 25, 50, 100]}
          messages={{
            rowsPerPage: 'Filas por página',
            info: '{from}-{to} de {count}'
          }}
        />
        <TableGroupRow />

        <Toolbar />
        <SearchPanel messages={{ searchPlaceholder: 'Buscar...' }} />
        <GroupingPanel
          showGroupingControls
          messages={{
            groupByColumn:
              'Arrastre un encabezado de columna aquí para agrupar por esa columna'
          }}
        />
      </Grid>
    </Paper>
  );
};

export default withStyles(styles)(DataTable);
