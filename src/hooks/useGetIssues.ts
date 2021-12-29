import { Issue } from './../types/issueTypes';
import { useState, useEffect } from 'react';
import { Octokit } from '@octokit/core';

const octokit = new Octokit();
const perPage = 40;

const useGetIssues = () => {
    const [issuesState, setIssuesState] = useState<Issue[] | undefined>(undefined);
    const [currentIssues, setCurrentIssues] = useState<Issue[]>([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [numOfPages, setNumOfPages] = useState(0);

    const increamentPageNumber = () => {
        setPageNumber((state) => Math.min(state + 1, numOfPages));
    };

    const decreamentPageNumber = () => {
        setPageNumber((state) => Math.max(state - 1, 1));
    };

    const setPage = (page: number) => {
        setPageNumber(page);
    };

    useEffect(() => {
        const getIssues = async function () {
            let pageNumber = 1;
            let next = true;
            while (next) {
                const { data } = await octokit.request('GET /repos/{owner}/{repo}/issues', {
                    owner: 'octocat',
                    repo: 'hello-world',
                    page: pageNumber,
                    per_page: 100,
                });

                const filtredData: Issue[] = data.map((info) => {
                    const { title, state, number, created_at, labels, user } = info;
                    const newLables = labels
                        .map((state) => {
                            if (typeof state === 'string') {
                                return state;
                            }
                            return '';
                        })
                        .filter(Boolean);
                    return {
                        title,
                        state,
                        number,
                        createdAt: created_at,
                        creator: user?.login ? user?.login : '',
                        labels: newLables,
                    };
                });

                if (!filtredData?.length) {
                    next = false;
                    break;
                }

                setCurrentIssues((state) => [...state, ...filtredData]);

                pageNumber += 1;
            }
        };

        getIssues();
    }, []);

    useEffect(() => {
        const length = currentIssues.length;
        if (length) {
            setNumOfPages(Math.floor(length / perPage));
            const start = pageNumber === 1 ? 0 : (pageNumber - 1) * perPage;
            const end = pageNumber === 1 ? 1 * perPage : pageNumber * perPage + 1;

            if (!pageNumber || !issuesState) {
                setIssuesState(currentIssues.slice(start, end));
            }
            if (pageNumber * perPage >= perPage) {
                setIssuesState(currentIssues.slice(start, end));
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIssues, pageNumber]);

    return {
        issuesState,
        numOfPages,
        increamentPageNumber,
        decreamentPageNumber,
        setPage,
        pageNumber,
    };
};

export default useGetIssues;
