import React from 'react';
import ControlledForm from './components/ControlledForm';
import ToggleText from './components/ToggleText';
import './App.css';

const App = () => (
    <div className="container mx-auto p-4">
        <ControlledForm />
        <ToggleText />
    </div>
);

export default App;
