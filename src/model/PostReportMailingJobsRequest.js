

import ApiClient from '../ApiClient';

/**
 * The PostReportMailingJobsRequest model module.
 * @module model/PostReportMailingJobsRequest
 * @version 1.0
 */
class PostReportMailingJobsRequest {
    /**
     * Constructs a new <code>PostReportMailingJobsRequest</code>.
     * PostReportMailingJobsRequest
     * @alias module:model/PostReportMailingJobsRequest
     */
    constructor() { 
        
        PostReportMailingJobsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostReportMailingJobsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostReportMailingJobsRequest} obj Optional instance to populate.
     * @return {module:model/PostReportMailingJobsRequest} The populated <code>PostReportMailingJobsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostReportMailingJobsRequest();

            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('startDateTime')) {
                obj['startDateTime'] = ApiClient.convertToType(data['startDateTime'], 'Date');
            }
            if (data.hasOwnProperty('stretchyReportId')) {
                obj['stretchyReportId'] = ApiClient.convertToType(data['stretchyReportId'], 'Number');
            }
            if (data.hasOwnProperty('emailRecipients')) {
                obj['emailRecipients'] = ApiClient.convertToType(data['emailRecipients'], 'String');
            }
            if (data.hasOwnProperty('emailSubject')) {
                obj['emailSubject'] = ApiClient.convertToType(data['emailSubject'], 'String');
            }
            if (data.hasOwnProperty('emailMessage')) {
                obj['emailMessage'] = ApiClient.convertToType(data['emailMessage'], 'String');
            }
            if (data.hasOwnProperty('recurrence')) {
                obj['recurrence'] = ApiClient.convertToType(data['recurrence'], 'String');
            }
            if (data.hasOwnProperty('isActive')) {
                obj['isActive'] = ApiClient.convertToType(data['isActive'], 'Boolean');
            }
            if (data.hasOwnProperty('stretchyReportParamMap')) {
                obj['stretchyReportParamMap'] = ApiClient.convertToType(data['stretchyReportParamMap'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} locale
 */
PostReportMailingJobsRequest.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
PostReportMailingJobsRequest.prototype['dateFormat'] = undefined;

/**
 * @member {String} name
 */
PostReportMailingJobsRequest.prototype['name'] = undefined;

/**
 * @member {String} description
 */
PostReportMailingJobsRequest.prototype['description'] = undefined;

/**
 * @member {Date} startDateTime
 */
PostReportMailingJobsRequest.prototype['startDateTime'] = undefined;

/**
 * @member {Number} stretchyReportId
 */
PostReportMailingJobsRequest.prototype['stretchyReportId'] = undefined;

/**
 * @member {String} emailRecipients
 */
PostReportMailingJobsRequest.prototype['emailRecipients'] = undefined;

/**
 * @member {String} emailSubject
 */
PostReportMailingJobsRequest.prototype['emailSubject'] = undefined;

/**
 * @member {String} emailMessage
 */
PostReportMailingJobsRequest.prototype['emailMessage'] = undefined;

/**
 * @member {String} recurrence
 */
PostReportMailingJobsRequest.prototype['recurrence'] = undefined;

/**
 * @member {Boolean} isActive
 */
PostReportMailingJobsRequest.prototype['isActive'] = undefined;

/**
 * @member {String} stretchyReportParamMap
 */
PostReportMailingJobsRequest.prototype['stretchyReportParamMap'] = undefined;






export default PostReportMailingJobsRequest;

