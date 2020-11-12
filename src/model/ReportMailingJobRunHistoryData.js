

import ApiClient from '../ApiClient';

/**
 * The ReportMailingJobRunHistoryData model module.
 * @module model/ReportMailingJobRunHistoryData
 * @version 1.0
 */
class ReportMailingJobRunHistoryData {
    /**
     * Constructs a new <code>ReportMailingJobRunHistoryData</code>.
     * @alias module:model/ReportMailingJobRunHistoryData
     */
    constructor() { 
        
        ReportMailingJobRunHistoryData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReportMailingJobRunHistoryData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReportMailingJobRunHistoryData} obj Optional instance to populate.
     * @return {module:model/ReportMailingJobRunHistoryData} The populated <code>ReportMailingJobRunHistoryData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportMailingJobRunHistoryData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('reportMailingJobId')) {
                obj['reportMailingJobId'] = ApiClient.convertToType(data['reportMailingJobId'], 'Number');
            }
            if (data.hasOwnProperty('startDateTime')) {
                obj['startDateTime'] = ApiClient.convertToType(data['startDateTime'], 'Date');
            }
            if (data.hasOwnProperty('endDateTime')) {
                obj['endDateTime'] = ApiClient.convertToType(data['endDateTime'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('errorMessage')) {
                obj['errorMessage'] = ApiClient.convertToType(data['errorMessage'], 'String');
            }
            if (data.hasOwnProperty('errorLog')) {
                obj['errorLog'] = ApiClient.convertToType(data['errorLog'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
ReportMailingJobRunHistoryData.prototype['id'] = undefined;

/**
 * @member {Number} reportMailingJobId
 */
ReportMailingJobRunHistoryData.prototype['reportMailingJobId'] = undefined;

/**
 * @member {Date} startDateTime
 */
ReportMailingJobRunHistoryData.prototype['startDateTime'] = undefined;

/**
 * @member {Date} endDateTime
 */
ReportMailingJobRunHistoryData.prototype['endDateTime'] = undefined;

/**
 * @member {String} status
 */
ReportMailingJobRunHistoryData.prototype['status'] = undefined;

/**
 * @member {String} errorMessage
 */
ReportMailingJobRunHistoryData.prototype['errorMessage'] = undefined;

/**
 * @member {String} errorLog
 */
ReportMailingJobRunHistoryData.prototype['errorLog'] = undefined;






export default ReportMailingJobRunHistoryData;

