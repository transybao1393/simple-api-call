import MethodFactory from './MethodFactory';
import Config from '../../config';

export default class SimpleFactory extends MethodFactory {

    //- get some sample data form jsonplaceholder
    getSingleVAJob() {
        // let url = Config.API_BASE_URL + Config.JOB_MANAGEMENT.JOB_MANAGEMENT_GET_SINGLE + "jobId=" + "5b39b17c-099d-4d54-995e-64f4caffb64e";
        return super.generalRequest("GET", "https://vap.laap.snsp.gov.sg:8093/v1/va-jobs/details/single-response?jobId=06723b57-69c3-4c6a-9387-d1b6c1367f10");
    }

    deleteVAJobs() {
        let url = Config.API_BASE_URL + Config.JOB_MANAGEMENT.JOB_MANAGEMENT_DELETE_JOBS;
        return super.generalRequest("PUT", url, {
            data: {
                "jobIds": [
                    "90faca8c-2762-4ac9-82a6-fda9f5c277c0",
                    "5b39b17c-099d-4d54-995e-64f4caffb64e",
                ]
            }
        });
    }
}