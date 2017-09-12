const APP_PREFIX = '$$APP_';
export const save = (id, data) => {
    window.localStorage.setItem(`${APP_PREFIX}${id}`, JSON.stringify(data));
};

export const remove = (id) => {
    window.localStorage.removeItem(`${APP_PREFIX}${id}`);
};

export const getById = (id) => {
    window.localStorage.get(`${APP_PREFIX}${id}`);
};

export const getItemsOfType = (type) => {
    const allData = window.localStorage;
    return Object.keys(allData)
        .filter(key => key.startsWith(`${APP_PREFIX}${type}`))
        .map(key => JSON.parse(allData[key]));
};
