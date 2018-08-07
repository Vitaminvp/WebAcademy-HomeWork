export class Ajax {
    static get(url, responseCallback) {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', url);
        xhr.send();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log("ajax", JSON.parse(xhr.response));
                    responseCallback(JSON.parse(xhr.response));
                }
            }
        }
    }

    static post(url, data, responseCallback) {
        const xhr = new XMLHttpRequest();

        xhr.open('POST', url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    responseCallback(JSON.parse(xhr.response));
                } else {
                    throw Error(xhr.responseText);
                }
            }
        }
    }

    static put(url, data, successCallback) {
        const xhr = new XMLHttpRequest();

        xhr.open('PUT', url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    successCallback(JSON.parse(xhr.response));
                }
            }
        }
    }

    static delete(url, successCallback) {
        const xhr = new XMLHttpRequest();

        xhr.open('DELETE', url);
        xhr.send();

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    successCallback(JSON.parse(xhr.response));
                }
            }
        }
    }
}