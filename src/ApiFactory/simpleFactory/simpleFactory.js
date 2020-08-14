import MethodFactory from './MethodFactory';
import Config from '../../config';
import {isEmpty} from 'lodash';

export default class SimpleFactory extends MethodFactory {

    getSingleVAJob(jobId) {
        let url = Config.API_BASE_URL + Config.JOB_MANAGEMENT.JOB_MANAGEMENT_GET_SINGLE + "jobId=" + jobId;
        return super.generalRequest("GET", url);
    }

    deleteVAJobs(jobIds = []) {
        let url = Config.API_BASE_URL + Config.JOB_MANAGEMENT.JOB_MANAGEMENT_DELETE_JOBS;
        return super.generalRequest("PUT", url, {
            data: {
                "jobIds": jobIds
            }
        });
    }
}