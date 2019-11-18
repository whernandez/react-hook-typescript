import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import {FaSortDown, FaSortUp} from "react-icons/fa";

const MyTable = (props) => {
    const {getTableProps, headerGroups, getTableBodyProps, prepareRow, page} = props;
    return (
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
                                style: i % 2 !== 0 ? {backgroundColor: 'black'} : {}
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
    )
};

export default MyTable;
