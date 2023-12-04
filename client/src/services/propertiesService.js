import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/properties'

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return result;
};

export const getOne = async (propertyId) => {
    const result = await request.get(`${baseUrl}/${propertyId}`, );

    return result;
}

export const getAllPersonal = async (ownerId) => {
    const query = new URLSearchParams({
        where: `_ownerId="${ownerId}"`,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
}

export const getLatest = async () => {
    const query = new URLSearchParams({
        offset: 0,
        pageSize: 3,
    });

    const result = await request.get(`${baseUrl}?sortBy=_createdOn%20desc${query}`);

    return result;
}

export const create = async (propertyData) => {
    const result = await request.post(baseUrl, propertyData);

    return result;
};

export const edit = async (propertyId, propertyData) => {
    const result = await request.put(`${baseUrl}/${propertyId}`, propertyData);

    return result;
};

export const remove = async (propertyId) => {
    const result = await request.remove(`${baseUrl}/${propertyId}`, );

    return result;
}