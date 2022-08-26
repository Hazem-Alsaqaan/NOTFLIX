import React, { Fragment } from "react";
import ReactPaginate from "react-paginate";
import "../../movies/footer/Footer.css";

const FooterTv = ({paginatTv})=> {

    let handlePageClick = (data)=>{
        paginatTv(data.selected + 1)
    }
    

    let pageCount = 400;
    return (
        <Fragment>
                <div className="container-paginate">
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={2}
                        pageCount={pageCount}
                        previousLabel="< previous"
                        renderOnZeroPageCount={null}
                        containerClassName = "pagination"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        activeLinkClassName="active"
                    />
                </div>
        </Fragment>
    )
}
export default FooterTv;