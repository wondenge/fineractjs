

import ApiClient from '../ApiClient';
import EnumOptionData from './EnumOptionData';

/**
 * The GetReportMailingJobsResponse model module.
 * @module model/GetReportMailingJobsResponse
 * @version 1.0
 */
class GetReportMailingJobsResponse {
    /**
     * Constructs a new <code>GetReportMailingJobsResponse</code>.
     * GetReportMailingJobsResponse
     * @alias module:model/GetReportMailingJobsResponse
     */
    constructor() { 
        
        GetReportMailingJobsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetReportMailingJobsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetReportMailingJobsResponse} obj Optional instance to populate.
     * @return {module:model/GetReportMailingJobsResponse} The populated <code>GetReportMailingJobsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetReportMailingJobsResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
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
            if (data.hasOwnProperty('recurrence')) {
                obj['recurrence'] = ApiClient.convertToType(data['recurrence'], 'String');
            }
            if (data.hasOwnProperty('timeline')) {
                obj['timeline'] = ApiClient.convertToType(data['timeline'], Object);
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
            if (data.hasOwnProperty('emailAttachmentFileFormat')) {
                obj['emailAttachmentFileFormat'] = EnumOptionData.constructFromObject(data['emailAttachmentFileFormat']);
            }
            if (data.hasOwnProperty('stretchyReport')) {
                obj['stretchyReport'] = ApiClient.convertToType(data['stretchyReport'], Object);
            }
            if (data.hasOwnProperty('stretchyReportParamMap')) {
                obj['stretchyReportParamMap'] = ApiClient.convertToType(data['stretchyReportParamMap'], 'String');
            }
            if (data.hasOwnProperty('nextRunDateTime')) {
                obj['nextRunDateTime'] = ApiClient.convertToType(data['nextRunDateTime'], 'Date');
            }
            if (data.hasOwnProperty('numberOfRuns')) {
                obj['numberOfRuns'] = ApiClient.convertToType(data['numberOfRuns'], 'Number');
            }
            if (data.hasOwnProperty('isActive')) {
                obj['isActive'] = ApiClient.convertToType(data['isActive'], 'Boolean');
            }
            if (data.hasOwnProperty('runAsUserId')) {
                obj['runAsUserId'] = ApiClient.convertToType(data['runAsUserId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetReportMailingJobsResponse.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetReportMailingJobsResponse.prototype['name'] = undefined;

/**
 * @member {String} description
 */
GetReportMailingJobsResponse.prototype['description'] = undefined;

/**
 * @member {Date} startDateTime
 */
GetReportMailingJobsResponse.prototype['startDateTime'] = undefined;

/**
 * @member {String} recurrence
 */
GetReportMailingJobsResponse.prototype['recurrence'] = undefined;

/**
 * @member {Object} timeline
 */
GetReportMailingJobsResponse.prototype['timeline'] = undefined;

/**
 * @member {String} emailRecipients
 */
GetReportMailingJobsResponse.prototype['emailRecipients'] = undefined;

/**
 * @member {String} emailSubject
 */
GetReportMailingJobsResponse.prototype['emailSubject'] = undefined;

/**
 * @member {String} emailMessage
 */
GetReportMailingJobsResponse.prototype['emailMessage'] = undefined;

/**
 * @member {module:model/EnumOptionData} emailAttachmentFileFormat
 */
GetReportMailingJobsResponse.prototype['emailAttachmentFileFormat'] = undefined;

/**
 * @member {Object} stretchyReport
 */
GetReportMailingJobsResponse.prototype['stretchyReport'] = undefined;

/**
 * @member {String} stretchyReportParamMap
 */
GetReportMailingJobsResponse.prototype['stretchyReportParamMap'] = undefined;

/**
 * @member {Date} nextRunDateTime
 */
GetReportMailingJobsResponse.prototype['nextRunDateTime'] = undefined;

/**
 * @member {Number} numberOfRuns
 */
GetReportMailingJobsResponse.prototype['numberOfRuns'] = undefined;

/**
 * @member {Boolean} isActive
 */
GetReportMailingJobsResponse.prototype['isActive'] = undefined;

/**
 * @member {Number} runAsUserId
 */
GetReportMailingJobsResponse.prototype['runAsUserId'] = undefined;






export default GetReportMailingJobsResponse;

