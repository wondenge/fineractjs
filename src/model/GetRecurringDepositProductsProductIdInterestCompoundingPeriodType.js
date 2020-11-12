

import ApiClient from '../ApiClient';

/**
 * The GetRecurringDepositProductsProductIdInterestCompoundingPeriodType model module.
 * @module model/GetRecurringDepositProductsProductIdInterestCompoundingPeriodType
 * @version 1.0
 */
class GetRecurringDepositProductsProductIdInterestCompoundingPeriodType {
    /**
     * Constructs a new <code>GetRecurringDepositProductsProductIdInterestCompoundingPeriodType</code>.
     * @alias module:model/GetRecurringDepositProductsProductIdInterestCompoundingPeriodType
     */
    constructor() { 
        
        GetRecurringDepositProductsProductIdInterestCompoundingPeriodType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositProductsProductIdInterestCompoundingPeriodType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositProductsProductIdInterestCompoundingPeriodType} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositProductsProductIdInterestCompoundingPeriodType} The populated <code>GetRecurringDepositProductsProductIdInterestCompoundingPeriodType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositProductsProductIdInterestCompoundingPeriodType();

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
GetRecurringDepositProductsProductIdInterestCompoundingPeriodType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetRecurringDepositProductsProductIdInterestCompoundingPeriodType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetRecurringDepositProductsProductIdInterestCompoundingPeriodType.prototype['description'] = undefined;






export default GetRecurringDepositProductsProductIdInterestCompoundingPeriodType;

