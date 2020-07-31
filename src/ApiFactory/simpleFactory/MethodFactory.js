export default class MethodFactory {
    constructor(url) {
        const baseUrl = '';
    }

    //- get, put, post, delete method
    getRequest() {
        axios.get('/user?ID=12345')
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }

}