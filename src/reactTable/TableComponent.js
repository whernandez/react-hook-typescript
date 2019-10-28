import React, {Fragment} from 'react'
// import styled from 'styled-components'
import {useTable, useFilters, useSortBy, usePagination} from 'react-table';
import {FaSortUp, FaSortDown} from 'react-icons/fa';
// A great library for fuzzy filtering/sorting items
// import matchSorter from 'match-sorter';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

import makeData from './makeData'

// Our table component
const Table = ({columns, data, sortIcons, props}) => {

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
        page, // Instead of using 'rows', we'll use page,
        // which has only the rows for the active page

        // The rest of these things are super handy, too ;)
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: {pageIndex, pageSize},

        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
        {
            columns,
            data,
            defaultColumn, // Be sure to pass the defaultColumn option
            // filterTypes,
            initialState: {pageIndex: 0},
        },
        useFilters, // useFilters!
        useSortBy,  // sort columns!
        usePagination // for pagination
    );

    const getPagination = () => {
        //let i = pageIndex;
        let item = [];
        if(pageIndex < 4) {
            for(let i=0; i < pageCount; i++) {
                if(i < 5) {
                    item.push(
                        <button key={parseInt(i+1)} type="button" className="btn btn-white" onClick={() => gotoPage(i)} disabled={i === pageIndex}>
                            <i className="fa fa-chevron-left"/>{parseInt(i+1)}</button>
                    );
                }
                if(i === 6) {
                    item.push(
                        <button key={parseInt(i+1)} type="button" className="btn btn-white" disabled={true}>
                            <i className="fa fa-chevron-left"/>...</button>
                    );
                }
            }
        }
        else {
            const index = (pageIndex + 4) >= pageCount ? pageCount - 4 : pageIndex ;
            console.log(index);
            item.push(
                <button key={index} type="button" disabled={(pageIndex - 6) === pageIndex} className="btn btn-white" onClick={() => gotoPage(parseInt(pageIndex - 1))}>
                    <i className="fa fa-chevron-left"/>{index}</button>
            );
            for(let i=index; i < pageCount; i++) {
                if(i < parseInt(pageIndex + 4) && i < pageCount - 1) {
                    item.push(
                        <button key={parseInt(i+1)} type="button" className="btn btn-white" onClick={() => gotoPage(i)} disabled={i === pageIndex}>
                            <i className="fa fa-chevron-left"/>{parseInt(i+1)}</button>
                    );
                }
                if(i === parseInt(pageIndex + 4)) {
                    item.push(
                        <button key={parseInt(i+1)} type="button" className="btn btn-white" disabled={true}>
                            <i className="fa fa-chevron-left"/>...</button>
                    );
                }
            }
        }
        return item;
    };

    // We don't want to render all of the rows for this example, so cap
    // it for this use case
    //const firstPageRows = rows.slice(0, 10)

    return (
        <Fragment>
            <PerfectScrollbar>
                <table {...getTableProps({
                    className: "footable table table-striped toggle-arrow-tiny table-bordered table-hover"
                })}>
                    <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>
                                    {/* Render the columns filter UI */}
                                    <div style={{paddingBottom: 'inherit'}}>{column.canFilter ? column.render('Filter') : null}</div>

                                    {/* Add a sort direction indicator */}
                                    <span {...column.getSortByToggleProps()}>
                  {column.render('Header')}
                                        {' '}
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? <FaSortUp/>
                                                : <FaSortDown/>
                                            : ''}
                </span>

                                </th>
                            ))}
                        </tr>
                    ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                    {page.map(
                        (row, i) =>
                            prepareRow(row) || (
                                <tr {...row.getRowProps({
                                    className: i % 2 !== 0 ? "footable-odd" : ''
                                })}>
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
            </PerfectScrollbar>

            <div className={'row'}>
                <div className={'col-sm-12 text-center'}>
                    <div className="btn-group">
                        <button key={'<<'} type="button" className="btn btn-white" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                            {"<<"}
                        </button>
                        <button key={'<'} type="button" className="btn btn-white" onClick={() => gotoPage(pageIndex - 1)} disabled={!canPreviousPage}>
                            {"<"}
                        </button>
                        {
                            getPagination()
                        }
                        <button key={pageCount} type="button" className="btn btn-white" onClick={() => gotoPage(pageCount - 1)}
                                disabled={!canNextPage}>
                            {pageCount}
                        </button>
                        <button key={'>'} type="button" className="btn btn-white" onClick={() => gotoPage(pageIndex + 1)} disabled={!canNextPage}>
                            {">"}
                        </button>
                        <button key={parseInt(pageCount+1)} type="button" className="btn btn-white" onClick={() => gotoPage(pageCount - 1)}
                                disabled={!canNextPage}>
                            {">>"}
                        </button>
                    </div>
                </div>
            </div>
            <div className={'row'}>
                <div className={'col-sm-12 text-center'} style={{marginTop: '5px'}}>
              <span>
                Page{' '}
                  <strong>
                  {pageIndex + 1} of {pageOptions.length}
                </strong>{' '}
              </span>

                    <span>
              | Go to page:{' '}
                        <input
                            className={'inputTableFilters'}
                            type="number"
                            value={pageIndex + 1}
                            onChange={e => {
                                const page = e.target.value ? Number(e.target.value) - 1 : 0
                                gotoPage(page)
                            }}
                            style={{width: '100px'}}
                        />
              </span>{' '}
                    <select
                        style={{width: '75px !important'}}
                        className={'inputTableFilters'}
                        value={pageSize}
                        onChange={e => {
                            setPageSize(Number(e.target.value))
                        }}
                    >
                        {[10, 20, 30, 40, 50].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))}
                    </select>

                </div>
            </div>
        </Fragment>
    )
};

const TableComponent = ({columns, ...props}) => {

    const data = React.useMemo(() => makeData(50), []);

    return (
        <Table columns={columns} data={data}/>
    )
};

export default TableComponent
