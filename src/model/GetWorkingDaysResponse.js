

import ApiClient from '../ApiClient';
import EnumOptionData from './EnumOptionData';

/**
 * The GetWorkingDaysResponse model module.
 * @module model/GetWorkingDaysResponse
 * @version 1.0
 */
class GetWorkingDaysResponse {
    /**
     * Constructs a new <code>GetWorkingDaysResponse</code>.
     * GetWorkingDaysResponse
     * @alias module:model/GetWorkingDaysResponse
     */
    constructor() { 
        
        GetWorkingDaysResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetWorkingDaysResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetWorkingDaysResponse} obj Optional instance to populate.
     * @return {module:model/GetWorkingDaysResponse} The populated <code>GetWorkingDaysResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetWorkingDaysResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('recurrence')) {
                obj['recurrence'] = ApiClient.convertToType(data['recurrence'], 'String');
            }
            if (data.hasOwnProperty('repaymentRescheduleType')) {
                obj['repaymentRescheduleType'] = EnumOptionData.constructFromObject(data['repaymentRescheduleType']);
            }
            if (data.hasOwnProperty('extendTermForDailyRepayments')) {
                obj['extendTermForDailyRepayments'] = ApiClient.convertToType(data['extendTermForDailyRepayments'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetWorkingDaysResponse.prototype['id'] = undefined;

/**
 * @member {String} recurrence
 */
GetWorkingDaysResponse.prototype['recurrence'] = undefined;

/**
 * @member {module:model/EnumOptionData} repaymentRescheduleType
 */
GetWorkingDaysResponse.prototype['repaymentRescheduleType'] = undefined;

/**
 * @member {Boolean} extendTermForDailyRepayments
 */
GetWorkingDaysResponse.prototype['extendTermForDailyRepayments'] = undefined;






export default GetWorkingDaysResponse;

