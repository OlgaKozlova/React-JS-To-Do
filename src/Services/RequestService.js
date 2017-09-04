const HTTP_METHODS = {
    GET: 'GET',
};

const makeRequest = (method, url) => new Promise(
    ((resolve, reject) => {
        const xhr = new window.XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = () => {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText,
                });
            }
        };
        xhr.onerror = () => {
            reject({
                status: this.status,
                statusText: xhr.statusText,
            });
        };
        xhr.send();
    }));

export const getRequest = async url => makeRequest(HTTP_METHODS.GET, url);
