

import ApiClient from '../ApiClient';
import GetSurveyResponseDatatableData from './GetSurveyResponseDatatableData';

/**
 * The GetSurveyResponse model module.
 * @module model/GetSurveyResponse
 * @version 1.0
 */
class GetSurveyResponse {
    /**
     * Constructs a new <code>GetSurveyResponse</code>.
     * GetSurveyResponse
     * @alias module:model/GetSurveyResponse
     */
    constructor() { 
        
        GetSurveyResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSurveyResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSurveyResponse} obj Optional instance to populate.
     * @return {module:model/GetSurveyResponse} The populated <code>GetSurveyResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSurveyResponse();

            if (data.hasOwnProperty('datatableData')) {
                obj['datatableData'] = GetSurveyResponseDatatableData.constructFromObject(data['datatableData']);
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetSurveyResponseDatatableData} datatableData
 */
GetSurveyResponse.prototype['datatableData'] = undefined;

/**
 * @member {Boolean} enabled
 */
GetSurveyResponse.prototype['enabled'] = undefined;






export default GetSurveyResponse;

