

import ApiClient from '../ApiClient';

/**
 * The GetRecurringDepositProductsProductIdPeriodType model module.
 * @module model/GetRecurringDepositProductsProductIdPeriodType
 * @version 1.0
 */
class GetRecurringDepositProductsProductIdPeriodType {
    /**
     * Constructs a new <code>GetRecurringDepositProductsProductIdPeriodType</code>.
     * @alias module:model/GetRecurringDepositProductsProductIdPeriodType
     */
    constructor() { 
        
        GetRecurringDepositProductsProductIdPeriodType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositProductsProductIdPeriodType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositProductsProductIdPeriodType} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositProductsProductIdPeriodType} The populated <code>GetRecurringDepositProductsProductIdPeriodType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositProductsProductIdPeriodType();

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
GetRecurringDepositProductsProductIdPeriodType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetRecurringDepositProductsProductIdPeriodType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetRecurringDepositProductsProductIdPeriodType.prototype['description'] = undefined;






export default GetRecurringDepositProductsProductIdPeriodType;

