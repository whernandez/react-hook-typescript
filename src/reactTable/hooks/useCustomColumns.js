import React, {useMemo} from "react";

function useCustomColumns() {
    const columns = useMemo(
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
    );

    return columns;
}


export default useCustomColumns;