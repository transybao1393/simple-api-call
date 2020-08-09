import optionA from '../../responseType/optionA.json';
import axios from 'axios';
import https from 'https';
import {notification} from 'antd';

export default class MethodFactory {
    constructor() {
        const vaJobs = [
            "90faca8c-2762-4ac9-82a6-fda9f5c277c0",
            "06723b57-69c3-4c6a-9387-d1b6c1367f10",
            "5b39b17c-099d-4d54-995e-64f4caffb64e"
        ];
    }

    viewOptionAData() {
        return optionA;
    }

    openNotification(type, err) {
        notification[type]({
            message: "Notification Title",
            description: err.message   
        });
    };

    generalRequest(method, url, options = {}) {
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
            this.openNotification('error', err);
            return;
        });
    }
}