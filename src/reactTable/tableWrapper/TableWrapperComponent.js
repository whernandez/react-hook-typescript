import React from 'react';
import {useFilters, usePagination, useSortBy, useTable} from 'react-table';
import makeData from "../makeData";

const TableWrapperComponent = ({children, columns}) => {

    const data = React.useMemo(() => makeData(50), []);
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

    const TableProps = useTable(
        {
            columns: columns,
            data,
            defaultColumn, // Be sure to pass the defaultColumn option
            // filterTypes,
            initialState: {pageIndex: 0},
        },
        useFilters, // useFilters!
        useSortBy,  // sort columns!
        usePagination // for pagination
    );

    // let elements = React.cloneElement(children, { ...TableProps } );
    const elements = children.map((child, index) => React.cloneElement(child, {key: index, ...TableProps}))

    return <React.Fragment>{ elements }</React.Fragment>
};

export default TableWrapperComponent;
