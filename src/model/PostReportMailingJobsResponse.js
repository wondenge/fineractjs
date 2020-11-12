

import ApiClient from '../ApiClient';

/**
 * The PostReportMailingJobsResponse model module.
 * @module model/PostReportMailingJobsResponse
 * @version 1.0
 */
class PostReportMailingJobsResponse {
    /**
     * Constructs a new <code>PostReportMailingJobsResponse</code>.
     * PostReportMailingJobsResponse
     * @alias module:model/PostReportMailingJobsResponse
     */
    constructor() { 
        
        PostReportMailingJobsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostReportMailingJobsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostReportMailingJobsResponse} obj Optional instance to populate.
     * @return {module:model/PostReportMailingJobsResponse} The populated <code>PostReportMailingJobsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostReportMailingJobsResponse();

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
PostReportMailingJobsResponse.prototype['resourceId'] = undefined;






export default PostReportMailingJobsResponse;

