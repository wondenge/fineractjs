

import ApiClient from '../ApiClient';

/**
 * The GetRecurringDepositAccountsInterestCompoundingPeriodType model module.
 * @module model/GetRecurringDepositAccountsInterestCompoundingPeriodType
 * @version 1.0
 */
class GetRecurringDepositAccountsInterestCompoundingPeriodType {
    /**
     * Constructs a new <code>GetRecurringDepositAccountsInterestCompoundingPeriodType</code>.
     * @alias module:model/GetRecurringDepositAccountsInterestCompoundingPeriodType
     */
    constructor() { 
        
        GetRecurringDepositAccountsInterestCompoundingPeriodType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositAccountsInterestCompoundingPeriodType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositAccountsInterestCompoundingPeriodType} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositAccountsInterestCompoundingPeriodType} The populated <code>GetRecurringDepositAccountsInterestCompoundingPeriodType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositAccountsInterestCompoundingPeriodType();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetRecurringDepositAccountsInterestCompoundingPeriodType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetRecurringDepositAccountsInterestCompoundingPeriodType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetRecurringDepositAccountsInterestCompoundingPeriodType.prototype['description'] = undefined;






export default GetRecurringDepositAccountsInterestCompoundingPeriodType;

