import React, {useMemo, useState} from "react";

export interface ColumnI {
    filterValue: string,
    setFilter: Function,
    preFilteredRows: Array<any>,
    id: number,
    Header: string,
    accessor: string,
    filter?: string,
    show: boolean,
    disableFilters: boolean,
    Filter?: Function
};

type columnFilter = {
    column: {
        filterValue: string,
        setFilter: Function,
        preFilteredRows: Array<any>,
        id: number,
        Header: string,
        accessor: string,
        filter: string,
        show: boolean,
        disableFilters: boolean,
    }
};

type optionSelect = {
    option: string,
    index: number
}

const useCustomColumns = () => {
    const [columns, setColumns] = useState<Array<ColumnI>>(
        useMemo(
            () => [
                {
                    Header: 'First Name',
                    accessor: 'firstName',
                    filter: 'equals',
                    show: true,
                    filterValue: "",
                    setFilter: Function,
                    preFilteredRows: [],
                    disableFilters: false,
                    id: 0
                },
                {
                    Header: 'Last Name',
                    accessor: 'lastName',
                    show: true,
                    filterValue: "",
                    setFilter: Function,
                    preFilteredRows: [],
                    disableFilters: true,
                    id: 1,
                    Filter: ({column: {filterValue, setFilter, preFilteredRows, id}} : columnFilter) => {
                        // Calculate the options for filtering
                        // using the preFilteredRows
                        useMemo(() => {
                            const options = new Set()
                            preFilteredRows.forEach(row => {
                                options.add(row.values[id])
                            })
                            return [...options.values()]
                        }, [id, preFilteredRows])

                        // Render a multi-select box
                        return (
                            <input/>
                        )
                    }
                    // Use our custom `fuzzyText` filter on this column
                    // filter: 'fuzzyText',
                }
            ],
            []
        )
    );

    const updateColumns = (colId: string): void => {

        const resultColumn = columns.map((col : any, index : number) => {
            if(col.accessor === colId) {
                col.show = false;
                return col;
            }
            else return col;
        });
        setColumns(resultColumn);
    };

    return {columns, updateColumns};
};


export default useCustomColumns;
