

import ApiClient from '../ApiClient';

/**
 * The GetRecurringDepositAccountsInterestCalculationDaysInYearType model module.
 * @module model/GetRecurringDepositAccountsInterestCalculationDaysInYearType
 * @version 1.0
 */
class GetRecurringDepositAccountsInterestCalculationDaysInYearType {
    /**
     * Constructs a new <code>GetRecurringDepositAccountsInterestCalculationDaysInYearType</code>.
     * @alias module:model/GetRecurringDepositAccountsInterestCalculationDaysInYearType
     */
    constructor() { 
        
        GetRecurringDepositAccountsInterestCalculationDaysInYearType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositAccountsInterestCalculationDaysInYearType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositAccountsInterestCalculationDaysInYearType} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositAccountsInterestCalculationDaysInYearType} The populated <code>GetRecurringDepositAccountsInterestCalculationDaysInYearType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositAccountsInterestCalculationDaysInYearType();

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
GetRecurringDepositAccountsInterestCalculationDaysInYearType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetRecurringDepositAccountsInterestCalculationDaysInYearType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetRecurringDepositAccountsInterestCalculationDaysInYearType.prototype['description'] = undefined;






export default GetRecurringDepositAccountsInterestCalculationDaysInYearType;

