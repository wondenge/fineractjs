

import ApiClient from '../ApiClient';
import EnumOptionData from './EnumOptionData';

/**
 * The PutWorkingDaysRequest model module.
 * @module model/PutWorkingDaysRequest
 * @version 1.0
 */
class PutWorkingDaysRequest {
    /**
     * Constructs a new <code>PutWorkingDaysRequest</code>.
     * PutWorkingDaysRequest
     * @alias module:model/PutWorkingDaysRequest
     */
    constructor() { 
        
        PutWorkingDaysRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutWorkingDaysRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutWorkingDaysRequest} obj Optional instance to populate.
     * @return {module:model/PutWorkingDaysRequest} The populated <code>PutWorkingDaysRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutWorkingDaysRequest();

            if (data.hasOwnProperty('recurrence')) {
                obj['recurrence'] = ApiClient.convertToType(data['recurrence'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
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
 * @member {String} recurrence
 */
PutWorkingDaysRequest.prototype['recurrence'] = undefined;

/**
 * @member {String} locale
 */
PutWorkingDaysRequest.prototype['locale'] = undefined;

/**
 * @member {module:model/EnumOptionData} repaymentRescheduleType
 */
PutWorkingDaysRequest.prototype['repaymentRescheduleType'] = undefined;

/**
 * @member {Boolean} extendTermForDailyRepayments
 */
PutWorkingDaysRequest.prototype['extendTermForDailyRepayments'] = undefined;






export default PutWorkingDaysRequest;

