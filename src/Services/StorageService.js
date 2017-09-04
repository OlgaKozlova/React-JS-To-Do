export const save = (id, data) => {
    window.localStorage.setItem(id, JSON.stringify(data));
};

export const remove = (id) => {
    window.localStorage.removeItem(id);
};

export const getById = (id) => {
    window.localStorage.get(id);
};

export const getAll = () => {
    window.LocalStorage.get();
};
