import React, { useState } from 'react';

const ToggleText = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="p-4 bg-white shadow rounded mt-6">
            <h2 className="text-2xl mb-4">Toggle Text</h2>
            <button
                onClick={() => setIsVisible(!isVisible)}
                className="bg-blue-500 text-white py-2 px-4 rounded"
            >
                {isVisible ? 'Hide Text' : 'Show Text'}
            </button>

            {isVisible && (
                <p className="mt-4 p-2 bg-gray-100 rounded">
                    This is the text that can be toggled!
                </p>
            )}
        </div>
    );
};

export default ToggleText;
