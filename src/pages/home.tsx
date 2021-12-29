import { FC } from 'react';
import IssuesListItem from '../components/componentIssueItem';
import Pagination from '../components/componentPagination';
import SuspenseLoading from '../components/componentSuspenseLoading';
import useGetIssues from '../hooks/useGetIssues';

const Home: FC = () => {
    const { issuesState, increamentPageNumber, decreamentPageNumber, numOfPages, setPage, pageNumber } =
        useGetIssues();

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className='container mx-auto px-2 sm:px-0'>
            {issuesState === undefined && <SuspenseLoading />}
            {issuesState && issuesState?.length > 0 && (
                <>
                    <section className='py-6'>
                        <h1 className='text-4xl font-bold text-center'>Issues</h1>
                    </section>
                    <section className='border border-gray-300 rounded last:border-b-0'>
                        {issuesState.map((data) => {
                            return (
                                <div key={data.number} className='border-b border-gray-300'>
                                    <IssuesListItem {...data} />
                                </div>
                            );
                        })}
                    </section>

                    <section className='my-8'>
                        <Pagination
                            increamentPage={() => {
                                increamentPageNumber();
                                scrollToTop();
                            }}
                            decreamentPage={() => {
                                decreamentPageNumber();
                                scrollToTop();
                            }}
                            setPage={(page: number) => {
                                setPage(page);
                                scrollToTop();
                            }}
                            numOfPages={numOfPages}
                            pageNumber={pageNumber}
                        />
                    </section>
                </>
            )}
        </div>
    );
};

export default Home;
