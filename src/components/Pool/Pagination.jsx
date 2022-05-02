// Code reference: https://github.com/mayankshubham/react-pagination
import React from 'react';
// import classnames from 'classnames';
import { usePagination, DOTS } from './usePagination';
// import './pagination.scss';

const Pagination = props => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    let lastPage = paginationRange[paginationRange.length - 1];

    const onNext = () => {
        if (currentPage < lastPage) {
            onPageChange(currentPage + 1);
        }
    };

    const onPrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    return (
        <div className='flex flex-row gap-5'>
            <div className='text-center h-7 w-7 rounded-full shadow-card hover:shadow-button-hover dark:hover:shadow-button-hover-dark dark:shadow-card-dark' onClick={onPrevious} > &#60; </div>
            {
                paginationRange.map(pageNumber => {
                    if (pageNumber === DOTS) {
                        return <div className='rounded-full'>&#8230;</div>;
                    }
                    return (
                        <div
                            className={currentPage === pageNumber ? 'text-center h-7 w-7 rounded-full shadow-button-hover dark:shadow-button-hover-dark' : 'text-center h-7 w-7 rounded-full shadow-card hover:shadow-button-hover dark:hover:shadow-button-hover-dark dark:shadow-card-dark'}
                            onClick={() => onPageChange(pageNumber)}
                        >
                            {pageNumber}
                        </div>
                    );
                })
            }
            <div className='text-center h-7 w-7 rounded-full shadow-card hover:shadow-button-hover dark:hover:shadow-button-hover-dark dark:shadow-card-dark' onClick={onNext} > &#62; </div>
        </div >
    );
};

export default Pagination;
