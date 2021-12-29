import { FC } from 'react';

const Label: FC<{ label: string }> = ({ label }) => {
    const bugClasses = 'bg-red-400 text-white';
    const featureClasses = 'bg-red-400 text-white';
    const defaultClasses = 'text-black';
    return (
        <div
            className={`rounded-full p-2 ${
                label === 'bug' ? bugClasses : label === 'feature' ? featureClasses : defaultClasses
            }`}
        >
            {label}
        </div>
    );
};

export default Label;
