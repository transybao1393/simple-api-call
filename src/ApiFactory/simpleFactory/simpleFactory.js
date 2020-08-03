import MethodFactory from './MethodFactory';

export default class SimpleFactory extends MethodFactory {
    constructor() {
        super()
    }

    //- get some sample data form jsonplaceholder
    getDataFromApi() {
        console.log('option A data', super.viewOptionAData());
        return super.generalRequest("https://jsonplaceholder.typicode.com/posts", "GET")
        .then(rs => console.log(rs));
    }

    postDataFromApi() {
        return "";
    }

    putDataFromApi() {
        return "";
    }
}