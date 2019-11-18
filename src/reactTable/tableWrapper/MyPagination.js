import React, {Fragment} from "react";

const MyPagination = (props) => {
    const { pageCount, gotoPage, canNextPage, pageIndex, canPreviousPage, pageOptions, pageSize, setPageSize} = props;

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

    return (
        <Fragment>
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


export default MyPagination;
