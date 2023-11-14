const baseURL = 'http://localhost:3030/jsonstore';

export const getAllProperties = async () => {
    const response = await fetch(`${baseURL}/properties`);
    const result = await response.json();
    const data = Object.values(result);

    return data;
};

export const getProperty = async (id) => {
    const response = await fetch(`${baseURL}/properties/${id}`);
    const result = await response.json();
    const data = result;

    return data;
};

export const deleteProperty = async (id) => {
    
    const response = await fetch(`${baseURL}/properties/${id}`, {
        method: 'DELETE'
    });
    const result = await response.json();
    const data = result;

    return data;
};