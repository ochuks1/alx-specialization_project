import React, { useState } from 'react';
import { addPipeline } from '../api/pipelineService';

function AddPipeline() {
    const [formData, setFormData] = useState({
        name: '',
        length: '',
        diameter: '',
        material: '',
        location: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addPipeline(formData);
        setFormData({ name: '', length: '', diameter: '', material: '', location: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Pipeline</h2>
            <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
            <input name="length" placeholder="Length" value={formData.length} onChange={handleChange} />
            <input name="diameter" placeholder="Diameter" value={formData.diameter} onChange={handleChange} />
            <input name="material" placeholder="Material" value={formData.material} onChange={handleChange} />
            <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
            <button type="submit">Add Pipeline</button>
        </form>
    );
}

export default AddPipeline;
