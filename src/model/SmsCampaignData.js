

import ApiClient from '../ApiClient';
import EnumOptionData from './EnumOptionData';

/**
 * The SmsCampaignData model module.
 * @module model/SmsCampaignData
 * @version 1.0
 */
class SmsCampaignData {
    /**
     * Constructs a new <code>SmsCampaignData</code>.
     * @alias module:model/SmsCampaignData
     */
    constructor() { 
        
        SmsCampaignData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SmsCampaignData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SmsCampaignData} obj Optional instance to populate.
     * @return {module:model/SmsCampaignData} The populated <code>SmsCampaignData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmsCampaignData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('campaignName')) {
                obj['campaignName'] = ApiClient.convertToType(data['campaignName'], 'String');
            }
            if (data.hasOwnProperty('campaignType')) {
                obj['campaignType'] = EnumOptionData.constructFromObject(data['campaignType']);
            }
            if (data.hasOwnProperty('runReportId')) {
                obj['runReportId'] = ApiClient.convertToType(data['runReportId'], 'Number');
            }
            if (data.hasOwnProperty('reportName')) {
                obj['reportName'] = ApiClient.convertToType(data['reportName'], 'String');
            }
            if (data.hasOwnProperty('paramValue')) {
                obj['paramValue'] = ApiClient.convertToType(data['paramValue'], 'String');
            }
            if (data.hasOwnProperty('campaignStatus')) {
                obj['campaignStatus'] = EnumOptionData.constructFromObject(data['campaignStatus']);
            }
            if (data.hasOwnProperty('nextTriggerDate')) {
                obj['nextTriggerDate'] = ApiClient.convertToType(data['nextTriggerDate'], 'Date');
            }
            if (data.hasOwnProperty('lastTriggerDate')) {
                obj['lastTriggerDate'] = ApiClient.convertToType(data['lastTriggerDate'], 'Date');
            }
            if (data.hasOwnProperty('recurrenceStartDate')) {
                obj['recurrenceStartDate'] = ApiClient.convertToType(data['recurrenceStartDate'], 'Date');
            }
            if (data.hasOwnProperty('recurrence')) {
                obj['recurrence'] = ApiClient.convertToType(data['recurrence'], 'String');
            }
            if (data.hasOwnProperty('notification')) {
                obj['notification'] = ApiClient.convertToType(data['notification'], 'Boolean');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
SmsCampaignData.prototype['id'] = undefined;

/**
 * @member {String} campaignName
 */
SmsCampaignData.prototype['campaignName'] = undefined;

/**
 * @member {module:model/EnumOptionData} campaignType
 */
SmsCampaignData.prototype['campaignType'] = undefined;

/**
 * @member {Number} runReportId
 */
SmsCampaignData.prototype['runReportId'] = undefined;

/**
 * @member {String} reportName
 */
SmsCampaignData.prototype['reportName'] = undefined;

/**
 * @member {String} paramValue
 */
SmsCampaignData.prototype['paramValue'] = undefined;

/**
 * @member {module:model/EnumOptionData} campaignStatus
 */
SmsCampaignData.prototype['campaignStatus'] = undefined;

/**
 * @member {Date} nextTriggerDate
 */
SmsCampaignData.prototype['nextTriggerDate'] = undefined;

/**
 * @member {Date} lastTriggerDate
 */
SmsCampaignData.prototype['lastTriggerDate'] = undefined;

/**
 * @member {Date} recurrenceStartDate
 */
SmsCampaignData.prototype['recurrenceStartDate'] = undefined;

/**
 * @member {String} recurrence
 */
SmsCampaignData.prototype['recurrence'] = undefined;

/**
 * @member {Boolean} notification
 */
SmsCampaignData.prototype['notification'] = undefined;

/**
 * @member {String} message
 */
SmsCampaignData.prototype['message'] = undefined;






export default SmsCampaignData;

