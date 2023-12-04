const baseURL = 'http://localhost:3030/data/properties';

export const getAllProperties = async () => {
    const response = await fetch(`${baseURL}`);
    const result = await response.json();
    const data = Object.values(result);

    return data;
};

export const getProperty = async (id) => {
    const response = await fetch(`${baseURL}/${id}`);
    const result = await response.json();
    const data = result;

    return data;
};

export const deleteProperty = async (id) => {
    
    const response = await fetch(`${baseURL}/${id}`, {
        method: 'DELETE'
    });
    const result = await response.json();
    const data = result;

    return data;
};