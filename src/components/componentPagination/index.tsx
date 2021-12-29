import { FC } from 'react';
import IntermediatePagination from './componentIntermediatePagination';
import PaginationButton from './componentPaginationButton';

type Props = {
    numOfPages: number;
    pageNumber: number;
    increamentPage: VoidFunction;
    decreamentPage: VoidFunction;
    setPage(page: number): void;
};

const Pagination: FC<Props> = ({ numOfPages, increamentPage, decreamentPage, setPage, pageNumber }) => {
    const disabled = (currentpage: number) => (pageNumber === currentpage ? true : false);
    return (
        <div className='flex items-center justify-center'>
            <PaginationButton onClick={decreamentPage} disabled={disabled(1)}>
                <div className={`${disabled(1) ? '' : 'text-blue-400'}`}>{`<`} Previous</div>
            </PaginationButton>

            <div className='px-4 hidden sm:flex items-center'>
                <IntermediatePagination pageNumber={pageNumber} setPage={setPage} numOfPages={numOfPages} />
            </div>
            <PaginationButton onClick={increamentPage} disabled={disabled(numOfPages)}>
                <div className={`${disabled(numOfPages) ? '' : 'text-blue-400'}`}>Next {`>`}</div>
            </PaginationButton>
        </div>
    );
};

export default Pagination;
