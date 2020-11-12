

import ApiClient from '../ApiClient';

/**
 * The PutReportMailingJobsResponseChanges model module.
 * @module model/PutReportMailingJobsResponseChanges
 * @version 1.0
 */
class PutReportMailingJobsResponseChanges {
    /**
     * Constructs a new <code>PutReportMailingJobsResponseChanges</code>.
     * @alias module:model/PutReportMailingJobsResponseChanges
     */
    constructor() { 
        
        PutReportMailingJobsResponseChanges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutReportMailingJobsResponseChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutReportMailingJobsResponseChanges} obj Optional instance to populate.
     * @return {module:model/PutReportMailingJobsResponseChanges} The populated <code>PutReportMailingJobsResponseChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutReportMailingJobsResponseChanges();

            if (data.hasOwnProperty('startDateTime')) {
                obj['startDateTime'] = ApiClient.convertToType(data['startDateTime'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} startDateTime
 */
PutReportMailingJobsResponseChanges.prototype['startDateTime'] = undefined;






export default PutReportMailingJobsResponseChanges;

