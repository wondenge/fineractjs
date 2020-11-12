

import ApiClient from '../ApiClient';
import EnumOptionData from './EnumOptionData';

/**
 * The GetReportMailingJobsTemplate model module.
 * @module model/GetReportMailingJobsTemplate
 * @version 1.0
 */
class GetReportMailingJobsTemplate {
    /**
     * Constructs a new <code>GetReportMailingJobsTemplate</code>.
     * GetReportMailingJobsTemplate
     * @alias module:model/GetReportMailingJobsTemplate
     */
    constructor() { 
        
        GetReportMailingJobsTemplate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetReportMailingJobsTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetReportMailingJobsTemplate} obj Optional instance to populate.
     * @return {module:model/GetReportMailingJobsTemplate} The populated <code>GetReportMailingJobsTemplate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetReportMailingJobsTemplate();

            if (data.hasOwnProperty('isActive')) {
                obj['isActive'] = ApiClient.convertToType(data['isActive'], 'Boolean');
            }
            if (data.hasOwnProperty('emailAttachmentFileFormatOptions')) {
                obj['emailAttachmentFileFormatOptions'] = ApiClient.convertToType(data['emailAttachmentFileFormatOptions'], [EnumOptionData]);
            }
            if (data.hasOwnProperty('stretchyReportParamDateOptions')) {
                obj['stretchyReportParamDateOptions'] = ApiClient.convertToType(data['stretchyReportParamDateOptions'], [EnumOptionData]);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} isActive
 */
GetReportMailingJobsTemplate.prototype['isActive'] = undefined;

/**
 * @member {Array.<module:model/EnumOptionData>} emailAttachmentFileFormatOptions
 */
GetReportMailingJobsTemplate.prototype['emailAttachmentFileFormatOptions'] = undefined;

/**
 * @member {Array.<module:model/EnumOptionData>} stretchyReportParamDateOptions
 */
GetReportMailingJobsTemplate.prototype['stretchyReportParamDateOptions'] = undefined;






export default GetReportMailingJobsTemplate;

