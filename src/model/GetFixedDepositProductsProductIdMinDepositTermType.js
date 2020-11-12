

import ApiClient from '../ApiClient';

/**
 * The GetFixedDepositProductsProductIdMinDepositTermType model module.
 * @module model/GetFixedDepositProductsProductIdMinDepositTermType
 * @version 1.0
 */
class GetFixedDepositProductsProductIdMinDepositTermType {
    /**
     * Constructs a new <code>GetFixedDepositProductsProductIdMinDepositTermType</code>.
     * @alias module:model/GetFixedDepositProductsProductIdMinDepositTermType
     */
    constructor() { 
        
        GetFixedDepositProductsProductIdMinDepositTermType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositProductsProductIdMinDepositTermType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositProductsProductIdMinDepositTermType} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositProductsProductIdMinDepositTermType} The populated <code>GetFixedDepositProductsProductIdMinDepositTermType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositProductsProductIdMinDepositTermType();

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
GetFixedDepositProductsProductIdMinDepositTermType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetFixedDepositProductsProductIdMinDepositTermType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetFixedDepositProductsProductIdMinDepositTermType.prototype['description'] = undefined;






export default GetFixedDepositProductsProductIdMinDepositTermType;

