

import ApiClient from '../ApiClient';
import JobDetailHistoryDataSwagger from './JobDetailHistoryDataSwagger';

/**
 * The GetJobsJobIDJobRunHistoryResponse model module.
 * @module model/GetJobsJobIDJobRunHistoryResponse
 * @version 1.0
 */
class GetJobsJobIDJobRunHistoryResponse {
    /**
     * Constructs a new <code>GetJobsJobIDJobRunHistoryResponse</code>.
     * GetJobsJobIDJobRunHistoryResponse
     * @alias module:model/GetJobsJobIDJobRunHistoryResponse
     */
    constructor() { 
        
        GetJobsJobIDJobRunHistoryResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetJobsJobIDJobRunHistoryResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetJobsJobIDJobRunHistoryResponse} obj Optional instance to populate.
     * @return {module:model/GetJobsJobIDJobRunHistoryResponse} The populated <code>GetJobsJobIDJobRunHistoryResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetJobsJobIDJobRunHistoryResponse();

            if (data.hasOwnProperty('totalFilteredRecords')) {
                obj['totalFilteredRecords'] = ApiClient.convertToType(data['totalFilteredRecords'], 'Number');
            }
            if (data.hasOwnProperty('pageItems')) {
                obj['pageItems'] = ApiClient.convertToType(data['pageItems'], [JobDetailHistoryDataSwagger]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} totalFilteredRecords
 */
GetJobsJobIDJobRunHistoryResponse.prototype['totalFilteredRecords'] = undefined;

/**
 * @member {Array.<module:model/JobDetailHistoryDataSwagger>} pageItems
 */
GetJobsJobIDJobRunHistoryResponse.prototype['pageItems'] = undefined;






export default GetJobsJobIDJobRunHistoryResponse;

