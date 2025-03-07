import React from 'react';

const App = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='p-6 max-w-md w-full bg-white shadow-md rounded-2xl'>
        <h1 className='text-2xl font-bold mb-4'>Simple React Application</h1>
        <p className='mb-6'>This is a simple React app with a card and a button.</p>
        <button className='px-4 py-2 bg-blue-500 text-white rounded-2xl hover:bg-blue-600'>
          Click Me
        </button>
      </div>
    </div>
  );
};

export default App;
