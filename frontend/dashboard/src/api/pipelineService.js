const API_URL = 'http://localhost:5000/api/pipelines';

export async function fetchPipelines() {
    const response = await fetch(API_URL);
    return response.json();
}

export async function addPipeline(data) {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return response.json();
}
