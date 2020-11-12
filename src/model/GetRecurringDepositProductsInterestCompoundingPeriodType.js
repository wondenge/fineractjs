

import ApiClient from '../ApiClient';

/**
 * The GetRecurringDepositProductsInterestCompoundingPeriodType model module.
 * @module model/GetRecurringDepositProductsInterestCompoundingPeriodType
 * @version 1.0
 */
class GetRecurringDepositProductsInterestCompoundingPeriodType {
    /**
     * Constructs a new <code>GetRecurringDepositProductsInterestCompoundingPeriodType</code>.
     * @alias module:model/GetRecurringDepositProductsInterestCompoundingPeriodType
     */
    constructor() { 
        
        GetRecurringDepositProductsInterestCompoundingPeriodType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositProductsInterestCompoundingPeriodType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositProductsInterestCompoundingPeriodType} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositProductsInterestCompoundingPeriodType} The populated <code>GetRecurringDepositProductsInterestCompoundingPeriodType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositProductsInterestCompoundingPeriodType();

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
GetRecurringDepositProductsInterestCompoundingPeriodType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetRecurringDepositProductsInterestCompoundingPeriodType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetRecurringDepositProductsInterestCompoundingPeriodType.prototype['description'] = undefined;






export default GetRecurringDepositProductsInterestCompoundingPeriodType;

