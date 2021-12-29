import React, { FC } from 'react';
import PaginationButton from './componentPaginationButton';
import PaginationPageButton from './componentPaginationPageButton';

type Props = {
    pageNumber: number;
    setPage(page: number): void;
    numOfPages: number;
};

const IntermediatePagination: FC<Props> = ({ pageNumber, numOfPages, setPage }) => {
    const pagesArray = new Array(numOfPages).fill(0).map((_, index) => {
        return index + 1;
    });

    return (
        <>
            {/* show only for small screen */}
            <div className='flex md:hidden items-center'>
                <PaginationPageButton pageNumber={pageNumber} currentNumber={1} onClick={() => setPage(1)}>
                    1
                </PaginationPageButton>

                {pageNumber > 1 && pageNumber < numOfPages && (
                    <PaginationPageButton
                        pageNumber={pageNumber}
                        currentNumber={pageNumber}
                        onClick={() => setPage(pageNumber)}
                    >
                        {pageNumber}
                    </PaginationPageButton>
                )}

                <PaginationButton disabled={true}>...</PaginationButton>

                <PaginationPageButton
                    pageNumber={pageNumber}
                    currentNumber={numOfPages}
                    onClick={() => setPage(numOfPages)}
                >
                    {numOfPages}
                </PaginationPageButton>
            </div>

            {/* for large screens */}
            <div className='hidden md:flex items-center'>
                {pagesArray.length <= 7 &&
                    pagesArray.map((state) => {
                        return (
                            <PaginationPageButton
                                key={state}
                                pageNumber={pageNumber}
                                currentNumber={state}
                                onClick={() => setPage(state)}
                            >
                                {state}
                            </PaginationPageButton>
                        );
                    })}

                {pagesArray.length > 7 && (
                    // page number is less than equal to  5 from start
                    // intermediate
                    // page number is less than equal to 5 from end
                    <>
                        <PaginationPageButton
                            pageNumber={pageNumber}
                            currentNumber={1}
                            onClick={() => setPage(1)}
                        >
                            {1}
                        </PaginationPageButton>

                        <PaginationPageButton
                            pageNumber={pageNumber}
                            currentNumber={2}
                            onClick={() => setPage(2)}
                        >
                            {2}
                        </PaginationPageButton>

                        {/* page number still less than or equal to  5 */}
                        {pageNumber <= 5 &&
                            pagesArray.slice(2, 5).map((state) => {
                                return (
                                    <PaginationPageButton
                                        key={state}
                                        pageNumber={pageNumber}
                                        currentNumber={state}
                                        onClick={() => setPage(state)}
                                    >
                                        {state}
                                    </PaginationPageButton>
                                );
                            })}

                        <div className={`${pageNumber > 5 ? 'block' : 'hidden'}`}>
                            <PaginationButton disabled={true}>...</PaginationButton>
                        </div>

                        {/* middle pages */}
                        {pageNumber > 5 &&
                            pageNumber <= numOfPages - 5 &&
                            pagesArray.slice(pageNumber - 3, pageNumber + 2).map((state) => {
                                return (
                                    <PaginationPageButton
                                        key={state}
                                        pageNumber={pageNumber}
                                        currentNumber={state}
                                        onClick={() => setPage(state)}
                                    >
                                        {state}
                                    </PaginationPageButton>
                                );
                            })}

                        <div className={`${pageNumber <= numOfPages - 5 ? 'block' : 'hidden'}`}>
                            <PaginationButton disabled={true}>...</PaginationButton>
                        </div>

                        {pageNumber > numOfPages - 5 &&
                            pagesArray.slice(numOfPages - 5, numOfPages - 2).map((state) => {
                                return (
                                    <PaginationPageButton
                                        key={state}
                                        pageNumber={pageNumber}
                                        currentNumber={state}
                                        onClick={() => setPage(state)}
                                    >
                                        {state}
                                    </PaginationPageButton>
                                );
                            })}

                        <PaginationPageButton
                            pageNumber={pageNumber}
                            currentNumber={numOfPages - 1}
                            onClick={() => setPage(numOfPages - 1)}
                        >
                            {numOfPages - 1}
                        </PaginationPageButton>

                        <PaginationPageButton
                            pageNumber={pageNumber}
                            currentNumber={numOfPages}
                            onClick={() => setPage(numOfPages)}
                        >
                            {numOfPages}
                        </PaginationPageButton>
                    </>
                )}
            </div>
        </>
    );
};

export default IntermediatePagination;
