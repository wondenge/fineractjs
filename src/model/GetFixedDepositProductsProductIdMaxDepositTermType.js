

import ApiClient from '../ApiClient';

/**
 * The GetFixedDepositProductsProductIdMaxDepositTermType model module.
 * @module model/GetFixedDepositProductsProductIdMaxDepositTermType
 * @version 1.0
 */
class GetFixedDepositProductsProductIdMaxDepositTermType {
    /**
     * Constructs a new <code>GetFixedDepositProductsProductIdMaxDepositTermType</code>.
     * @alias module:model/GetFixedDepositProductsProductIdMaxDepositTermType
     */
    constructor() { 
        
        GetFixedDepositProductsProductIdMaxDepositTermType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositProductsProductIdMaxDepositTermType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositProductsProductIdMaxDepositTermType} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositProductsProductIdMaxDepositTermType} The populated <code>GetFixedDepositProductsProductIdMaxDepositTermType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositProductsProductIdMaxDepositTermType();

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
GetFixedDepositProductsProductIdMaxDepositTermType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetFixedDepositProductsProductIdMaxDepositTermType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetFixedDepositProductsProductIdMaxDepositTermType.prototype['description'] = undefined;






export default GetFixedDepositProductsProductIdMaxDepositTermType;

