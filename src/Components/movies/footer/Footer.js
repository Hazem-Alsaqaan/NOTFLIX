import React, { Fragment } from "react";
import ReactPaginate from "react-paginate";
import "./Footer.css";

const Footer = ({paginateHandle})=> {

    let handlePageClick = (data)=>{
        paginateHandle(data.selected + 1)
    }
    

    let pageCount = 500;
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
export default Footer;