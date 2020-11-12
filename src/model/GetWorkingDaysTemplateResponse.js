

import ApiClient from '../ApiClient';
import EnumOptionData from './EnumOptionData';

/**
 * The GetWorkingDaysTemplateResponse model module.
 * @module model/GetWorkingDaysTemplateResponse
 * @version 1.0
 */
class GetWorkingDaysTemplateResponse {
    /**
     * Constructs a new <code>GetWorkingDaysTemplateResponse</code>.
     * GetWorkingDaysTemplateResponse
     * @alias module:model/GetWorkingDaysTemplateResponse
     */
    constructor() { 
        
        GetWorkingDaysTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetWorkingDaysTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetWorkingDaysTemplateResponse} obj Optional instance to populate.
     * @return {module:model/GetWorkingDaysTemplateResponse} The populated <code>GetWorkingDaysTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetWorkingDaysTemplateResponse();

            if (data.hasOwnProperty('repaymentRescheduleOptions')) {
                obj['repaymentRescheduleOptions'] = ApiClient.convertToType(data['repaymentRescheduleOptions'], [EnumOptionData]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/EnumOptionData>} repaymentRescheduleOptions
 */
GetWorkingDaysTemplateResponse.prototype['repaymentRescheduleOptions'] = undefined;






export default GetWorkingDaysTemplateResponse;

