

import ApiClient from '../ApiClient';

/**
 * The GetRecurringDepositProductsProductIdMaxDepositTermType model module.
 * @module model/GetRecurringDepositProductsProductIdMaxDepositTermType
 * @version 1.0
 */
class GetRecurringDepositProductsProductIdMaxDepositTermType {
    /**
     * Constructs a new <code>GetRecurringDepositProductsProductIdMaxDepositTermType</code>.
     * @alias module:model/GetRecurringDepositProductsProductIdMaxDepositTermType
     */
    constructor() { 
        
        GetRecurringDepositProductsProductIdMaxDepositTermType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositProductsProductIdMaxDepositTermType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositProductsProductIdMaxDepositTermType} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositProductsProductIdMaxDepositTermType} The populated <code>GetRecurringDepositProductsProductIdMaxDepositTermType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositProductsProductIdMaxDepositTermType();

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
GetRecurringDepositProductsProductIdMaxDepositTermType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetRecurringDepositProductsProductIdMaxDepositTermType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetRecurringDepositProductsProductIdMaxDepositTermType.prototype['description'] = undefined;






export default GetRecurringDepositProductsProductIdMaxDepositTermType;

