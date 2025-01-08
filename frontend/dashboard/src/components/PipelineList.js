import React, { useEffect, useState } from 'react';
import { fetchPipelines } from '../api/pipelineService';

function PipelineList() {
    const [pipelines, setPipelines] = useState([]);

    useEffect(() => {
        async function getPipelines() {
            const data = await fetchPipelines();
            setPipelines(data);
        }
        getPipelines();
    }, []);

    return (
        <div>
            <h2>Pipeline List</h2>
            <ul>
                {pipelines.map((pipeline) => (
                    <li key={pipeline._id}>
                        {pipeline.name} - {pipeline.location}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PipelineList;
