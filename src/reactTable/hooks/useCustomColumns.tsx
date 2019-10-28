import React, {useMemo, useState} from "react";

interface IColumn {
    filterValue: string,
    setFilter: Function,
    preFilteredRows: Array<any>,
    id: number,
    Header: string,
    accessor: string,
    filter: string,
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
    const [columns, setColumns] = useState<Array<IColumn>>(
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
                    filter: '',
                    filterValue: "",
                    setFilter: Function,
                    preFilteredRows: [],
                    disableFilters: true,
                    id: 1,
                    Filter: ({column: {filterValue, setFilter, preFilteredRows, id}} : columnFilter) => {
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
                            <input/>
                        )
                    }
                    // Use our custom `fuzzyText` filter on this column
                    // filter: 'fuzzyText',
                }
            ],
            undefined
        )
    );

    const updateColumns = (colId: string): void => {

        const resultColumn = columns.map((col, index : number) => {
            console.log(col)
            if(col.accessor === colId) {
                col.show = false;
                return col;
            }
            else return col;
           return col;
        });
        setColumns(resultColumn);
    };

    return {columns, updateColumns};
};


export default useCustomColumns;