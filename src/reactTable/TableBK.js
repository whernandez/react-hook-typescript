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

// Define a default UI for filtering
function DefaultColumnFilter({
                                 column: {filterValue, preFilteredRows, setFilter},
                             }) {
    const count = preFilteredRows.length

    return (
        <input
            value={filterValue || ''}
            onChange={e => {
                setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
            }}
            placeholder={`Search ${count} records...`}
        />
    )
}





// Our table component
function Table({columns, data}) {

    // const filterTypes = React.useMemo(
    //     () => ({
    //         // Add a new fuzzyTextFilterFn filter type.
    //         fuzzyText: fuzzyTextFilterFn,
    //         // Or, override the default text filter to use
    //         // "startWith"
    //         text: (rows, id, filterValue) => {
    //             return rows.filter(row => {
    //                 const rowValue = row.values[id]
    //                 return rowValue !== undefined
    //                     ? String(rowValue)
    //                         .toLowerCase()
    //                         .startsWith(String(filterValue).toLowerCase())
    //                     : true
    //             })
    //         },
    //     }),
    //     []
    // )

    const defaultColumn = React.useMemo(
        () => ({
            // Let's set up our default Filter UI
            Filter: DefaultColumnFilter,
        }),
        []
    )

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
    )

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

// Define a custom filter filter function!
/*function filterGreaterThan(rows, id, filterValue) {
    return rows.filter(row => {
        const rowValue = row.values[id]
        return rowValue >= filterValue
    })
}*/

// This is an autoRemove method on the filter function that
// when given the new filter value and returns true, the filter
// will be automatically removed. Normally this is just an undefined
// check, but here, we want to remove the filter if it's not a number
/*filterGreaterThan.autoRemove = val => typeof val !== 'number'*/

function TableComponent() {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Name',
                columns: [
                    {
                        Header: 'First Name',
                        accessor: 'firstName',
                    },
                    {
                        Header: 'Last Name',
                        accessor: 'lastName',
                        disableFilters: true
                        // Use our custom `fuzzyText` filter on this column
                        // filter: 'fuzzyText',
                    },
                ],
            },
            {
                Header: 'Info',
                columns: [
                    {
                        Header: 'Age',
                        accessor: 'age',
                        disableFilters: true

                        // Filter: SliderColumnFilter,
                        // filter: 'equals',
                    },
                    {
                        Header: 'Visits',
                        accessor: 'visits',
                        disableFilters: true

                        // Filter: NumberRangeColumnFilter,
                        // filter: 'between',
                    },
                    {
                        Header: 'Status',
                        accessor: 'status',
                        disableFilters: true

                        // Filter: SelectColumnFilter,
                        // filter: 'includes',
                    },
                    {
                        Header: 'Profile Progress',
                        accessor: 'progress',
                        disableFilters: true

                        /* Filter: SliderColumnFilter,
                         filter: filterGreaterThan,*/
                    },
                ],
            },
        ],
        []
    )

    const data = React.useMemo(() => makeData(100), [])

    return (
        <Styles>
            <Table columns={columns} data={data}/>
        </Styles>
    )
}

export default TableComponent
