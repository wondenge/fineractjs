

import ApiClient from '../ApiClient';

/**
 * The PutReportMailingJobsRequest model module.
 * @module model/PutReportMailingJobsRequest
 * @version 1.0
 */
class PutReportMailingJobsRequest {
    /**
     * Constructs a new <code>PutReportMailingJobsRequest</code>.
     * PutReportMailingJobsRequest
     * @alias module:model/PutReportMailingJobsRequest
     */
    constructor() { 
        
        PutReportMailingJobsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutReportMailingJobsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutReportMailingJobsRequest} obj Optional instance to populate.
     * @return {module:model/PutReportMailingJobsRequest} The populated <code>PutReportMailingJobsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutReportMailingJobsRequest();

            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('startDateTime')) {
                obj['startDateTime'] = ApiClient.convertToType(data['startDateTime'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} locale
 */
PutReportMailingJobsRequest.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
PutReportMailingJobsRequest.prototype['dateFormat'] = undefined;

/**
 * @member {Date} startDateTime
 */
PutReportMailingJobsRequest.prototype['startDateTime'] = undefined;






export default PutReportMailingJobsRequest;

