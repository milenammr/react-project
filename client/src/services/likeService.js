import * as request from '../lib/request';

const baseURL = 'http://localhost:3030/data/likes';

export const getAll = async (ownerId) => {
    const query = new URLSearchParams({
        where: `_ownerId="${ownerId}"`,
    });

    const result = await request.get(`${baseURL}?${query}`, );

    return result;
}

export const getLiked = async (propertyId, ownerId) => {
    
    const query = encodeURIComponent(`propertyId="${propertyId}" and _ownerId="${ownerId}"`)

    const result = await request.get(`${baseURL}?where=${query}`);

    return result;
};

export const create = async (propertyId, like) => {
    const result = await request.post(baseURL, {
        propertyId,
        like,
    });

    return result;
};

export const remove = async (likeId) => {
    const result = await request.remove(`${baseURL}/${likeId}`);

    return result;
}