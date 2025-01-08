import React from 'react';
import PipelineList from './components/PipelineList';
import AddPipeline from './components/AddPipeline';

function App() {
    return (
        <div>
            <h1>ALX Specialization Project</h1>
            <AddPipeline />
            <PipelineList />
        </div>
    );
}

export default App;
