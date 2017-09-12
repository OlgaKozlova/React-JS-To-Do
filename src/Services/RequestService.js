const HTTP_METHODS = {
    GET: 'GET',
};

const makeRequest = (method, url) => new Promise(
    ((resolve, reject) => {
        const xhr = new window.XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(JSON.parse(xhr.response));
            } else {
                reject({
                    status: xhr.status,
                    statusText: xhr.statusText,
                });
            }
        };
        xhr.onerror = () => {
            reject({
                status: xhr.status,
                statusText: xhr.statusText,
            });
        };
        xhr.send();
    }));

export const getRequest = async url => makeRequest(HTTP_METHODS.GET, url);
