import React from 'react'
import styled from 'styled-components'
import {useTable, useFilters, useSortBy} from 'react-table'
// A great library for fuzzy filtering/sorting items
import matchSorter from 'match-sorter'

import makeData from './makeData'

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

// Our table component
const Table = ({columns, data, props}) => {

    const defaultColumn = React.useMemo(
        () => ({
            // Let's set up our default Filter UI
            Filter: ({column: {filterValue, preFilteredRows, setFilter}}) => {
                const count = preFilteredRows.length;

                return (
                    <input
                        value={filterValue || ''}
                        onChange={e => {
                            setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
                        }}
                        placeholder={`Search ${count} records...`}
                    />
                )
            },
        }),
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
    } = useTable(
        {
            columns,
            data,
            defaultColumn, // Be sure to pass the defaultColumn option
            // filterTypes,
        },
        useFilters, // useFilters!
        useSortBy  // sort columns!
    );

    // We don't want to render all of the rows for this example, so cap
    // it for this use case
    const firstPageRows = rows.slice(0, 10)

    return (
        <>
            <div>
        <pre>
          <code>{JSON.stringify(state.filters, null, 2)}</code>
        </pre>
            </div>
            <table {...getTableProps()}>
                <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>
                                {/* Render the columns filter UI */}
                                <div>{column.canFilter ? column.render('Filter') : null}</div>


                                {/* Add a sort direction indicator */}
                                <span {...column.getSortByToggleProps()}>
                                     {column.render('Header')}
                                    {column.isSorted
                                        ? column.isSortedDesc
                                            ? ' 🔽'
                                            : ' 🔼'
                                        : ''}
                                  </span>

                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {firstPageRows.map(
                    (row, i) =>
                        prepareRow(row) || (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    )
                                })}
                            </tr>
                        )
                )}
                </tbody>
            </table>
            <br/>
            <div>Showing the first 20 results of {rows.length} rows</div>
        </>
    )
}

const TableComponent = ({useCustomColumns, ...props}) => {

    const data = React.useMemo(() => makeData(100), [])

    return (
        <Styles>
            <Table {...props} columns={useCustomColumns()} data={data}/>
        </Styles>
    )
}

export default TableComponent
