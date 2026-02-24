import React from 'react';

const LoadingSpinner = ({ size = 'md', color = 'purple' }) => {
    const sizeClasses = {
        sm: 'h-4 w-4',
        md: 'h-8 w-8',
        lg: 'h-12 w-12'
    };

    const colorClasses = {
        purple: 'border-purple-600',
        white: 'border-white',
        gray: 'border-gray-600'
    };

    return (
        <div className="flex justify-center items-center">
            <div
                className={`${sizeClasses[size]} ${colorClasses[color]} border-t-transparent animate-spin rounded-full border-4`}
                role="status"
                aria-label="loading"
            >
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default LoadingSpinner; 