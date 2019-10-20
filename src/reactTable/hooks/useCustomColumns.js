import React, {useMemo, useState} from "react";

const useCustomColumns = () => {

    const [columns, setColumns] = useState(
        useMemo(
            () => [
                {
                    id: 'firstName',
                    Header: 'First Name',
                    accessor: 'firstName',
                    filter: 'equals',
                    show: true,
                },
                {
                    Header: 'Last Name',
                    accessor: 'lastName',
                    disableFilters: true
                    // Use our custom `fuzzyText` filter on this column
                    // filter: 'fuzzyText',
                },
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
                    Filter: ({column: {filterValue, setFilter, preFilteredRows, id}}) => {
                        // Calculate the options for filtering
                        // using the preFilteredRows
                        const options = useMemo(() => {
                            const options = new Set()
                            preFilteredRows.forEach(row => {
                                options.add(row.values[id])
                            })
                            return [...options.values()]
                        }, [id, preFilteredRows])

                        // Render a multi-select box
                        return (
                            <select
                                value={filterValue}
                                onChange={e => {
                                    setFilter(e.target.value || undefined)
                                }}
                            >
                                <option value="">All</option>
                                {options.map((option, i) => (
                                    <option key={i} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        )
                    }

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
            ]
        )
    );

    const updateColumns = (colId) => {
        const resultColumn = columns.map((col, index) => {
            if(col.id === colId) {
                col.show = false;
                return col;
            }
            else return col;
        });
        setColumns(resultColumn);
    };

    return [columns, updateColumns];
};


export default useCustomColumns;