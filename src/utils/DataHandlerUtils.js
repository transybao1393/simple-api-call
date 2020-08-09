import {get, size, isEmpty, omitBy} from 'lodash';
export default class DataHandlerUtils {
    
    //- to decide if the UI will show single notification or a modal with a list of data success and fail
    static dataHandleMultipleResponse(rawData) {
        //- get object of each part
        console.log('data received to handle', rawData);
        let count = 0;
        (size(get(rawData, ['data', 'success'])) > 0) && count++;
        (size(get(rawData, ['data', 'failedNotFound'])) > 0) && count++;
        (size(get(rawData, ['data', 'failedServerUncontactable'])) > 0) && count++;
        console.log('count...', count);
        return {
            multiple: count > 1 ? true : false, //- else single response
            data: omitBy(rawData.data, isEmpty) //- filter data empty inside object
        };
    }

    dataHandleSingleResponse(rawData) { //- another case
        let returnedData = {};
        //- check if data is null
        if(isEmpty(rawData.data)) { //- if rawData != null
            //- show error
            returnedData = {
                error: true,
                data: rawData
            };
        }else{
            //- success
            returnedData = {
                single: true,
                data: {}
            };
        }
        return returnedData;
    }

}