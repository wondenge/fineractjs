

import ApiClient from '../ApiClient';

/**
 * The GetRecurringDepositProductsMinDepositTermType model module.
 * @module model/GetRecurringDepositProductsMinDepositTermType
 * @version 1.0
 */
class GetRecurringDepositProductsMinDepositTermType {
    /**
     * Constructs a new <code>GetRecurringDepositProductsMinDepositTermType</code>.
     * @alias module:model/GetRecurringDepositProductsMinDepositTermType
     */
    constructor() { 
        
        GetRecurringDepositProductsMinDepositTermType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositProductsMinDepositTermType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositProductsMinDepositTermType} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositProductsMinDepositTermType} The populated <code>GetRecurringDepositProductsMinDepositTermType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositProductsMinDepositTermType();

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
GetRecurringDepositProductsMinDepositTermType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetRecurringDepositProductsMinDepositTermType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetRecurringDepositProductsMinDepositTermType.prototype['description'] = undefined;






export default GetRecurringDepositProductsMinDepositTermType;

