

import ApiClient from '../ApiClient';

/**
 * The GetReportsTemplateResponse model module.
 * @module model/GetReportsTemplateResponse
 * @version 1.0
 */
class GetReportsTemplateResponse {
    /**
     * Constructs a new <code>GetReportsTemplateResponse</code>.
     * GetReportsTemplateResponse
     * @alias module:model/GetReportsTemplateResponse
     */
    constructor() { 
        
        GetReportsTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetReportsTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetReportsTemplateResponse} obj Optional instance to populate.
     * @return {module:model/GetReportsTemplateResponse} The populated <code>GetReportsTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetReportsTemplateResponse();

            if (data.hasOwnProperty('allowedReportTypes')) {
                obj['allowedReportTypes'] = ApiClient.convertToType(data['allowedReportTypes'], ['String']);
            }
            if (data.hasOwnProperty('allowedReportSubTypes')) {
                obj['allowedReportSubTypes'] = ApiClient.convertToType(data['allowedReportSubTypes'], ['String']);
            }
            if (data.hasOwnProperty('allowedParameters')) {
                obj['allowedParameters'] = ApiClient.convertToType(data['allowedParameters'], [Object]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} allowedReportTypes
 */
GetReportsTemplateResponse.prototype['allowedReportTypes'] = undefined;

/**
 * @member {Array.<String>} allowedReportSubTypes
 */
GetReportsTemplateResponse.prototype['allowedReportSubTypes'] = undefined;

/**
 * @member {Array.<Object>} allowedParameters
 */
GetReportsTemplateResponse.prototype['allowedParameters'] = undefined;






export default GetReportsTemplateResponse;

