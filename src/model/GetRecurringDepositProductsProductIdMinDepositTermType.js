

import ApiClient from '../ApiClient';

/**
 * The GetRecurringDepositProductsProductIdMinDepositTermType model module.
 * @module model/GetRecurringDepositProductsProductIdMinDepositTermType
 * @version 1.0
 */
class GetRecurringDepositProductsProductIdMinDepositTermType {
    /**
     * Constructs a new <code>GetRecurringDepositProductsProductIdMinDepositTermType</code>.
     * @alias module:model/GetRecurringDepositProductsProductIdMinDepositTermType
     */
    constructor() { 
        
        GetRecurringDepositProductsProductIdMinDepositTermType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositProductsProductIdMinDepositTermType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositProductsProductIdMinDepositTermType} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositProductsProductIdMinDepositTermType} The populated <code>GetRecurringDepositProductsProductIdMinDepositTermType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositProductsProductIdMinDepositTermType();

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
GetRecurringDepositProductsProductIdMinDepositTermType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetRecurringDepositProductsProductIdMinDepositTermType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetRecurringDepositProductsProductIdMinDepositTermType.prototype['description'] = undefined;






export default GetRecurringDepositProductsProductIdMinDepositTermType;

