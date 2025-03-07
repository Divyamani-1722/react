import React, { useState } from 'react';

const ControlledForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div className="p-4 bg-white shadow rounded">
            <h2 className="text-2xl mb-4">Controlled Form</h2>
            
            <form>
                <div className="mb-4">
                    <label className="block mb-1" htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border p-2 w-full"
                        placeholder="Enter your name"
                    />
                </div>
                
                <div className="mb-4">
                    <label className="block mb-1" htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border p-2 w-full"
                        placeholder="Enter your email"
                    />
                </div>
            </form>

            <div className="mt-4 p-2 bg-gray-100 rounded">
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
            </div>
        </div>
    );
};

export default ControlledForm;
