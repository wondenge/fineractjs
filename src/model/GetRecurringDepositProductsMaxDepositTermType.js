

import ApiClient from '../ApiClient';

/**
 * The GetRecurringDepositProductsMaxDepositTermType model module.
 * @module model/GetRecurringDepositProductsMaxDepositTermType
 * @version 1.0
 */
class GetRecurringDepositProductsMaxDepositTermType {
    /**
     * Constructs a new <code>GetRecurringDepositProductsMaxDepositTermType</code>.
     * @alias module:model/GetRecurringDepositProductsMaxDepositTermType
     */
    constructor() { 
        
        GetRecurringDepositProductsMaxDepositTermType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositProductsMaxDepositTermType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositProductsMaxDepositTermType} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositProductsMaxDepositTermType} The populated <code>GetRecurringDepositProductsMaxDepositTermType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositProductsMaxDepositTermType();

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
GetRecurringDepositProductsMaxDepositTermType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetRecurringDepositProductsMaxDepositTermType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetRecurringDepositProductsMaxDepositTermType.prototype['description'] = undefined;






export default GetRecurringDepositProductsMaxDepositTermType;

