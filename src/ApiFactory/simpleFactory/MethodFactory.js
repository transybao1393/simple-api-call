import axios from 'axios';
import https from 'https';
import {notification} from 'antd';

export default class MethodFactory {

    openNotification(type, err) {
        notification[type]({
            message: "Error",
            description: (err.response !== undefined && err.response.data !== undefined) ? err.response.data.message || err.response.data.errorMessage : err.message
        });
    };

    //- GET, PUT, POST, DELETE request will go through here
    generalRequest(method, url, options = {}) {
        //- axios request config
        const consumeOptions = Object.assign({
            url,
            method,
            headers: {
                "JWT": "0ddbb14c-0047-4b8a-a4e7-cfee2aae6e55",
            },
            httpsAgent: new https.Agent({rejectUnauthorized: false}),
        }, options); //- data should be inside options
        console.log('options when consume', consumeOptions);
        return axios(consumeOptions)
        .catch(err => {
            console.log('error.response', err.response);
            this.openNotification('error', err);
            return;
        });
    }
}