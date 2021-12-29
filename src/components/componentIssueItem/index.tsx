import { FC } from 'react';
import { getMonthYearFormatedDate } from '../../functions/dateFunctions';
import { Issue } from '../../types/issueTypes';
import Label from './componentLabel';

const IssuesListItem: FC<Issue> = ({ title, labels, number, createdAt, creator, state }) => {
    return (
        <div className='p-3 cursor-pointer hover:bg-blue-50'>
            <div className='flex mb-2'>
                <h3 className='text-xl font-bold'>{title}</h3>
                <div className='ml-1'>
                    {labels?.length > 0 &&
                        labels.map((label, index) => {
                            return (
                                <div className='pr-2' key={index}>
                                    <Label label={label} />
                                </div>
                            );
                        })}
                </div>
            </div>

            <p className='text-gray-400 text-sm'>
                `#`{number} {state === 'open' ? 'opened' : state} on {getMonthYearFormatedDate(createdAt)} by{' '}
                {creator}
            </p>
        </div>
    );
};

export default IssuesListItem;
