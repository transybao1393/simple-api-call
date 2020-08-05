import optionA from '../../responseType/optionA.json';

export default class MethodFactory {
    constructor() {
        this.baseUrl = 'https://jsonplaceholder.typicode.com/posts';
    }

    viewOptionAData() {
        return optionA;
    }

    async generalRequest(baseUrl, requestType, data = {}) {
        const options = {
            method: requestType, // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            // body: JSON.stringify(data) // body data type must match "Content-Type" header
        };

        // const BASE_URL = process.env.API_BASE_URL;
        // const COOKIE_NAME = process.env.COOKIE_KEY_NAME;
        // const options2 = {
        //     baseURL: BASE_URL + url,
        //     headers: {
        //         'Access-Control-Allow-Origin': '*',
        //         'Content-Type': 'application/json',
        //     },
        //     withCredentials: true,
        //     timeout: 10000,
        // };

        if (requestType !== "GET") {
            Object.assign(options, {
                body: JSON.stringify(data)
            }) 
        }
        const response = await fetch(baseUrl, options);
        // return response.json();
        return response;
    }

}