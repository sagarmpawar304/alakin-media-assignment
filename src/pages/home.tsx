import { FC } from 'react';
import IssuesListItem from '../components/componentIssueItem';
import SuspenseLoading from '../components/componentSuspenseLoading';
import useGetIssues from '../hooks/useGetIssues';

const Home: FC = () => {
    const { issuesState, increamentPageNumber, decreamentPageNumber } = useGetIssues();

    return (
        <div className='container mx-auto'>
            {issuesState === undefined && <SuspenseLoading />}
            {issuesState && issuesState?.length > 0 && (
                <div className='border border-gray-300 rounded last:border-b-0'>
                    {issuesState.map((data) => {
                        return (
                            <div key={data.number} className='border-b border-gray-300'>
                                <IssuesListItem {...data} />
                            </div>
                        );
                    })}
                </div>
            )}
            <button onClick={increamentPageNumber}>increament</button>
            <button onClick={decreamentPageNumber}>decreament</button>
        </div>
    );
};

export default Home;
