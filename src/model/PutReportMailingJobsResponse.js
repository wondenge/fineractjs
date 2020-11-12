

import ApiClient from '../ApiClient';
import PutReportMailingJobsResponseChanges from './PutReportMailingJobsResponseChanges';

/**
 * The PutReportMailingJobsResponse model module.
 * @module model/PutReportMailingJobsResponse
 * @version 1.0
 */
class PutReportMailingJobsResponse {
    /**
     * Constructs a new <code>PutReportMailingJobsResponse</code>.
     * PutReportMailingJobsResponse
     * @alias module:model/PutReportMailingJobsResponse
     */
    constructor() { 
        
        PutReportMailingJobsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutReportMailingJobsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutReportMailingJobsResponse} obj Optional instance to populate.
     * @return {module:model/PutReportMailingJobsResponse} The populated <code>PutReportMailingJobsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutReportMailingJobsResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = PutReportMailingJobsResponseChanges.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
PutReportMailingJobsResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutReportMailingJobsResponseChanges} changes
 */
PutReportMailingJobsResponse.prototype['changes'] = undefined;






export default PutReportMailingJobsResponse;

