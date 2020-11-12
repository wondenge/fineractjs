

import ApiClient from '../ApiClient';

/**
 * The DeleteReportMailingJobsResponse model module.
 * @module model/DeleteReportMailingJobsResponse
 * @version 1.0
 */
class DeleteReportMailingJobsResponse {
    /**
     * Constructs a new <code>DeleteReportMailingJobsResponse</code>.
     * DeleteReportMailingJobsResponse
     * @alias module:model/DeleteReportMailingJobsResponse
     */
    constructor() { 
        
        DeleteReportMailingJobsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteReportMailingJobsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteReportMailingJobsResponse} obj Optional instance to populate.
     * @return {module:model/DeleteReportMailingJobsResponse} The populated <code>DeleteReportMailingJobsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteReportMailingJobsResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
DeleteReportMailingJobsResponse.prototype['resourceId'] = undefined;






export default DeleteReportMailingJobsResponse;

