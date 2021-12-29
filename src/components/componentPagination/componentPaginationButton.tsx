import { FC } from 'react';

type Props = {
    onClick?: VoidFunction;
    disabled?: boolean;
};

const PaginationButton: FC<Props> = ({ children, onClick, disabled = false }) => {
    return (
        <button
            className={`rounded border border-transparent ${
                disabled ? 'text-gray-400' : 'hover:border-gray-300'
            } px-2`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default PaginationButton;
