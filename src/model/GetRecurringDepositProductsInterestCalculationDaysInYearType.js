

import ApiClient from '../ApiClient';

/**
 * The GetRecurringDepositProductsInterestCalculationDaysInYearType model module.
 * @module model/GetRecurringDepositProductsInterestCalculationDaysInYearType
 * @version 1.0
 */
class GetRecurringDepositProductsInterestCalculationDaysInYearType {
    /**
     * Constructs a new <code>GetRecurringDepositProductsInterestCalculationDaysInYearType</code>.
     * @alias module:model/GetRecurringDepositProductsInterestCalculationDaysInYearType
     */
    constructor() { 
        
        GetRecurringDepositProductsInterestCalculationDaysInYearType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositProductsInterestCalculationDaysInYearType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositProductsInterestCalculationDaysInYearType} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositProductsInterestCalculationDaysInYearType} The populated <code>GetRecurringDepositProductsInterestCalculationDaysInYearType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositProductsInterestCalculationDaysInYearType();

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
GetRecurringDepositProductsInterestCalculationDaysInYearType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetRecurringDepositProductsInterestCalculationDaysInYearType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetRecurringDepositProductsInterestCalculationDaysInYearType.prototype['description'] = undefined;






export default GetRecurringDepositProductsInterestCalculationDaysInYearType;

