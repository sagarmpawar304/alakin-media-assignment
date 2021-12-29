import React, { FC } from 'react';

type Props = {
    onClick?: VoidFunction;
    disabled?: boolean;
    pageNumber: number;
    currentNumber: number;
};
const PaginationPageButton: FC<Props> = ({ children, disabled, onClick, pageNumber, currentNumber }) => {
    return (
        <button
            className={`rounded border border-transparent mx-1 ${
                disabled ? 'text-gray-400' : 'hover:border-gray-300'
            } px-2 ${pageNumber === currentNumber ? 'bg-blue-300' : ''}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default PaginationPageButton;
