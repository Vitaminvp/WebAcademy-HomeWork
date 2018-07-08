export class Ajax {
    static get( url, responseCallback ){
        const xhr  = new XMLHttpRequest();
        const timeout = 15000;
        const timer = setTimeout( () => {
            xhr.abort();
        }, timeout);
        xhr.open('GET', url);
        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4 && xhr.status == 200){
                clearTimeout(timer);
                responseCallback(JSON.parse(xhr.response));
            }
        };
        xhr.send();
    }
    static post( url, data, callback ){
        const xhr  = new XMLHttpRequest();
        const timeout = 15000;
        const timer = setTimeout( () => {
            xhr.abort();
        }, timeout);
        xhr.open('GET', url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4 && xhr.status == 200){
                clearTimeout(timer);
                callback( JSON.parse(xhr.responseText) );
            } else {
                throw Error(xhr.responseText);
            }
        };
        xhr.send();
    }
}