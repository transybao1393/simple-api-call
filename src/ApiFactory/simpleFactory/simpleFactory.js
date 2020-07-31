import MethodFactory from './MethodFactory';

export default class SimpleFactory extends MethodFactory {
    constructor() {
        super()
    }

    //- get some sample data form jsonplaceholder
    getDataFromApi() {
        console.log('base url', this.baseUrl);
        console.log('option A data', super.viewOptionAData());
        return super.generalRequest("GET")
        .then(rs => console.log(rs));
    }

    postDataFromApi() {
        return "";
    }

    putDataFromApi() {
        return "";
    }
}